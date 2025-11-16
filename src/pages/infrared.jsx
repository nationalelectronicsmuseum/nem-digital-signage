import Slides from "../components/slides/slides";
import NavStation6 from "../components/nav/navStation6.jsx";
import Loop from "../components/loop";
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { INFRARED } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/section.jpg";

export default function Infrared() {
  const artifact = getLocalizedArtifact(INFRARED);

  return (
    <div>
      <StationHeader nav={<NavStation6 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.slideTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image1} artifactImg2={image1} />
    </div>
  );
}
