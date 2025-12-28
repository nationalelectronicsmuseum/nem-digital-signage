const modules = import.meta.glob("../slides/*.{jsx,js,tsx,ts}", {
  eager: true,
});

const registry = {};

for (const path in modules) {
  const name = path
    .replace(/^\.\.\/slides\//, "")
    .replace(/\.(jsx|js|tsx|ts)$/, "");

  const mod = modules[path];

  if (!mod || !mod.default) {
    console.warn(`[slideRegistry] Module ${path} has no default export.`);
    continue;
  }

  registry[name] = mod.default;
}

export function getSlideComponent(name) {
  const Slide = registry[name];
  if (!Slide) {
    return () => <div>Slide "{name}" not found in registry.</div>;
  }
  return Slide;
}

export default registry;
