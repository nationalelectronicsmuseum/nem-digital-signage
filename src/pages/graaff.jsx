import SlidesGraaff from "../components/slides/slidesVanderGraaff"
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import NavStation2 from "../components/nav/navStation2.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { THE_VAN_DE_GRAAFF_GENERATOR_HARNESSING_THE_POWER_OF_STATIC_ELECTRICITY } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/graaff2.jpg"
import image2 from "../assets/img/graaff3.png"
import image3 from "../assets/img/graaff4.png"
import image4 from "../assets/img/graaff5.jpg"

function Graaff() {
  const artifact = getLocalizedArtifact(THE_VAN_DE_GRAAFF_GENERATOR_HARNESSING_THE_POWER_OF_STATIC_ELECTRICITY);
    
  return (
    <div>
       <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <SlidesGraaff artifact={artifact} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3} artifactImg4={image4}/>
    </div>
  )
}

export default Graaff