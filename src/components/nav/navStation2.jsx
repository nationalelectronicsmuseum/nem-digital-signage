import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const NavStation2 = () => {
  return (
    <>
      <div className="nav menu">
      <Link to="/station2" relative="path" className="nav-links">
            Home
        </Link>
      <Link to="/jumping-wires" relative="path" className="nav-links">
            Jumping Wires
        </Link>
        <Link to="/jacobs-ladder" relative="path" className="nav-links">
            Jacob's Ladder
        </Link>
        <Link to="/static-electricity" relative="path" className="nav-links">
            Static Electricity
        </Link>
        <Link to="/manual-turbine" relative="path" className="nav-links">
            Manual Turbine
        </Link>
      </div>
    </>
  );
};

export default NavStation2;
