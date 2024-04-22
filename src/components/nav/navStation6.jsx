import React from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

function navStation6() {
  return (
    <div>
        <div className="nav menu">
        <Link to="/station6" relative="path" className="nav-links">
            Home
        </Link>
        <Link to="/audio" relative="path" className="nav-links">
            Audio Translator
        </Link>
        <Link to="/marconi" relative="path" className="nav-links">
            Marcon Magnetic Detector
        </Link>
        <Link to="/first-broadcast" relative="path" className="nav-links">
            First Broadcast
        </Link>
        <Link to="/evolution-of-sound" relative="path" className="nav-links">
          Evolution of Sound
        </Link>
        </div>
    </div>
  )
}

export default navStation6