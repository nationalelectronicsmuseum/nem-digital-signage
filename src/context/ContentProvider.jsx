import { createContext, useContext, useEffect, useState } from "react";
import { useSettings } from "./SettingsContext.jsx";
import { loadContent } from "../utils/loadContent.js";

const ContentContext = createContext(null);

export const useContent = () => useContext(ContentContext);

export const ContentProvider = ({ children }) => {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const [content, setContent] = useState(null);

  useEffect(() => {
    let cancelled = false;
    loadContent(languageCode).then((loaded) => {
      if (!cancelled) setContent(loaded);
    });
    return () => {
      cancelled = true;
    };
  }, [languageCode]);

  // Keep the document language in sync with the displayed content so screen
  // readers use the right pronunciation rules (WCAG 3.1.1).
  useEffect(() => {
    document.documentElement.lang = languageCode;
  }, [languageCode]);

  // Wait for the first language to load before rendering. On later language
  // switches the previous content stays in place until the new one arrives,
  // so switching does not blank the screen.
  if (!content) return null;

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
};
