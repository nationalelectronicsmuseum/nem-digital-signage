import Slides from "../components/slides/slides.jsx";
import NavStation12 from "../components/nav/navStation12.jsx";
import Loop from '../components/loop.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { AWACS } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg"

export default function Station12Section3() {
  const artifact = getLocalizedArtifact(AWACS);

  return (
    <div>
      <StationHeader nav={<NavStation12 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.slideTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={sectionPlaceholder} artifactImg2={sectionPlaceholder} />
    </div>
  );
}