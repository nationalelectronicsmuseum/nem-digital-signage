import { useState, useContext } from "react";
import { Context, ContextFontSize, ContextFontFamily, ContextLangSpeech, ContextListPadding, ContextSpeechPlayer } from "../../assets/accessibilityContext.js";
import "./accessibility.css";
import aIcon from "../../assets/img/accessibleIcon.svg"

export function Accessibility() {
  const [state, setState] = useState("hide");
  const [selected, setSelected] = useState("qdbp notselected");

  const [lang, setLang] = useContext(Context);
  const [fontS, setFontS] = useContext(ContextFontSize);
  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech);
  const [listPadding, setListPadding] = useContext(ContextListPadding);

  const [colorFontSm, setColorFontSm] = useState("qpBtn")
  const [colorFontDef, setColorFontDef] = useState("qpBtn colorSelected")
  const [colorFontLg, setColorFontLg] = useState("qpBtn")

  const [colorFamilySan, setColorFamilySan] = useState("qpBtn")
  const [colorFamilySerif, setColorFamilySerif] = useState("qpBtn")
  const [colorFamilyDyslex, setColorFamilyDyslex] = useState("qpBtn")

  const [speechPlayer, setspeechPlayer] = useContext(ContextSpeechPlayer);

  const serifFont = "Times New Roman, Times, serif"
  const sansFont = "Arial, Helvetica, sans-serif"
  const sansDyslex = "OpenDyslexicMono"

  const test = document.querySelector(".fontSelect")
  
  const synth = window.speechSynthesis;

  const selectEng = () => {
    setLang("english")
    setLangSpeech("en-US")
    synth.cancel();
  }
  const selectSpa = () => {
    setLang("spanish")
    setLangSpeech("es-MX")
    synth.cancel();
  }
  const selectGer = () => {
    setLang("german")
  }
  const selectFre = () => {
    setLang("french")
  }

  // Setting the Font Size
  const fontDef = () => {
    setFontS("35pt")
    setListPadding("50px")
    setColorFontSm("qpBtn")
    setColorFontDef("qpBtn colorSelected")
    setColorFontLg("qpBtn")
  }
  const fontSm = () => {
    setFontS("24pt")
    setListPadding("36px")
    setColorFontSm("qpBtn colorSelected")
    setColorFontDef("qpBtn")
    setColorFontLg("qpBtn")
  }
  const fontLg = () => {
    setFontS("45pt")
    setListPadding("65px")
    setColorFontSm("qpBtn")
    setColorFontDef("qpBtn")
    setColorFontLg("qpBtn colorSelected")
  }

  // Setting the Font family
  const fontArial = () => {
    test.style.fontFamily = sansFont
    setColorFamilySan("qpBtn colorSelected")
    setColorFamilySerif("qpBtn")
    setColorFamilyDyslex("qpBtn")
  }
  const fontTimes = () => {
    test.style.fontFamily = serifFont
    setColorFamilySan("qpBtn")
    setColorFamilySerif("qpBtn colorSelected")
    setColorFamilyDyslex("qpBtn")
  }
  const fontDyslex = () => {
    test.style.fontFamily = sansDyslex
    setColorFamilySan("qpBtn")
    setColorFamilySerif("qpBtn")
    setColorFamilyDyslex("qpBtn colorSelected")
  }

  // Setting the audio controls
  const audioControlOn = () => {
    setspeechPlayer("present");
  }

  const audioControlOff = () => {
    setspeechPlayer("hiddenPlayer");
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
              <button className={ lang === "english" ? "qpBtn colorSelected" : "qpBtn"} onClick={selectEng}>English</button>
              <button className={lang === "spanish" ? "qpBtn colorSelected" : "qpBtn"} onClick={selectSpa}>Spanish</button>
              <button className="qpBtn unavailable" >German</button>
              <button className="qpBtn unavailable" >French</button>
            </span>
          </span>
          <span className="qpChild">
          <div className="qpSubtitle">Font Change</div>
            <span>
              <button className={colorFamilySan} onClick={fontArial}>Arial</button>
              <button className={colorFamilySerif} onClick={fontTimes}>Times New Roman</button>
              <button className={colorFamilyDyslex} onClick={fontDyslex}>Dyslex</button>
            </span>
          </span>
          <span className="qpChild">
            <span>
            <div className="qpSubtitle">Text Size</div>
            </span>
            <span>
              <button className={colorFontSm} onClick={fontSm}>Small</button>
              <button className={colorFontDef} onClick={fontDef}>Default</button>
              <button className={colorFontLg} onClick={fontLg}>Large</button>
            </span>
          </span>
          <span className="qpChild">
            <span>
            <div className="qpSubtitle">Audio Controls</div>
            </span>
            <span>
              <button className={speechPlayer === "present" ? "qpBtn colorSelected" : "qpBtn"} onClick={audioControlOn}>On</button>
              <button className={speechPlayer === "hiddenPlayer" ? "qpBtn colorSelected" : "qpBtn"} onClick={audioControlOff}>Off</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Accessibility ;
