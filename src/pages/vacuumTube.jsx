import Slides from '../components/slides/slides'
import Menu from '../components/menu/menu'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import { getLocalizedArtifact } from "../assets/Localization.js";
import { VACUUM_TUBE } from "../assets/ArtifactTags.js";

function VacuumTube() {
  const artifact = getLocalizedArtifact(VACUUM_TUBE);

  return (
    <div>
      <div className="btnNav">
        <Menu />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>
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

export default VacuumTube