import { Routes, Route } from "react-router-dom";
import StationRenderer from "./components/StationRenderer.jsx";
import SectionRenderer from "./components/SectionRenderer.jsx";
import stationsData from "./data/stations.json";
import Index from "./index.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      {stationsData.stations.map((station) => (
        <Route key={station.id} path={station.id}>
          <Route index element={<StationRenderer station={station} />} />
          {station.sections.map((section) => (
            <Route
              key={section.id}
              path={section.id}
              element={<SectionRenderer station={station} section={section} />}
            />
          ))}
        </Route>
      ))}
    </Routes>
  );
}
