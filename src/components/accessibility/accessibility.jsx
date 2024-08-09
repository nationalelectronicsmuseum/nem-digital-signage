import React, { useState, useContext } from "react";
import "./accessibility.css";

export function Accessibility() {
  const [state, setState] = useState("hide");
  const [selected, setSelected] = useState("qdbp notselected");

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
        Accessibility
      </button>
      
      <div className={state}>
        <div className="background" onClick={showMenu}></div>
        <div className="qp">
          <span className="qpChild">
            <h4>Language</h4>
            <span>
              <select name="language">
                <option value="english">"English"</option>
                <option value="spanish">"Spanish"</option>
              </select>
            </span>
          </span>
          <span className="qpChild">
            <h4>Font Change</h4>
            <span>
              <select>
                <option value="arial">"Arial"</option>
                <option value="timesNewRoman">"Times New Roman"</option>
                <option value="dyslex">"Dyslex"</option>
              </select>
            </span>
          </span>
          <span className="qpChild">
            <span>
              <h4>Text Size</h4>
            </span>
            <span>
              <button className="qpBtn">o</button>
              <button className="qpBtn">o</button>
              <button className="qpBtn">o</button>
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

export default Accessibility;
