import NavStation6 from '../components/nav/navStation6.jsx'
import Loop from '../components/loop'
import Slides from '../components/slides/slides'
import StationHeader from '../components/StationHeader/StationHeader.jsx'
import { getLocalizedArtifact } from "../assets/Localization.js";
import { FIRST_BROADCAST } from "../assets/ArtifactTags.js";

function FirstBroadcast() {
  const artifact = getLocalizedArtifact(FIRST_BROADCAST);

  return (
    <div>
      <StationHeader nav={<NavStation6 />} artifact={artifact} />
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

export default FirstBroadcast