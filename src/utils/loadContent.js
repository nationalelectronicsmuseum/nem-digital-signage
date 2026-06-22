// Localized content is imported lazily so each kiosk only downloads the
// language it is currently displaying. Other languages are fetched on demand
// when the visitor switches languages.
const modules = import.meta.glob("../data/*/*.json");

export async function loadContent(lang) {
  const prefix = `../data/${lang}/`;
  const paths = Object.keys(modules).filter((path) => path.startsWith(prefix));
  const entries = await Promise.all(
    paths.map(async (path) => {
      const file = path.slice(prefix.length).replace(".json", "");
      const mod = await modules[path]();
      return [file, mod.default];
    })
  );
  return Object.fromEntries(entries);
}
