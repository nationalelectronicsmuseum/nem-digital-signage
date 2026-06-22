import { useEffect, useRef, useState } from "react";
import { useSettings } from "../context/SettingsContext.jsx";

const WARM_SPEECH_INTERVAL_MILLIS = 1000;

export function useSpeechSynthesis() {
  const { settings } = useSettings();
  const [voices, setVoices] = useState([]);
  const [status, setStatus] = useState("idle");
  const utteranceRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);

    const interval = setInterval(() => {
      const u = new SpeechSynthesisUtterance(" ");
      u.volume = 0;
      window.speechSynthesis.speak(u);
    }, WARM_SPEECH_INTERVAL_MILLIS);

    return () => {
      clearInterval(interval);
      window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
    };
  }, []);

  const speak = (text) => {
    stop();
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find((voice) =>
      voice.lang.startsWith(settings.language.speechCode)
    );
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    } else {
      // Fall back to the browser default voice rather than blocking the kiosk
      // with a modal dialog nobody can dismiss.
      console.warn(
        `No voice found for language: ${settings.language.speechCode}`
      );
    }

    utterance.onstart = () => setStatus("playing");
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => setStatus("idle");

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const toggle = (text, voice = null) => {
    if (status === "idle") {
      speak(text, voice);
    } else if (status === "playing") {
      window.speechSynthesis.pause();
      setStatus("paused");
    } else if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setStatus("idle");
  };

  return {
    voices,
    status,
    toggle,
    stop,
  };
}
