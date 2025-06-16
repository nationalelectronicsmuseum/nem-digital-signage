import Slides from "../components/slides/slides.jsx";
import NavStation1 from "../components/nav/navStation1.jsx";
import voltImpact from "../assets/img/volt_impact.jpg"
import ohmslawGif from "../assets/img/ohmslaw.gif";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { VOLTAGE_AND_CURRENT } from "../assets/ArtifactTags.js";

export default function VoltAndCurr() {
  const artifact = getLocalizedArtifact(VOLTAGE_AND_CURRENT);
  return (
    <div>
      <StationHeader nav={<NavStation1 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={ohmslawGif} artifactImg2={voltImpact} />
    </div>
  );
}