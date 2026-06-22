import { createContext, useContext, useState, useEffect } from "react";
import languagesJson from "../data/languages.json";
import fontsJson from "../data/fonts.json";
import paddingJson from "../data/padding.json";
import { toggleOptions } from "../data/toggleOptions.js";

const defaultSettings = {
  language: languagesJson.languages.find((item) => "default" in item),
  font: fontsJson.font.find((item) => "default" in item),
  fontSize: fontsJson.fontSize.find((item) => "default" in item),
  listPadding: paddingJson.padding.find((item) => "default" in item),
  speechEnabled: toggleOptions.toggle.find((item) => item.name === "On"),
};

// Re-resolve a saved option against the current option list by a stable key.
// Stale or incompatible saved values (e.g. settings written by an older
// deployment) fall back to the default instead of leaving the app broken.
function resolveOption(list, key, saved, fallback) {
  const match =
    saved && typeof saved === "object"
      ? list.find((option) => option[key] === saved[key])
      : null;
  return match || fallback;
}

function loadSettings() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem("appSettings"));
  } catch {
    saved = null;
  }
  if (!saved || typeof saved !== "object") return defaultSettings;
  return {
    language: resolveOption(
      languagesJson.languages,
      "languageCode",
      saved.language,
      defaultSettings.language
    ),
    font: resolveOption(fontsJson.font, "name", saved.font, defaultSettings.font),
    fontSize: resolveOption(
      fontsJson.fontSize,
      "name",
      saved.fontSize,
      defaultSettings.fontSize
    ),
    listPadding: resolveOption(
      paddingJson.padding,
      "name",
      saved.listPadding,
      defaultSettings.listPadding
    ),
    speechEnabled: resolveOption(
      toggleOptions.toggle,
      "name",
      saved.speechEnabled,
      defaultSettings.speechEnabled
    ),
  };
}

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
  const [settings, setSettings] = useState(loadSettings);

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
