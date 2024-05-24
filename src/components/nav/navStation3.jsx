import React from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

const NavStation3 = () => {
  return (
    <>
        <div className="nav menu">
        <Link to="/station3" relative="path" className="nav-links" onClick={cancelSpeech}>
           Home
        </Link>
        <Link to="/theremin" relative="path" className="nav-links" onClick={cancelSpeech}>
           Theramin
        </Link>
        <Link to="/visible-electromagnetic-waves" relative="path" className="nav-links" onClick={cancelSpeech}>
            Visible Electromagnetic Waves
        </Link>
        <Link to="/polarization" relative="path" className="nav-links" onClick={cancelSpeech}>
            Polarization
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6>Hub Station</h6>
        </Link>
        </div>   
    </>
  )
}

export default NavStation3