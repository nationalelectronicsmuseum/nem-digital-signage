import Slides from "../components/slides/slides";
import NavStation2 from '../components/nav/navStation2.jsx'
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { STATIC_ELECTRICITY_A_SHOCKING_DISCOVERY } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/static1.jpg"
import image2 from "../assets/img/static2.webp"

function StaticElectricity() {
  const artifact = getLocalizedArtifact(STATIC_ELECTRICITY_A_SHOCKING_DISCOVERY);
  
  return (
    <div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />
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

export default StaticElectricity