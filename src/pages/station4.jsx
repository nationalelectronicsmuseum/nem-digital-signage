import { Link } from "react-router-dom";
import homeAudio from "../assets/img/audiotrans1.jpg";
import telegraphThumbnail from "../assets/img/section.jpg";
import homeMarconi from "../assets/img/marconi1.jpg";
import millerGrantLogo from "../assets/img/millerGrant.png";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { getLocalizedArtifact } from "../assets/Localization.js";
import {
  AUDIO_TRANSLATOR,
  TELEGRAPH_MACHINE,
  THE_MARCONI_MAGNETIC_DETECTOR,
} from "../assets/ArtifactTags.js";

export default function Station3() {
  const audioTranslator = getLocalizedArtifact(AUDIO_TRANSLATOR);
  const telegraphMachine = getLocalizedArtifact(TELEGRAPH_MACHINE);
  const marconiMagneticDetector = getLocalizedArtifact(
    THE_MARCONI_MAGNETIC_DETECTOR
  );
  return (
    <div>
      <img className="grantLogo" src={millerGrantLogo} relative="path"></img>
      <div className="accs">
        <Accessibility />
      </div>

      <div className="border">
        <h1 className="title">National Electronics Museum</h1>
      </div>

      <div className="homeLink">
        <Link to="/telegraph" className="linkPage" relative="path">
          <img src={telegraphThumbnail} className="homeImg"></img>
          <h2 className="stationPages">{telegraphMachine.stationTitle}</h2>
        </Link>
        <Link to="/marconi" relative="path" className="linkPage">
          <img src={homeMarconi} className="homeImg"></img>
          <h2 className="stationPages">
            {marconiMagneticDetector.stationTitle}
          </h2>
        </Link>
        <Link to="/station4audio" relative="path" className="linkPage">
          <img src={homeAudio} className="homeImg"></img>
          <h2 className="stationPages">{audioTranslator.stationTitle}</h2>
        </Link>
      </div>
    </div>
  );
}
