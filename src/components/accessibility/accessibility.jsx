import React, { useState, useContext } from "react";
import { Context, ContextFontSize, ContextFontFamily, ContextLangSpeech } from "../../assets/accessibilityContext";
import "./accessibility.css";

export function Accessibility() {
  const [state, setState] = useState("hide");
  const [selected, setSelected] = useState("qdbp notselected");
  const [selectedSize, setSelectedSize] = useState("#a70e20")

  const [lang, setLang] = useContext(Context);
  const [fontS, setFontS] = useContext(ContextFontSize);
  const [fontF, setFontF] = useContext(ContextFontFamily);
  const [langSpeech, setLangSpeech] = useContext(ContextLangSpeech)

  const [colorSpa, setColorSpa] = useState("qpBtn")
  const [colorEng, setColorEng] = useState("qpBtn colorSelected")

  const [colorFontSm, setColorFontSm] = useState("qpBtn")
  const [colorFontDef, setColorFontDef] = useState("qpBtn colorSelected")
  const [colorFontLg, setColorFontLg] = useState("qpBtn")

  const [colorFamilySan, setColorFamilySan] = useState("qpBtn colorSelected")
  const [colorFamilySerif, setColorFamilySerif] = useState("qpBtn")
  const [colorFamilyDyslex, setColorFamilyDyslex] = useState("qpBtn")

  const serifFont = "Times New Roman, Times, serif"
  const sansFont = "Arial, Helvetica, sans-serif"
  const sansDyslex = "OpenDyslexicMono"

  const test = document.querySelector(".fontSelect")
  
  const synth = window.speechSynthesis;

  const selectEng = () => {
    setLang("english")
    setLangSpeech("en-GB")
    setColorEng("qpBtn colorSelected")
    setColorSpa("qpBtn")
    synth.cancel();
  }
  const selectSpa = () => {
    setLang("spanish")
    setLangSpeech("es-MX")
    setColorEng("qpBtn")
    setColorSpa("qpBtn colorSelected")
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
    setColorFontSm("qpBtn")
    setColorFontDef("qpBtn colorSelected")
    setColorFontLg("qpBtn")
    console.log("default font")
  }
  const fontSm = () => {
    setFontS("24pt")
    setColorFontSm("qpBtn colorSelected")
    setColorFontDef("qpBtn")
    setColorFontLg("qpBtn")
    console.log("small font")
  }
  const fontLg = () => {
    setFontS("45pt")
    setColorFontSm("qpBtn")
    setColorFontDef("qpBtn")
    setColorFontLg("qpBtn colorSelected")
    console.log("large font")
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

  const showMenu = () => {
    console.log("im clicked");
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
      <i className="fa-solid fa-universal-access fa-3x"></i>
      </button>
      
      <div className={state}>
        <div className="background" onClick={showMenu}></div>
        <div className="qp">
          <h2>Accessibility Menu</h2>
          <span className="qpChild">
            <h4>Language</h4>
            <span className="btnLng">
              <button className={colorEng} onClick={selectEng}>English</button>
              <button className={colorSpa} onClick={selectSpa}>Spanish</button>
              <button className="qpBtn" onClick={selectGer}>German</button>
              <button className="qpBtn" onClick={selectFre}>French</button>
            </span>
          </span>
          <span className="qpChild">
            <h4>Font Change</h4>
            <span>
              <button className={colorFamilySan} onClick={fontArial}>Arial</button>
              <button className={colorFamilySerif} onClick={fontTimes}>Times New Roman</button>
              <button className={colorFamilyDyslex} onClick={fontDyslex}>Dyslex</button>
            </span>
          </span>
          <span className="qpChild">
            <span>
              <h4>Text Size</h4>
            </span>
            <span>
              <button className={colorFontSm} onClick={fontSm}>Small</button>
              <button className={colorFontDef} onClick={fontDef}>Default</button>
              <button className={colorFontLg} onClick={fontLg}>Large</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Accessibility ;
