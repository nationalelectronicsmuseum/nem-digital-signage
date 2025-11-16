import Slides from "../components/slides/slides.jsx";
import NavStation11 from "../components/nav/navStation11.jsx";
import Loop from "../components/loop.jsx";
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { SOUNDS_AT_SEA } from "../assets/ArtifactTags.js";
import sectionPlaceholder from "../assets/img/section.jpg";

export default function Station11Section1() {
  const artifact = getLocalizedArtifact(SOUNDS_AT_SEA);

  return (
    <div>
      <StationHeader nav={<NavStation11 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.slideTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides
        artifact={artifact}
        artifactImg1={sectionPlaceholder}
        artifactImg2={sectionPlaceholder}
      />
    </div>
  );
}
