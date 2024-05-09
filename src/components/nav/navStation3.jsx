import React from 'react'
import { Link } from "react-router-dom";
import "./nav.css";

const NavStation3 = () => {
  return (
    <>
        <div className="nav menu">
        <Link to="/station3" relative="path" className="nav-links">
           Home
        </Link>
        <Link to="/theremin" relative="path" className="nav-links">
           Theramin
        </Link>
        <Link to="/visible-electromagnetic-waves" relative="path" className="nav-links">
            Visible Electromagnetic Waves
        </Link>
        <Link to="/polarization" relative="path" className="nav-links">
            Polarization
        </Link>
        <Link to="/" relative="path" className="nav-links">
          <h6>Hub Station</h6>
        </Link>
        </div>   
    </>
  )
}

export default NavStation3