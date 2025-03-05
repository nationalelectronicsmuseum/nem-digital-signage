import React from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

const NavStation5 = () => {
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
        <div className="nav menu">
        <Link to="/station5" relative="path" className="nav-links" onClick={cancelSpeech}>
           Home
        </Link>
        <Link to="/microwave-turntable" relative="path" className="nav-links" onClick={cancelSpeech}>
            Why do Microwaves Have Turntables?
        </Link>
        <Link to="/theremin" relative="path" className="nav-links" onClick={cancelSpeech}>
           Theremin
        </Link>
        
        
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
        </div>   
    </>
  )
}

export default NavStation5