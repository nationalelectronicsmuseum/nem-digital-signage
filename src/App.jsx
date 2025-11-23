import Router from "./router.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";

export default function App() {
  return (
    <SettingsProvider>
      <Router />
    </SettingsProvider>
  );
}
