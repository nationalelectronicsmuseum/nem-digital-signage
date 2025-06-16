import Slides from "../components/slides/slides.jsx";
import NavStation14 from "../components/nav/navStation14.jsx";
import Loop from '../components/loop.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { SECTION_2 } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg"

export default function Station14Section2() {
  const artifact = getLocalizedArtifact(SECTION_2);

  return (
    <div>
      <StationHeader nav={<NavStation14 />} artifact={artifact} />
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