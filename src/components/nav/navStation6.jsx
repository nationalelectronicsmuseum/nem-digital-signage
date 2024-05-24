import React from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

function navStation6() {
  return (
    <div>
        <div className="nav menu">
        <Link to="/station6" relative="path" className="nav-links" onClick={cancelSpeech}>
            Home
        </Link>
        <Link to="/audio" relative="path" className="nav-links" onClick={cancelSpeech}>
            Audio Translator
        </Link>
        <Link to="/marconi" relative="path" className="nav-links" onClick={cancelSpeech}>
            Marcon Magnetic Detector
        </Link>
        <Link to="/first-broadcast" relative="path" className="nav-links" onClick={cancelSpeech}>
            First Broadcast
        </Link>
        <Link to="/evolution-of-sound" relative="path" className="nav-links" onClick={cancelSpeech}>
          Evolution of Sound
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6>Hub Station</h6>
        </Link>
        </div>
    </div>
  )
}

export default navStation6