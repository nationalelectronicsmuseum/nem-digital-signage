import { Link } from "react-router-dom";
import "./nav.css"

const NavStation11 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station11" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/station11section1" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 1
        </Link>
        <Link to="/station11section2" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 2
        </Link>
        <Link to="/station11section3" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 3
        </Link>
        <Link to="/station11section4" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 4
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation11;
