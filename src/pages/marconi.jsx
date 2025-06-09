import {useContext} from "react";
import { ContextImage } from "../assets/accessibilityContext.js";
import SlidesMarconi from "../components/slides/slidesMarconi.jsx";
import NavStation3 from "../components/nav/navStation3.jsx";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { THE_MARCONI_MAGNETIC_DETECTOR } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/marconi2.jpg"
import image2 from "../assets/img/marconi3.jpg"
import image3 from "../assets/img/marconi02.png"

const Marconi = () => {
  const [display, setDisplay] = useContext(ContextImage)
  const artifact = getLocalizedArtifact(THE_MARCONI_MAGNETIC_DETECTOR);
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : display.includes("showImageThree") ? display : display.includes("showImageFour") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : display.includes("showImageThree") ? image3 : display.includes("showImageFour") ? image4 : null
            
  const hideMe = () => {
    setDisplay("hideImage")
  }
  
  return (
    <>
      <div className={displayingImage} onClick={hideMe}>
        <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne" />
      </div>
      <StationHeader nav={<NavStation3 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <SlidesMarconi artifact={artifact} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3}/>
    </>
  );
};

export default Marconi;
