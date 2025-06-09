import Slides from '../components/slides/slides'
import NavStation2 from '../components/nav/navStation2.jsx'
import Loop from '../components/loop'
import StationHeader from '../components/StationHeader/StationHeader.jsx'
import { getLocalizedArtifact } from "../assets/Localization.js";
import { MANUAL_TURBINE } from "../assets/ArtifactTags.js";

export default function Turbine() {
  const artifact = getLocalizedArtifact(MANUAL_TURBINE);

  return (
    <div>
      <StationHeader nav={<NavStation2 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} />
    </div>
  )
}
