import {useContext} from "react";
import Slides from "../components/slides/slides";
import { Context,ContextImage } from "../assets/accessibilityContext.js";
import NavStation2 from "../components/nav/navStation2.jsx";
import { artifact } from "../assets/database/artifact";
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'
import Loop from "../components/loop";
import StationHeader from "../components/StationHeader/StationHeader.jsx";

import image1 from "../assets/img/jumpingwire1.jpg";
import image2 from "../assets/img/jumpingwire2.jpg";

function JumpingWires() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter((x) => x.title === "Jumping Wires").pop();
  const dataSpanish = artifactSpanish.filter(x => x.title === "Saltar Cables").pop()

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
        <img src={displayingImages} className="galleryImageOne" />
      </div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{dataTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={dataArtifact} artifactImg1={image1} artifactImg2={image2} />
    </div>
  );
}

export default JumpingWires;
