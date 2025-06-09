import {useContext} from "react";
import Slides from "../components/slides/slides";
import { ContextImage } from "../assets/accessibilityContext.js";
import NavStation2 from '../components/nav/navStation2.jsx'
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { JACOBS_LADDER_EXPERIMENT_DEMONSTRATING_ELECTRICAL_PRINCIPLES } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/jacobs1.jpg"
import image2 from "../assets/img/jacobs3.gif"

export default function JacobsLadder() {
  const [display, setDisplay] = useContext(ContextImage)
  const artifact = getLocalizedArtifact(JACOBS_LADDER_EXPERIMENT_DEMONSTRATING_ELECTRICAL_PRINCIPLES);
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
      <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image2} artifactImg2={image1}/>
    </div>
  )
}
