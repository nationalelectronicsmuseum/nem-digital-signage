import Slides from '../components/slides/slides'
import NavStation1 from '../components/nav/navStation1.jsx';
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { FARADAYS_EXPERIMENT_ELECTRICITY_AND_MAGNETISM } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/faraday1.jpg"
import image2 from "../assets/img/faraday2.jpg"

function Faraday() {
  const artifact = getLocalizedArtifact(FARADAYS_EXPERIMENT_ELECTRICITY_AND_MAGNETISM);

  return (
    <div>
      <StationHeader nav={<NavStation1 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image1} artifactImg2={image2}/>
    </div>
  )
}

export default Faraday