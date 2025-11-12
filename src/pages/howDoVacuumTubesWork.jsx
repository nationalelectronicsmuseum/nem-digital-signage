import Slides from "../components/slides/slides.jsx";
import NavStation8 from "../components/nav/navStation8.jsx";
import Loop from '../components/loop.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { HOW_DO_VACUUM_TUBES_WORK } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg"

export default function Station8Section3() {
  const artifact = getLocalizedArtifact(HOW_DO_VACUUM_TUBES_WORK);

  return (
    <div>
      <StationHeader nav={<NavStation8 />} artifact={artifact} />
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