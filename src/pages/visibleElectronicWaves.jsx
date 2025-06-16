import NavStation3 from "../components/nav/navStation3.jsx";
import Slides from "../components/slides/slides";
import Loop from '../components/loop';
import StationHeader from "../components/StationHeader/StationHeader.jsx"
import { getLocalizedArtifact } from "../assets/Localization.js";
import { ELECTROMAGNETIC_RADIO_WAVES } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/ewaves2.jpg"
import image2 from "../assets/img/ewaves3.webp"

function VisibleElectronicWaves() {
  const artifact = getLocalizedArtifact(ELECTROMAGNETIC_RADIO_WAVES);

  return (
    <div>
      <StationHeader nav={<NavStation3 />} artifact={artifact} />
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

export default VisibleElectronicWaves