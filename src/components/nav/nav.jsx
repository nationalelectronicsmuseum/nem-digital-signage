import React from "react";
import { Link } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <div>
      <div className="nav menu">
      <p>Menu Here</p>
        <Link to="/" relative="path" className="nav-links">
          Home
        </Link>
        <Link to="/audio" relative="path" className="nav-links">
          Audio
        </Link>
        <Link to="/telegraph" relative="path" className="nav-links">
          Telegraph
        </Link>
      </div>
      
      
    </div>
  );
};

export default Nav;
