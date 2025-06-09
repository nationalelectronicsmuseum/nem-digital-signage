import SlidesGraaff from "../components/slides/slidesVanderGraaff"
import {useContext} from "react";
import { ContextImage } from "../assets/accessibilityContext.js";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import NavStation2 from "../components/nav/navStation2.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { THE_VAN_DE_GRAAFF_GENERATOR_HARNESSING_THE_POWER_OF_STATIC_ELECTRICITY } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/graaff2.jpg"
import image2 from "../assets/img/graaff3.png"
import image3 from "../assets/img/graaff4.png"
import image4 from "../assets/img/graaff5.jpg"

function Graaff() {
  const [display, setDisplay] = useContext(ContextImage)
  const artifact = getLocalizedArtifact(THE_VAN_DE_GRAAFF_GENERATOR_HARNESSING_THE_POWER_OF_STATIC_ELECTRICITY);
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
       <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <SlidesGraaff artifact={artifact} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3} artifactImg4={image4}/>
    </div>
  )
}

export default Graaff