import { useContext } from 'react'
import NavStation5 from "../components/nav/navStation5.jsx";
import Slides from "../components/slides/slides";
import Loop from '../components/loop'
import { ContextImage } from "../assets/accessibilityContext.js";
import StationHeader from "../components/StationHeader/StationHeader.jsx"
import { getLocalizedArtifact } from "../assets/Localization.js";
import { HARRISON_INSTRUMENTS_302_THEREMIN } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/theremin1.svg"
import image2 from "../assets/img/theremin2.webp"

function Theremin() {
  const [display, setDisplay] = useContext(ContextImage)
  const artifact = getLocalizedArtifact(HARRISON_INSTRUMENTS_302_THEREMIN);
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
      <StationHeader nav={<NavStation5 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image1} artifactImg2={image2} />
    </div>
  )
}

export default Theremin