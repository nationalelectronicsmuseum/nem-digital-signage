const modules = import.meta.glob("../data/*/*.json", { eager: true });

const content = {};

for (const path in modules) {
  const parts = path.split("/");
  const lang = parts[2];
  const file = parts[3].replace(".json", "");

  if (!content[lang]) content[lang] = {};
  content[lang][file] = modules[path].default;
}

export function loadContent(lang) {
  return content[lang];
}
