import { Link } from "react-router-dom";
import homePolar from "../assets/img/polarHome.png"
import homeWaves from "../assets/img/wavesHome.jpg"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { ELECTROMAGNETIC_WAVES, POLARIZATION_EXPERIMENT } from "../assets/ArtifactTags.js";

export default function Station7() {
  const electromagneticWaves = getLocalizedArtifact(ELECTROMAGNETIC_WAVES);
  const polarizationExperiment = getLocalizedArtifact(POLARIZATION_EXPERIMENT);
  return (
    <div>
      <div className="accs">
        <Accessibility />
      </div>
      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>
      <div className="homeLink">
        <Link to="/electromagnetic" relative="path" className="linkPage">
          <img src={homeWaves} className="homeImg"></img>
          <h2 className="stationPages">{electromagneticWaves.stationTitle}</h2>
        </Link>
        <Link to="/polarization" relative="path" className="linkPage">
          <img src={homePolar} className="homeImg"></img>
          <h2 className="stationPages">{polarizationExperiment.stationTitle}</h2>
        </Link>
      </div>
    </div>
  )
}
