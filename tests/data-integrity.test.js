import { describe, it, expect } from "vitest";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "src", "data");
const publicDir = join(root, "public");

const readJson = (p) => JSON.parse(readFileSync(p, "utf-8"));
const stations = readJson(join(dataDir, "stations.json")).stations;
const slides = readJson(join(dataDir, "slides.json"));
const languages = readJson(join(dataDir, "languages.json")).languages.map(
  (l) => l.languageCode
);

const slideRefs = stations.flatMap((st) =>
  st.sections.flatMap((sec) => (sec.slides || []).map((s) => ({ ...s, station: st.id, section: sec.id })))
);

// Slide component types that exist as files in src/slides/.
const slideComponents = new Set(
  readdirSync(join(root, "src", "slides"))
    .filter((f) => /\.(jsx|tsx|js|ts)$/.test(f))
    .map((f) => f.replace(/\.(jsx|tsx|js|ts)$/, ""))
);

describe("stations ↔ slides wiring", () => {
  it("every referenced slideID exists in slides.json", () => {
    const missing = slideRefs.filter((r) => !(r.slideID in slides));
    expect(missing, JSON.stringify(missing, null, 2)).toHaveLength(0);
  });

  it("every referenced slide type has a component in src/slides/", () => {
    const unknown = slideRefs.filter((r) => !slideComponents.has(r.type));
    expect(unknown, JSON.stringify(unknown, null, 2)).toHaveLength(0);
  });
});

describe("localization parity", () => {
  const enFiles = readdirSync(join(dataDir, "en")).filter((f) =>
    f.endsWith(".json")
  );

  it("every language ships the same content files as en", () => {
    for (const lang of languages) {
      const files = readdirSync(join(dataDir, lang)).filter((f) =>
        f.endsWith(".json")
      );
      expect(new Set(files), `lang ${lang}`).toEqual(new Set(enFiles));
    }
  });

  it("every section has a card + section title in every language", () => {
    const sectionIds = [...new Set(stations.flatMap((st) => st.sections.map((s) => s.id)))];
    for (const lang of languages) {
      const common = readJson(join(dataDir, lang, "common.json"));
      for (const id of sectionIds) {
        expect(common.sectionCardTitle?.[id], `${lang} card ${id}`).toBeTruthy();
        expect(common.sectionTitle?.[id], `${lang} title ${id}`).toBeTruthy();
      }
    }
  });

  it("every language's label namespace matches en's keys", () => {
    const enLabels = Object.keys(readJson(join(dataDir, "en", "common.json")).label);
    for (const lang of languages) {
      const labels = Object.keys(readJson(join(dataDir, lang, "common.json")).label);
      expect(new Set(labels), `lang ${lang}`).toEqual(new Set(enLabels));
    }
  });
});

describe("media references resolve on disk", () => {
  const IMAGE_RE = /\.(png|jpe?g|gif|webp|svg|jfif)$/i;
  const VIDEO_RE = /\.(mp4|webm)$/i;

  // Collect every string value that looks like a media filename from all data.
  const mediaRefs = new Set();
  const walk = (v) => {
    if (typeof v === "string") {
      if (IMAGE_RE.test(v)) mediaRefs.add(["images", v]);
      else if (VIDEO_RE.test(v)) mediaRefs.add(["video", v]);
    } else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  for (const lang of languages) {
    for (const f of readdirSync(join(dataDir, lang))) {
      if (f.endsWith(".json")) walk(readJson(join(dataDir, lang, f)));
    }
  }
  // Section thumbnails live in stations.json as absolute /images/... paths.
  const sectionImages = stations
    .flatMap((st) => st.sections.map((s) => s.image))
    .filter(Boolean);

  it("every image/video referenced in content exists in public/", () => {
    const missing = [];
    for (const [folder, name] of mediaRefs) {
      // Names in content are bare filenames served from /images or /video.
      const rel = name.startsWith("/") ? name.slice(1) : join(folder, name);
      if (!existsSync(join(publicDir, rel))) missing.push(name);
    }
    expect([...new Set(missing)], JSON.stringify(missing, null, 2)).toHaveLength(0);
  });

  it("every section thumbnail exists in public/", () => {
    const missing = sectionImages.filter(
      (img) => !existsSync(join(publicDir, img.replace(/^\//, "")))
    );
    expect(missing, JSON.stringify(missing, null, 2)).toHaveLength(0);
  });
});
