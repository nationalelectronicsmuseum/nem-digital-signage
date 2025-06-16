import { createContext, useContext, useState, useEffect } from 'react';
import * as Constant from "../../assets/Constants";

const defaultSettings = {
  font: Constant.FONT_SANS,
  fontSize: Constant.FONT_SIZE_MEDIUM,
  language: Constant.LANGUAGE_ENGLISH,
  speech: Constant.SPEECH_ENGLISH,
  listPadding: Constant.LIST_PADDING_MEDIUM,
  speechEnabled: false
};

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('appSettings');
    return saved ? JSON.parse(saved) : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
