import Slides from '../components/slides/slides'
import NavStation1 from '../components/nav/navStation1.jsx'
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { DO_YOU_HAVE_THE_POWER_TO_BE_AN_ELECTRICAL_CONDUCTOR } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/humanBatt1.png"
import image2 from "../assets/img/humanBatt2.gif"

function HumanBattery() {
  const artifact = getLocalizedArtifact(DO_YOU_HAVE_THE_POWER_TO_BE_AN_ELECTRICAL_CONDUCTOR);
  
  return (
    <div>
      <StationHeader nav={<NavStation1 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image2} artifactImg2={image1}/>
    </div>
  )
}

export default HumanBattery