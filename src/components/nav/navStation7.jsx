import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const NavStation7 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station7" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/electromagnetic" relative="path" className="nav-links" onClick={cancelSpeech}>
        Electromagnetic Waves
        </Link>
        <Link to="/polarization" relative="path" className="nav-links" onClick={cancelSpeech}>
        Polarization Experiment
        </Link>
        
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation7;
