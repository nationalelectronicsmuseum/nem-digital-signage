import NavStation3 from '../components/nav/navStation3.jsx'
import Loop from '../components/loop'
import SlidesAudio from '../components/slides/slidesAudio'
import StationHeader from '../components/StationHeader/StationHeader.jsx';
import artifact from "../assets/database/artifact.js";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { EVOLUTION_OF_RECORDED_SOUND } from "../assets/ArtifactTags.js";

function EvolutionRecordedSound() {
  const evolutionOfRecordedSound = getLocalizedArtifact(EVOLUTION_OF_RECORDED_SOUND);
  return (
    <div>
      <StationHeader nav={<NavStation3 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{evolutionOfRecordedSound.stationTitle}</h1>
        </div>
      </div>
      <Loop />
      <SlidesAudio/>
    </div>
  )
}

export default EvolutionRecordedSound