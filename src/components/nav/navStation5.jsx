import { Link } from "react-router-dom";
import {
  WHY_DO_MICROWAVES_HAVE_TURNTABLES,
  THEREMIN,
} from "../../assets/ArtifactTags.js";
import {
  getLocalizedArtifact,
  getLocalizedStringConstant,
} from "../../assets/Localization.js";

import "./nav.css";

const NavStation5 = () => {
  const home = getLocalizedStringConstant("Home");
  const whyDoMicrowavesHaveTurntables = getLocalizedArtifact(
    WHY_DO_MICROWAVES_HAVE_TURNTABLES
  );
  const theremin = getLocalizedArtifact(THEREMIN);
  const cancelSpeech = () => {
    window.speechSynthesis.cancel();
  };
  return (
    <>
      <div className="nav menu">
        <Link
          to="/station5"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {home}
        </Link>
        <Link
          to="/microwave-turntable"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {whyDoMicrowavesHaveTurntables.stationTitle}
        </Link>
        <Link
          to="/theremin"
          relative="path"
          className="nav-links"
          onClick={cancelSpeech}
        >
          {theremin.stationTitle}
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
    </>
  );
};

export default NavStation5;
