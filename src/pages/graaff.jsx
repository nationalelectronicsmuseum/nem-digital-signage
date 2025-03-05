import SlidesGraaff from "../components/slides/slidesVanderGraaff"
import React, {useContext} from "react";
import { Context,ContextImage } from "../assets/accessibilityContext.js";
import MenuStation2 from '../components/menu/menuStation2'
import { artifact } from '../assets/database/artifact'
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'

import image1 from "../assets/img/graaff2.jpg"
import image2 from "../assets/img/graaff3.png"
import image3 from "../assets/img/graaff4.png"
import image4 from "../assets/img/graaff5.jpg"

function Graaff() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "The Van de Graaff Generator: Harnessing the Power of Static Electricity").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "El generador Van de Graaff: Aprovechando el Poder de la Electricidad Estática").pop()      
  
  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : display.includes("showImageThree") ? display : display.includes("showImageFour") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : display.includes("showImageThree") ? image3 : display.includes("showImageFour") ? image4 : null
        
        const hideMe = () => {
          setDisplay("hideImage")
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
      <SlidesGraaff artifact={dataArtifact} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3} artifactImg4={image4}/>
    </div>
  )
}

export default Graaff