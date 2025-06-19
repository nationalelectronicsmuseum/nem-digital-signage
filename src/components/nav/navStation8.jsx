import { Link } from "react-router-dom";
import "./nav.css"

const NavStation8 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station8" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/station8section1" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 1
        </Link>
        <Link to="/station8section2" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 2
        </Link>
        <Link to="/station8section3" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 3
        </Link>
        <Link to="/station8section4" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 4
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation8;
