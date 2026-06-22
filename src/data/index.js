const modules = import.meta.glob("./*.json", { eager: true });
const DataRegistry = Object.fromEntries(
  Object.entries(modules).map(([path, content]) => {
    const name = path.split("/").pop().replace(".json", "");
    return [name, content];
  })
);

export default DataRegistry;
