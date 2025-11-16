import { Link } from "react-router-dom";
import "./nav.css";
import {
  getLocalizedArtifact,
  getLocalizedStringConstant,
} from "../../assets/Localization.js";
import {
  VOLTAGE_AND_CURRENT,
  HUMAN_BATTERY,
  OERSTED,
  THE_FARADAY_PROJECT,
} from "../../assets/ArtifactTags.js";

const NavStation1 = () => {
  const home = getLocalizedStringConstant("Home");
  const voltageAndCurrent = getLocalizedArtifact(VOLTAGE_AND_CURRENT);
  const humanBattery = getLocalizedArtifact(HUMAN_BATTERY);
  const oersted = getLocalizedArtifact(OERSTED);
  const theFaradayProject = getLocalizedArtifact(THE_FARADAY_PROJECT);

  const cancelSpeech = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <div>
      <div className="nav menu">
        <Link
          to="/station1"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {home}
        </Link>
        <Link
          to="/voltage-and-current"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {voltageAndCurrent.stationTitle}
        </Link>
        <Link
          to="/human-battery"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {humanBattery.stationTitle}
        </Link>
        <Link
          to="/oersted"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {oersted.stationTitle}
        </Link>
        <Link
          to="/faraday"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {theFaradayProject.stationTitle}
        </Link>
        <Link
          to="/"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </div>
  );
};

export default NavStation1;
