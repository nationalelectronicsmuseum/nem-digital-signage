import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const NavStation1 = () => {
  return (
    <div>
      <div className="nav menu">
        <Link to="/station1" relative="path" className="nav-links">
          Home
        </Link>
        <Link to="/voltage-and-current" relative="path" className="nav-links">
        Voltage and Current
        </Link>
        <Link to="/human-battery" relative="path" className="nav-links">
        Do you have the Power?
        </Link>
        <Link to="/orsted" relative="path" className="nav-links">
        Orsted Experiment
        </Link>
        <Link to="/faraday" relative="path" className="nav-links">
        Faraday Experiment
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation1;
