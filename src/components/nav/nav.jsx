import { Link } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <div>
      <div className="nav menu">
        <Link to="#" relative="path" className="nav-links">
          Home
        </Link>
        <Link to="/" relative="path" className="nav-links">
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
