import {useContext} from "react";
import { Context, ContextImage } from "../assets/accessibilityContext.js";
import NavStation3 from "../components/nav/navStation3.jsx";
import Slides from "../components/slides/slides.jsx";
import artifact from "../assets/database/artifact";
import artifactSpanish from '../assets/database/artifact-spanish.js'
import StationHeader from "../components/StationHeader/StationHeader.jsx"

import Loop from '../components/loop'
import image1 from "../assets/img/audiotrans2.jpg"
import image2 from "../assets/img/audiotrans3.jpg"

const Audio = () => {
    const data = artifact.filter((x) => x.title === "The Audio Translator").pop();
    const dataSpanish = artifactSpanish.filter(x => x.title === "El traductor de audio").pop()

    const [lang, setLang] = useContext(Context);
    const [display, setDisplay] = useContext(ContextImage)
    
    const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
    const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : null
  
    const dataArtifact = lang === "default" ? data : lang === "english" ? data : dataSpanish
    const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

    const hideMe = () => {
      setDisplay("hideImage")
    }

  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
        <div className="backgroundImage"></div>
          <img src={displayingImages} className="galleryImageOne"/>
      </div>
      <StationHeader nav={<NavStation3 />} artifact={dataArtifact} />
      <div className="sectionhead">
        <div className="sectiontitle sectionleft">
          <h1 className="artifactTitle">{dataTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={dataArtifact} artifactImg1={image1} artifactImg2={image2}/>
    </div>
  );
};

export default Audio;
