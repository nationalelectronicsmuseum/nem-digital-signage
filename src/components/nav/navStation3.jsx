import React from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

const NavStation3 = () => {
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
        <div className="nav menu">
        <Link to="/station3" relative="path" className="nav-links" onClick={cancelSpeech}>
           Home
        </Link>
        <Link to="/marconi" relative="path" className="nav-links" onClick={cancelSpeech}>
           The Marconi Magnetic Detector
        </Link>
        <Link to="/audio" relative="path" className="nav-links" onClick={cancelSpeech}>
            Audio Translator
        </Link>
        <Link to="/evolution-recorded-sound" relative="path" className="nav-links" onClick={cancelSpeech}>
            The Evolution of Recorded Sound
        </Link>

        {/* <Link to="/polarization" relative="path" className="nav-links" onClick={cancelSpeech}>
            Polarization
        </Link> */}
        
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
        </div>   
    </>
  )
}

export default NavStation3