import Slides from "../components/slides/slides.jsx";
import NavStation13 from "../components/nav/navStation13.jsx";
import Loop from '../components/loop.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { BOMARC } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg"

export default function Station13Section2() {
  const artifact = getLocalizedArtifact(BOMARC);

  return (
    <div>
      <StationHeader nav={<NavStation13 />} artifact={artifact} />
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