import React, { useState, useContext } from "react";
import { Context } from "../../assets/accessibilityContext";
import "./accessibility.css";

export function Accessibility() {
  const [state, setState] = useState("hide");
  const [selected, setSelected] = useState("qdbp notselected");
  const [selectedSize, setSelectedSize] = useState("#a70e20")

  const [lang, setLang] = useContext(Context);
  const [fontS, setFontS] = useContext(Context);
  
  const selectEng = () => {
    setLang("english")
  }
  const selectSpa = () => {
    setLang("spanish")
  }

  const fontDef = () => {
    setFontS("35pt")
    console.log("default font")
  }
  const fontSm = () => {
    setFontS("24pt")
    console.log("small font")
  }
  const fontLg = () => {
    setFontS("45pt")
    console.log("large font")
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
            <span>
              {/* <select name="language">
                <option value="english">"English"</option>
                <option value="spanish">"Spanish"</option>
              </select> */}
              <button className="qpBtn" onClick={selectEng}>English</button>
              <button className="qpBtn" onClick={selectSpa}>Spanish</button>
            </span>
          </span>
          <span className="qpChild">
            <h4>Font Change</h4>
            <span>
              {/* <select>
                <option value="arial">"Arial"</option>
                <option value="timesNewRoman">"Times New Roman"</option>
                <option value="dyslex">"Dyslex"</option>
              </select> */}
              <button className="qpBtn">Arial</button>
              <button className="qpBtn">Times New Roman</button>
              <button className="qpBtn">Dyslex</button>
            </span>
          </span>
          <span className="qpChild">
            <span>
              <h4>Text Size</h4>
            </span>
            <span>
              <button className="qpBtn" style={{color : {selectedSize}}} onClick={fontSm}>o</button>
              <button className="qpBtn" style={{color : {selectedSize}}} onClick={fontDef}>o</button>
              <button className="qpBtn" style={{color : {selectedSize}}} onClick={fontLg}>o</button>
            </span>
          </span>
          <span className="qpChild">
            <h4>Text Spacing</h4>
            <span>
              <button className="qpBtn">x</button>
              <button className="qpBtn">x</button>
              <button className="qpBtn">x</button>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Accessibility ;
