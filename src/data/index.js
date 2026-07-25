// Only slide structure is looked up through the registry (DataRegistry.slides).
// stations/fonts/languages/padding are imported directly where they're needed,
// so a broad eager glob would bundle them here a second time for no reason.
import slides from "./slides.json";

const DataRegistry = { slides };

export default DataRegistry;
