import { Link } from "react-router-dom";
import "./nav.css"

const NavStation15 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station15" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/station15section1" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 1
        </Link>
        <Link to="/station15section2" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 2
        </Link>
        <Link to="/station15section3" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 3
        </Link>
        <Link to="/station15section4" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 4
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation15;
