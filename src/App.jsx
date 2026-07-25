import Router from "./router.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { AudioProvider } from "./context/AudioProvider.jsx";
import { ContentProvider } from "./context/ContentProvider.jsx";
import { SpeechProvider } from "./context/SpeechProvider.jsx";
import KioskLifecycle from "./components/KioskLifecycle.jsx";
import AudioKeepAlive from "./components/AudioKeepAlive.jsx";

export default function App() {
  return (
    <AudioProvider>
      <SettingsProvider>
        <SpeechProvider>
          {/* Outside ContentProvider so it runs even before content loads. */}
          <KioskLifecycle />
          {/* Mounted once here, not per section: the tone has to stay unbroken
              across navigation, and be running on the station index too. */}
          <AudioKeepAlive />
          <ContentProvider>
            <Router />
          </ContentProvider>
        </SpeechProvider>
      </SettingsProvider>
    </AudioProvider>
  );
}
