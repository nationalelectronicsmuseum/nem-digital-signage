import { createContext, useContext, useEffect, useState } from "react";
import { useSettings } from "./SettingsContext.jsx";

// One silent "warm" utterance per second keeps some audio systems from powering
// down the speech pipeline (a kiosk power-saving workaround).
const WARM_SPEECH_INTERVAL_MILLIS = 1000;

const SpeechContext = createContext(null);

export const useSpeech = () => useContext(SpeechContext);

// A single speech-synthesis owner for the whole app. Previously every
// SpeechPlaybackControls instantiated its own hook, which meant N warm-speech
// timers and N voiceschanged listeners per slide, plus play/pause icons that
// fell out of sync because window.speechSynthesis is global. Centralizing it
// gives one timer, one voices list, and a shared "what is speaking" state.
export const SpeechProvider = ({ children }) => {
  const { settings } = useSettings();
  const [voices, setVoices] = useState([]);
  const [status, setStatus] = useState("idle"); // "idle" | "playing" | "paused"
  const [activeText, setActiveText] = useState(null);

  useEffect(() => {
    const loadVoices = () => setVoices(window.speechSynthesis.getVoices());
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    const interval = setInterval(() => {
      const warm = new SpeechSynthesisUtterance(" ");
      warm.volume = 0;
      window.speechSynthesis.speak(warm);
    }, WARM_SPEECH_INTERVAL_MILLIS);

    return () => {
      clearInterval(interval);
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
      window.speechSynthesis.cancel();
    };
  }, []);

  const speak = (text) => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const speechCode = settings.language.speechCode;
    const selectedVoice = voices.find((voice) =>
      voice.lang.startsWith(speechCode)
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      // Fall back to the browser default voice rather than blocking the kiosk.
      console.warn(`No voice found for language: ${speechCode}`);
    }

    utterance.onend = () => {
      setStatus("idle");
      setActiveText(null);
    };
    utterance.onerror = () => {
      setStatus("idle");
      setActiveText(null);
    };

    setActiveText(text);
    setStatus("playing");
    window.speechSynthesis.speak(utterance);
  };

  const toggle = (text) => {
    if (activeText === text && status === "playing") {
      window.speechSynthesis.pause();
      setStatus("paused");
    } else if (activeText === text && status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
    } else {
      speak(text);
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setStatus("idle");
    setActiveText(null);
  };

  return (
    <SpeechContext.Provider value={{ status, activeText, toggle, stop }}>
      {children}
    </SpeechContext.Provider>
  );
};
