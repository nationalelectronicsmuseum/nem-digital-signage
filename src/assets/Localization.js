import artifact from "../assets/database/artifact.js";
import artifactSpanish from "../assets/database/artifact-spanish.js";
import artifactFrench from "../assets/database/artifact-french.js";
import artifactGerman from "../assets/database/artifact-german.js";
import artifactChinese from "../assets/database/artifact-chinese.js";
import artifactjapanese from "../assets/database/artifact-japanese.js";
import stringConstant from "../assets/database/constant.js";
import stringConstantSpanish from "../assets/database/constant-spanish.js";
import stringConstantFrench from "../assets/database/constant-french.js";
import stringConstantGerman from "../assets/database/constant-german.js";
import stringConstantChinese from "../assets/database/constant-chinese.js";
import stringConstantJapanese from "../assets/database/constant-japanese.js";
import { LANGUAGE_CHINESE, LANGUAGE_ENGLISH, LANGUAGE_FRENCH, LANGUAGE_GERMAN, LANGUAGE_JAPANESE, LANGUAGE_SPANISH } from "./Constants.js";
import { useSettings } from "../components/AccessibilitySettings/AccessibilitySettings.jsx";

export const getLocalizedArtifact = (titleTag) => {
    const { settings, setSettings } = useSettings();
    const actions = {
        [LANGUAGE_ENGLISH]: () => artifact.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_SPANISH]: () => artifactSpanish.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_FRENCH]: () => artifactFrench.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_GERMAN]: () => artifactGerman.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_CHINESE]: () => artifactChinese.filter(x => x.tag === titleTag).pop(),
        [LANGUAGE_JAPANESE]: () => artifactjapanese.filter(x => x.tag === titleTag).pop(),
    };
    return actions[settings.language]() || (() => console.log("Localization.js: " + titleTag + " not found for " + lang));
};

export const getLocalizedStringConstant = (constantTag) => {
    const { settings, setSettings } = useSettings();
    const actions = {
        [LANGUAGE_ENGLISH]: () => stringConstant[constantTag],
        [LANGUAGE_SPANISH]: () => stringConstantSpanish[constantTag],
        [LANGUAGE_FRENCH]: () => stringConstantFrench[constantTag],
        [LANGUAGE_GERMAN]: () => stringConstantGerman[constantTag],
        [LANGUAGE_CHINESE]: () => stringConstantChinese[constantTag],
        [LANGUAGE_JAPANESE]: () => stringConstantJapanese[constantTag],
    };
    return actions[settings.language]() || (() => console.log("Localization.js: " + constantTag + " not found for " + lang));
};