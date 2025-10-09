import { Link } from "react-router-dom";
import homePolar from "../assets/img/polarHome.png"
import homeWaves from "../assets/img/wavesHome.jpg"
import homeEwaves from "../assets/img/ewaves1.webp"
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import { ELECTROMAGNETIC_WAVES, POLARIZATION_EXPERIMENT, ELECTROMAGNETIC_RADIO_WAVES } from "../assets/ArtifactTags.js";

export default function Station7() {
  const electromagneticWaves = getLocalizedArtifact(ELECTROMAGNETIC_WAVES);
  const polarizationExperiment = getLocalizedArtifact(POLARIZATION_EXPERIMENT);
  const electromagneticRadioWaves = getLocalizedArtifact(ELECTROMAGNETIC_RADIO_WAVES);
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
        <Link to="/station7-visible-electromagnetic-waves" className="linkPage" relative="path">
          <img src={homeEwaves} className="homeImg"></img>
          <h2 className="stationPages">{electromagneticRadioWaves.stationTitle}</h2>
        </Link>
      </div>
    </div>
  )
}
