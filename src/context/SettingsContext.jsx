import { createContext, useContext, useState, useEffect } from "react";
import languagesJson from "../data/languages.json";
import fontsJson from "../data/fonts.json";
import paddingJson from "../data/padding.json";
import { toggleOptions } from "../data/toggleOptions.js";

const defaultSettings = {
  language: languagesJson.languages.find((item) =>
    Object.hasOwn(item, "default")
  ),
  font: fontsJson.font.find((item) => Object.hasOwn(item, "default")),
  fontSize: fontsJson.fontSize.find((item) => Object.hasOwn(item, "default")),
  listPadding: paddingJson.padding.find((item) =>
    Object.hasOwn(item, "default")
  ),
  speechEnabled: toggleOptions.toggle.find((item) => item.name === "On"),
};

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const useIsSpeechEnabled = () => {
  const { settings } = useSettings();
  return settings.speechEnabled.value;
};

function resetLocalStorageAtMidnight() {
  const today = new Date().toDateString();
  const lastReset = localStorage.getItem("lastResetDate");

  if (lastReset !== today) {
    // Reset what you need
    localStorage.clear();
    localStorage.setItem("lastResetDate", today);
  }
}

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("appSettings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    resetLocalStorageAtMidnight();
    localStorage.setItem("appSettings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
