import Router from "./router.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { AudioProvider } from "./context/AudioProvider.jsx";
import { ContentProvider } from "./context/ContentProvider.jsx";
import { SpeechProvider } from "./context/SpeechProvider.jsx";
import KioskLifecycle from "./components/KioskLifecycle.jsx";

export default function App() {
  return (
    <AudioProvider>
      <SettingsProvider>
        <SpeechProvider>
          {/* Outside ContentProvider so it runs even before content loads. */}
          <KioskLifecycle />
          <ContentProvider>
            <Router />
          </ContentProvider>
        </SpeechProvider>
      </SettingsProvider>
    </AudioProvider>
  );
}
