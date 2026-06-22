import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import stationsData from "./data/stations.json";

// Route components are loaded on demand so the landing page doesn't ship
// Swiper, the slide components, or the localized content until they're needed.
const Index = lazy(() => import("./index.jsx"));
const StationRenderer = lazy(() => import("./components/StationRenderer.jsx"));
const SectionRenderer = lazy(() => import("./components/SectionRenderer.jsx"));

export default function Router() {
  return (
    <Suspense fallback={null}>
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
    </Suspense>
  );
}
