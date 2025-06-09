import { useContext } from "react";
import Slides from "../components/slides/slides.jsx";
import NavStation1 from "../components/nav/navStation1.jsx";
import { ContextImage } from "../assets/accessibilityContext.js";
import voltImpact from "../assets/img/volt_impact.jpg"
import ohmslawGif from "../assets/img/ohmslaw.gif";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { VOLTAGE_AND_CURRENT } from "../assets/ArtifactTags.js";

export default function VoltAndCurr() {
  const [display, setDisplay] = useContext(ContextImage)
  const artifact = getLocalizedArtifact(VOLTAGE_AND_CURRENT);
  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? ohmslawGif : display.includes("showImageTwo") ? voltImpact : null

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
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={ohmslawGif} artifactImg2={voltImpact} />
    </div>
  );
}