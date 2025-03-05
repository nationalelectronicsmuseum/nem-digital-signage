import React, {useContext} from 'react'
import { artifact } from '../assets/database/artifact'
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import Slides from '../components/slides/slides'
import MenuStation5 from '../components/menu/menuStation5'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import { Context, ContextImage } from "../assets/accessibilityContext.js";

import image1 from "../assets/img/microwave1.svg"
import image2 from "../assets/img/microwave2.svg"

function MicrowaveTurntable() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

    
  const data = artifact.filter(x => x.title === "Why do Microwaves Have Turntables?").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "¿Por qué los Microondas tienen Platos Giratorios?").pop()

  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : null

  const hideMe = () => {
    setDisplay("hideImage")
  }

  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
      <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne"/>
      </div>

      <div className="btnNav">
        <MenuStation5 />
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
      <Slides artifact={dataArtifact} artifactImg1={image1} artifactImg2={image2} />
    </div>
  )
}

export default MicrowaveTurntable