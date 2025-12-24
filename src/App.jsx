import Router from "./router.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { AudioProvider } from "./components/AudioProvider/AudioProvider.jsx";

export default function App() {
  return (
    <AudioProvider>
      <SettingsProvider>
        <Router />
      </SettingsProvider>
    </AudioProvider>
  );
}
