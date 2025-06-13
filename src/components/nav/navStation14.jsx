import { Link } from "react-router-dom";
import "./nav.css"

const NavStation14 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station14" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/station14section1" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 1
        </Link>
        <Link to="/station14section2" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 2
        </Link>
        <Link to="/station14section3" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 3
        </Link>
        <Link to="/station14section4" relative="path" className="nav-links" onClick={cancelSpeech}>
        Section 4
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation14;
