import MenuStation6 from '../components/menu/menuStation6'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import Slides from '../components/slides/slides'
import { getLocalizedArtifact } from "../assets/Localization.js";
import { FIRST_BROADCAST } from "../assets/ArtifactTags.js";

function Sonar() {
    const artifact = getLocalizedArtifact(FIRST_BROADCAST);

  return (
    <div>
      <div className="btnNav">
        <MenuStation6 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Sonar Veterans Oral History Listening Station</h1>
        </div>
      </div>

      <div>
        <div>
          <h2>Choose an oral history segment from the following veterans courtesy of the Library of Congress Veterans History Project:</h2>
        </div>
        <div>
          <div>Robert Russell Hunt, US Navy Chief</div>
          <div>Donald L. Campbell, US Torpedoman Mate Second Class</div>
          <div>Richard Gabrielson, US Navy E-4</div>
          <div>Ronald P.C. Waller, US Navy Petty Officer First Class</div>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} />
    </div>
  )
}

export default Sonar