import { createContext, useContext, useState, useEffect } from "react";
import languagesJson from "../data/languages.json";
import fontsJson from "../data/fonts.json";
import paddingJson from "../data/padding.json";
import { toggleOptions } from "../components/SettingGroup.jsx";

const defaultSettings = {
  language: languagesJson.languages.find((item) =>
    item.hasOwnProperty("default")
  ),
  font: fontsJson.font.find((item) => item.hasOwnProperty("default")),
  fontSize: fontsJson.fontSize.find((item) => item.hasOwnProperty("default")),
  listPadding: paddingJson.padding.find((item) =>
    item.hasOwnProperty("default")
  ),
  speechEnabled: toggleOptions.toggle.find((item) => item.name === "On"),
};

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const isSpeechEnabled = () => {
  const {settings, setSettings} = useSettings();
  return settings.speechEnabled.value;
};

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem("appSettings");
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem("appSettings", JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
