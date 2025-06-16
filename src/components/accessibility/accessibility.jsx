import { useState } from "react";
import "./accessibility.css";
import aIcon from "../../assets/img/accessibleIcon.svg"
import { useSettings } from "../../components/AccessibilitySettings/AccessibilitySettings.jsx";
import { useSpeechSynthesis } from '../speech/useSpeechSynthesis.jsx';
import * as Constant from "../../assets/Constants.js";

export function Accessibility() {
  const [state, setState] = useState("hide");
  const [selected, setSelected] = useState("qdbp notselected");

  const { settings, setSettings } = useSettings();
  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const { voices, speechStatus, toggle, stop: stopSpeech } = useSpeechSynthesis();

  const fontInfo = document.querySelector(".fontSelect")

  const selectEng = () => {
    stopSpeech();
    updateSetting("language", Constant.LANGUAGE_ENGLISH);
    updateSetting("speech", Constant.SPEECH_ENGLISH);
  }
  const selectSpa = () => {
    stopSpeech();
    updateSetting("language", Constant.LANGUAGE_SPANISH);
    updateSetting("speech", Constant.SPEECH_SPANISH);
  }
  const selectGer = () => {
    stopSpeech();
    updateSetting("language", Constant.LANGUAGE_GERMAN);
    updateSetting("speech", Constant.SPEECH_GERMAN);
  }
  const selectFre = () => {
    stopSpeech();
    updateSetting("language", Constant.LANGUAGE_FRENCH);
    updateSetting("speech", Constant.SPEECH_FRENCH);
  }

  // Setting the Font Size
  const fontDef = () => {
    updateSetting("fontSize", Constant.FONT_SIZE_MEDIUM)
    updateSetting("listPadding", Constant.LIST_PADDING_MEDIUM)
  }
  const fontSm = () => {
    updateSetting("fontSize", Constant.FONT_SIZE_SMALL)
    updateSetting("listPadding", Constant.LIST_PADDING_SMALL)
  }
  const fontLg = () => {
    updateSetting("fontSize", Constant.FONT_SIZE_LARGE)
    updateSetting("listPadding", Constant.LIST_PADDING_LARGE)
  }

  // Setting the Font family
  const fontArial = () => {
    fontInfo.style.fontFamily = Constant.FONT_SANS;
    updateSetting("font", Constant.FONT_SANS);
  }
  const fontTimes = () => {
    fontInfo.style.fontFamily = Constant.FONT_SERIF;
    updateSetting("font", Constant.FONT_SERIF);
  }
  const fontDyslex = () => {
    fontInfo.style.fontFamily = Constant.FONT_SANS_DYSLEX;
    updateSetting("font", Constant.FONT_SANS_DYSLEX);
  }

  // Setting the audio controls
  const audioControlOn = () => {
    updateSetting("speechEnabled", true);
  }

  const audioControlOff = () => {
    updateSetting("speechEnabled", false);
  }

  const showMenu = () => {
    if (state === "hide") {
      setState("show");
      setSelected("qdbp selected");
    } else {
      setState("hide");
      setSelected("qdbp notselected");
    }
  };

  return (
    <div>
      <button onClick={showMenu} className={selected}>
      <img src={aIcon} className="aIcon"></img>
      Accessibility
      </button>
      
      <div className={state}>
        <div className="background" onClick={showMenu}></div>
        <div className="qp">
          <div className="qpTitle">Accessibility Menu</div>
          <span className="qpChild">
            <div className="qpSubtitle">Language</div>
            <span className="btnLng">
              <button className={ settings.language === Constant.LANGUAGE_ENGLISH ? "qpBtn colorSelected" : "qpBtn" } onClick={selectEng}>English</button>
              <button className={ settings.language === Constant.LANGUAGE_SPANISH ? "qpBtn colorSelected" : "qpBtn" } onClick={selectSpa}>Spanish</button>
              <button className={ settings.language === Constant.LANGUAGE_GERMAN ? "qpBtn colorSelected" : "qpBtn" } onClick={selectGer}>German</button>
              <button className={ settings.language === Constant.LANGUAGE_FRENCH ? "qpBtn colorSelected" : "qpBtn" } onClick={selectFre}>French</button>
            </span>
          </span>
          <span className="qpChild">
          <div className="qpSubtitle">Font Change</div>
            <span>
              <button className={settings.font === Constant.FONT_SANS ? "qpBtn colorSelected" : "qpBtn"} onClick={fontArial}>Arial</button>
              <button className={settings.font === Constant.FONT_SERIF ? "qpBtn colorSelected" : "qpBtn"} onClick={fontTimes}>Times New Roman</button>
              <button className={settings.font === Constant.FONT_SANS_DYSLEX ? "qpBtn colorSelected" : "qpBtn"} onClick={fontDyslex}>Dyslex</button>
            </span>
          </span>
          <span className="qpChild">
            <span>
            <div className="qpSubtitle">Text Size</div>
            </span>
            <span>
              <button className={settings.fontSize === Constant.FONT_SIZE_SMALL ? "qpBtn colorSelected" : "qpBtn"} onClick={fontSm}>Small</button>
              <button className={settings.fontSize === Constant.FONT_SIZE_MEDIUM ? "qpBtn colorSelected" : "qpBtn"} onClick={fontDef}>Medium</button>
              <button className={settings.fontSize === Constant.FONT_SIZE_LARGE ? "qpBtn colorSelected" : "qpBtn"} onClick={fontLg}>Large</button>
            </span>
          </span>
          <span className="qpChild">
            <span>
            <div className="qpSubtitle">Audio Controls</div>
            </span>
            <span>
              <button className={settings.speechEnabled ? "qpBtn colorSelected" : "qpBtn"} onClick={audioControlOn}>On</button>
              <button className={!settings.speechEnabled ? "qpBtn colorSelected" : "qpBtn"} onClick={audioControlOff}>Off</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
