import SettingGroup from "./SettingGroup";
import { useSettings } from "../context/SettingsContext.jsx";
import languagesJson from "../data/languages.json";
import fontsJson from "../data/fonts.json";
import paddingJson from "../data/padding.json";
import "../styles/AccessibilityMenu.css";

export default function AccessibilityMenu({ menuRef }) {
  const { settings, setSettings } = useSettings();
  return (
    <div ref={menuRef} className="accessibility-menu-container">
      <h2 className="accessibility-menu-title">Accessibility Menu</h2>

      {process.env.NODE_ENV === "development" && (
        <div>{JSON.stringify(settings)}</div>
      )}

      <SettingGroup
        label="Language"
        options={languagesJson.languages}
        value={settings.language}
        onChange={(v) => setSettings((p) => ({ ...p, language: v }))}
      />

      <SettingGroup
        label="Font Type"
        options={fontsJson.font}
        value={settings.font}
        onChange={(v) =>
          setSettings((p) => {
            document.documentElement.style.setProperty(
              "--app-font",
              v.fontCode
            );
            return { ...p, font: v };
          })
        }
      />

      <SettingGroup
        label="Text Size"
        options={fontsJson.fontSize}
        value={settings.fontSize}
        onChange={(v) =>
          setSettings((p) => ({
            ...p,
            listPadding: paddingJson.padding.find(
              (item) => item.name === v.name
            ),
            fontSize: v,
          }))
        }
      />

      <SettingGroup
        label="Audio Controls"
        value={settings.speechEnabled}
        onChange={(v) => setSettings((p) => ({ ...p, speechEnabled: v }))}
      />
    </div>
  );
}
