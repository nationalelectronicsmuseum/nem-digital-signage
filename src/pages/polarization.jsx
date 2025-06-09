import Slides from "../components/slides/slides";
import NavStation7 from "../components/nav/navStation7";
import StationHeader from "../components/StationHeader/StationHeader"
import Loop from '../components/loop'
import { getLocalizedArtifact } from "../assets/Localization.js";
import { POLARIZATION_EXPERIMENT } from "../assets/ArtifactTags.js";

function Polarization() {
  const artifact = getLocalizedArtifact(POLARIZATION_EXPERIMENT);

  return (
    <>
      <StationHeader nav={<NavStation7 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} />
    </>
  );
}

export default Polarization;
