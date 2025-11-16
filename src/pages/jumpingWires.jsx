import NavStation2 from "../components/nav/navStation2.jsx";
import Loop from "../components/loop";
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { JUMPING_WIRE } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/jumpingwire1.jpg";
import image2 from "../assets/img/jumpingwire2.jpg";
import SlidesJumpingWires from "../components/slides/slidesJumpingWires.jsx";

function JumpingWires() {
  const artifact = getLocalizedArtifact(JUMPING_WIRE);

  return (
    <div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.slideTitle}</h1>
        </div>
      </div>
      <Loop />
      <SlidesJumpingWires
        artifact={artifact}
        artifactImg1={image1}
        artifactImg2={image2}
      />
    </div>
  );
}

export default JumpingWires;
