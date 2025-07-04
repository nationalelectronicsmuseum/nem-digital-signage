import Slides from '../components/slides/slides'
import NavStation5 from '../components/nav/navStation5.jsx'
import StationHeader from "../components/StationHeader/StationHeader.jsx"
import Loop from '../components/loop'
import { getLocalizedArtifact } from "../assets/Localization.js";
import { WHY_DO_MICROWAVES_HAVE_TURNTABLES } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/microwave1.svg"
import image2 from "../assets/img/microwave2.svg"

function MicrowaveTurntable() {
  const artifact = getLocalizedArtifact(WHY_DO_MICROWAVES_HAVE_TURNTABLES);

  return (
    <div>
      <StationHeader nav={<NavStation5 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image1} artifactImg2={image2} />
    </div>
  )
}

export default MicrowaveTurntable