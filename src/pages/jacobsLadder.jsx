import React, {useContext} from "react";
import Slides from "../components/slides/slides";
import { Context,ContextImage } from "../assets/accessibilityContext.js";
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

import image1 from "../assets/img/jacobs1.jpg"
import image2 from "../assets/img/jacobs3.gif"


export default function JacobsLadder() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "Jacob's Ladder Experiment: Demonstrating Electrical Principles").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "Experimento de la Escalera de Jacob: Demostración de Principios Eléctricos").pop()  
  
  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

  const displayingImages = display.includes("showImageOne") ? image2 : display.includes("showImageTwo") ? image1 : null
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
    
  setDisplay("hideImage")
    const hideMe = () => {
  }
    
  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
        <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne" />
      </div>
      <div className="btnNav">
        <MenuStation2 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{dataTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={dataArtifact} artifactImg1={image2} artifactImg2={image1}/>
    </div>
  )
}
