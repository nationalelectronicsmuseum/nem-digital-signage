import SlidesJacobsLadder from '../components/slides/slidesJacobsLadder.jsx';
import NavStation2 from '../components/nav/navStation2.jsx'
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { JACOBS_LADDER_EXPERIMENT } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/jacobs1.jpg"
import image2 from "../assets/img/jacobs3.gif"

export default function JacobsLadder() {
  const artifact = getLocalizedArtifact(JACOBS_LADDER_EXPERIMENT);
    
  return (
    <div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.slideTitle}</h1>
        </div>
      </div>
      <Loop />
      <SlidesJacobsLadder artifact={artifact} artifactImg1={image2} artifactImg2={image1}/>
    </div>
  )
}
