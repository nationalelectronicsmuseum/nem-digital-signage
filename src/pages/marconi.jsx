import SlidesMarconi from "../components/slides/slidesMarconi.jsx";
import NavStation3 from "../components/nav/navStation3.jsx";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { THE_MARCONI_MAGNETIC_DETECTOR } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/marconi2.jpg"
import image2 from "../assets/img/marconi3.jpg"
import image3 from "../assets/img/marconi02.png"

const Marconi = () => {
  const artifact = getLocalizedArtifact(THE_MARCONI_MAGNETIC_DETECTOR);
  
  return (
    <>
      <StationHeader nav={<NavStation3 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <SlidesMarconi artifact={artifact} artifactImg1={image1} artifactImg2={image2} artifactImg3={image3}/>
    </>
  );
};

export default Marconi;
