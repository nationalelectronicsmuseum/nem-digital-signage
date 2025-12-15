// Automatically grab ALL json files in data/*/*.json
const modules = import.meta.glob("../data/*/*.json", { eager: true });

// Structure: modules["../data/en/demos.json"].default

const content = {};

// Build a structure like:
// content = { en: { demos: {...}, concepts: {...}, artifacts: {...}, slides: [...] }, es: ... }
for (const path in modules) {
  const parts = path.split("/"); 
  const lang = parts[2];          // "en"
  const file = parts[3].replace(".json", ""); // "demos"

  if (!content[lang]) content[lang] = {};
  content[lang][file] = modules[path].default;
}

export function loadContent(lang) {
  return content[lang];
}
