import NavStation2 from "../components/nav/navStation2.jsx";
import Loop from "../components/loop";
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { HUMAN_DYNAMO } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/section.jpg";
import SlidesHumanDynamo from "../components/slides/slidesHumanDynamo.jsx";

export default function HumanDynamo() {
  const artifact = getLocalizedArtifact(HUMAN_DYNAMO);

  return (
    <div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.slideTitle}</h1>
        </div>
      </div>
      <Loop />
      <SlidesHumanDynamo artifact={artifact} artifactImg1={image1} artifactImg2={image1} />
    </div>
  );
}
