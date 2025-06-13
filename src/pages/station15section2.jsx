import { useContext } from "react";
import Slides from "../components/slides/slides.jsx";
import NavStation15 from "../components/nav/navStation15.jsx";
import { ContextImage } from "../assets/accessibilityContext.js";
import Loop from '../components/loop.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { SECTION_2 } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg"

export default function Station15Section2() {
  const [display, setDisplay] = useContext(ContextImage)
  const artifact = getLocalizedArtifact(SECTION_2);
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"

  const hideMe = () => {
    setDisplay("hideImage")
  }

  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
      <div className="backgroundImage"></div>
        <img src={sectionPlaceholder} className="galleryImageOne"/>
      </div>
      <StationHeader nav={<NavStation15 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={sectionPlaceholder} artifactImg2={sectionPlaceholder} />
    </div>
  );
}