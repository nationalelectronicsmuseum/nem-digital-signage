import {useContext} from 'react'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import NavStation1 from '../components/nav/navStation1.jsx'
import Loop from '../components/loop'
import { Context, ContextImage } from "../assets/accessibilityContext.js";
import StationHeader from "../components/StationHeader/StationHeader.jsx";

import image1 from "../assets/img/humanBatt1.png"
import image2 from "../assets/img/humanBatt2.gif"


function HumanBattery() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)
  
  const data = artifact.filter(x => x.title === "Do you have the power to be an electrical conductor?").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "¿Tienes el poder de ser conductor eléctrico?").pop()

  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

  
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image2 : display.includes("showImageTwo") ? image1 : null

  const hideMe = () => {
    setDisplay("hideImage")
  }
  
  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
      <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne"/>
      </div>

      <StationHeader nav={<NavStation1 />} artifact={artifact} />

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

export default HumanBattery