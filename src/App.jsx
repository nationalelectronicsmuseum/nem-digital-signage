import Router from "./router.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { AudioProvider } from "./context/AudioProvider.jsx";
import { ContentProvider } from "./context/ContentProvider.jsx";

export default function App() {
  return (
    <AudioProvider>
      <SettingsProvider>
        <ContentProvider>
          <Router />
        </ContentProvider>
      </SettingsProvider>
    </AudioProvider>
  );
}
