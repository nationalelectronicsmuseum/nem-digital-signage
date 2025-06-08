import { Link } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <div>
      <div className="nav menu">
        <Link to="/" relative="path" className="nav-links">
          Home
        </Link>
      </div>
      
      
    </div>
  );
};

export default Nav;
