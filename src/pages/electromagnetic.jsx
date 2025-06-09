import SlidesElectromagnetic from "../components/slides/slidesElectromagnetic.jsx"
import NavStation7 from "../components/nav/navStation7.jsx";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { INTRODUCTION_TO_ELECTROMAGNETIC_WAVES } from "../assets/ArtifactTags.js";

function Polarization() {
  const artifact = getLocalizedArtifact(INTRODUCTION_TO_ELECTROMAGNETIC_WAVES);

  return (
    <>
      <StationHeader nav={<NavStation7 />} artifact={artifact} />
      <div className="emhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle" >{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <SlidesElectromagnetic artifact={artifact} />
    </>
  );
}

export default Polarization;
