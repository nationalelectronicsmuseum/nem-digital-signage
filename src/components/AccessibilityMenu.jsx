import SettingGroup from "./SettingGroup";
import { useSettings } from "../context/SettingsContext.jsx";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import languagesJson from "../data/languages.json";
import fontsJson from "../data/fonts.json";
import paddingJson from "../data/padding.json";
import "../styles/AccessibilityMenu.css";

export default function AccessibilityMenu({ menuRef }) {
  const { settings, setSettings } = useSettings();
  const content = useContent();
  const t = (key, fallback) =>
    resolvePath(content, "common.label." + key) || fallback;
  // Languages are shown by their own name (endonym) so a visitor can always
  // find and switch back to their language regardless of the current UI locale.
  const languageLabel = (opt) => opt.endonym || opt.name;
  // Sizes / On-Off are translated into the current language.
  const localizedLabel = (opt) => t(opt.name.toLowerCase(), opt.name);
  return (
    <div ref={menuRef} className="accessibility-menu-container">
      <h2 className="accessibility-menu-title">
        {t("accessibilityMenu", "Accessibility Menu")}
      </h2>

      {import.meta.env.DEV && (
        <div>{JSON.stringify(settings)}</div>
      )}

      <SettingGroup
        label={t("language", "Language")}
        options={languagesJson.languages}
        value={settings.language}
        getLabel={languageLabel}
        onChange={(v) => setSettings((p) => ({ ...p, language: v }))}
      />

      <SettingGroup
        label={t("fontType", "Font Type")}
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
        label={t("textSize", "Text Size")}
        options={fontsJson.fontSize}
        value={settings.fontSize}
        getLabel={localizedLabel}
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
        label={t("audioControls", "Audio Controls")}
        value={settings.speechEnabled}
        getLabel={localizedLabel}
        onChange={(v) => setSettings((p) => ({ ...p, speechEnabled: v }))}
      />
    </div>
  );
}
