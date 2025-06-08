import { Link } from "react-router-dom";
import "./nav.css"

const NavStation1 = () => {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }

  return (
    <div>
      <div className="nav menu">
        <Link to="/station1" relative="path" className="nav-links" onClick={cancelSpeech}>
          Home
        </Link>
        <Link to="/voltage-and-current" relative="path" className="nav-links" onClick={cancelSpeech}>
        Voltage and Current
        </Link>
        <Link to="/human-battery" relative="path" className="nav-links" onClick={cancelSpeech}>
        Human Battery
        </Link>
        <Link to="/oersted" relative="path" className="nav-links" onClick={cancelSpeech}>
        Oersted Experiment
        </Link>
        <Link to="/faraday" relative="path" className="nav-links" onClick={cancelSpeech}>
        Faraday Experiment
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
      
      
    </div>
  );
};

export default NavStation1;
