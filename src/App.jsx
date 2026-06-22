import Router from "./router.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";
import { AudioProvider } from "./context/AudioProvider.jsx";
import { ContentProvider } from "./context/ContentProvider.jsx";
import { SpeechProvider } from "./context/SpeechProvider.jsx";

export default function App() {
  return (
    <AudioProvider>
      <SettingsProvider>
        <SpeechProvider>
          <ContentProvider>
            <Router />
          </ContentProvider>
        </SpeechProvider>
      </SettingsProvider>
    </AudioProvider>
  );
}
