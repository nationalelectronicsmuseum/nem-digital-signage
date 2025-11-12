import Slides from "../components/slides/slides.jsx";
import NavStation15 from "../components/nav/navStation15.jsx";
import Loop from '../components/loop.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { SATELLITES_AND_HOW_THEY_WORK } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg"

export default function Station15Section1() {
  const artifact = getLocalizedArtifact(SATELLITES_AND_HOW_THEY_WORK);

  return (
    <div>
      <StationHeader nav={<NavStation15 />} artifact={artifact} />
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