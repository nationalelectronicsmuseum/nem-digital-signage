import artifact from "../assets/database/artifact.js";
import artifactSpanish from "../assets/database/artifact-spanish.js";
import artifactFrench from "../assets/database/artifact-french.js";
import artifactGerman from "../assets/database/artifact-german.js";
import { LANGUAGE_ENGLISH, LANGUAGE_FRENCH, LANGUAGE_GERMAN, LANGUAGE_SPANISH } from "./Constants.js";
import { useSettings } from "../components/AccessibilitySettings/AccessibilitySettings.jsx";

export const getLocalizedArtifact = (titleTag) => {
    const { settings, setSettings } = useSettings();
    const actions = {
        [LANGUAGE_ENGLISH]: () => artifact.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_SPANISH]: () => artifactSpanish.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_FRENCH]: () => artifactFrench.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_GERMAN]: () => artifactGerman.filter(x => x.tag === titleTag).pop(),
    };
    return actions[settings.language]() || (() => console.log("Localization.js: " + titleTag + " not found for " + lang));
};