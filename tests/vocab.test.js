import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { buildVocabRegex, escapeRegExp } from "../src/utils/vocab.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "src", "data");
const readJson = (p) => JSON.parse(readFileSync(p, "utf-8"));
const languages = readJson(join(dataDir, "languages.json")).languages.map(
  (l) => l.languageCode
);

describe("buildVocabRegex", () => {
  it("never throws on regex-metacharacter keys (curator data)", () => {
    const nasty = ["C++", "n-type [semiconductor]", "P (power)", "a.b*c", "x|y", "(unclosed"];
    for (const key of nasty) {
      expect(() => buildVocabRegex(key), key).not.toThrow();
    }
  });

  it("matches an ASCII term on a word boundary", () => {
    const re = buildVocabRegex("current");
    expect("the current flows").toMatch(re);
    // Should not match inside a larger word.
    expect(buildVocabRegex("arc").test("search")).toBe(false);
  });

  it("matches a CJK term without ASCII word boundaries", () => {
    const re = buildVocabRegex("电流");
    expect(re.test("这是电流的例子")).toBe(true);
  });

  it("escapeRegExp neutralizes metacharacters", () => {
    expect(new RegExp(escapeRegExp("a+b")).test("a+b")).toBe(true);
  });

  it("every real vocabulary key in every language builds a valid regex", () => {
    for (const lang of languages) {
      const vocab = readJson(join(dataDir, lang, "vocabulary.json"));
      for (const key of Object.keys(vocab)) {
        expect(() => buildVocabRegex(key), `${lang}: ${key}`).not.toThrow();
      }
    }
  });
});
