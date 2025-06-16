import SlidesTelegraph from '../components/slides/slidesTelegraph';
import Loop from '../components/loop';
import NavStation4 from "../components/nav/navStation4.jsx"
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { TELEGRAPH_MACHINE_CONNECTING_THE_WORLD } from "../assets/ArtifactTags.js";

import image1 from "../assets/img/telegraph1.jpg"
import image2 from "../assets/img/telegraph2.png"

const Telegraph = () => {
  const artifact = getLocalizedArtifact(TELEGRAPH_MACHINE_CONNECTING_THE_WORLD);
  
  return (
    <div>
      <StationHeader nav={<NavStation4 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <SlidesTelegraph artifact={artifact} artifactImg1={image1} artifactImg2={image2} />
    </div>
  );
};

export default Telegraph;
