import React, { useContext } from "react";
import Slides from "../components/slides/slides.jsx";
import MenuStation1 from "../components/menu/menuStation1.jsx";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { Context } from "../assets/accessibilityContext.js";
// import voltCurrImage from "../assets/img/voltcurr.png";
import voltImpact from "../assets/img/volt_impact.jpg"
import { artifact } from "../assets/database/artifact.js";
import {artifactSpanish} from "../assets/database/artifacts-spanish.js"
import ohmslawGif from "../assets/img/ohmslaw.gif";

import loop from "../assets/sound/loop.wav"

export default function voltAndCurr() {
  const [lang, setLang] = useContext(Context);

  const data = artifact.filter(x => x.title === "Voltage and Current").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "Voltaje y Corriente").pop()

  return (
    <div>
  
      <div className="btnNav">
        <MenuStation1 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>
      <div className="sectionhead">
      <audio autoPlay loop src={loop} type="audio/wav"></audio>
        <div className="sectiontitle">
          <h1 className="artifactTitle">Voltage and Current</h1>
        </div>
      </div>
      <Slides artifact={lang === "default" ? data: lang === "english" ? data : dataSpanish} artifactImg1={ohmslawGif} artifactImg2={voltImpact} />
    </div>
  );
}