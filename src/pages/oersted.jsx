import NavStation1 from '../components/nav/navStation1.jsx';
import Slides from '../components/slides/slides'
import Loop from '../components/loop.jsx';
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { OERSTEDS_EXPERIMENT } from "../assets/ArtifactTags.js";

//import image1 from "../assets/img/oersted1.jpg"
import image2 from "../assets/img/oersted2.jpg"
import image3 from "../assets/img/oersted3.png"

function Oersted() {
  const artifact = getLocalizedArtifact(OERSTEDS_EXPERIMENT);
  
  return (
    <div>
      <StationHeader nav={<NavStation1 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image2} artifactImg2={image3}/>
    </div>
  )
}

export default Oersted