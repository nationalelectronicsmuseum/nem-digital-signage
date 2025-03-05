import React, {useContext} from "react";
import SlidesElectromagnetic from "../components/slides/slidesElectromagnetic.jsx"
import MenuStation7 from "../components/menu/menuStation7";
import { artifact } from "../assets/database/artifact";
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import { Context,ContextImage } from "../assets/accessibilityContext.js";

function Polarization() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter((x) => x.title === "Introduction to Electromagnetic Waves").pop();
  const dataSpanish = artifactSpanish.filter(x => x.title === "Introducción a las ondas electromagnéticas").pop()
  
  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

  return (
    <>
      <div className="btnNav">
        <MenuStation7 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="emhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle" >{dataTitle}</h1>
        </div>
      </div>
      <Loop />
      <SlidesElectromagnetic artifact={dataArtifact} />
    </>
  );
}

export default Polarization;
