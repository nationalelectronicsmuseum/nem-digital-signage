import { Link } from "react-router-dom";
import "./nav.css";

function navStation6() {

  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  
  return (
    <div>
        <div className="nav menu">
        <Link to="/station6" relative="path" className="nav-links" onClick={cancelSpeech}>
            Home
        </Link>
        <Link to="/infrared" relative="path" className="nav-links" onClick={cancelSpeech}>
            Infrared
        </Link>
        <Link to="/theremin" relative="path" className="nav-links" onClick={cancelSpeech}>
            Theremin
        </Link>
        <Link to="/bombsights" relative="path" className="nav-links" onClick={cancelSpeech}>
            Bombsights
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
        </div>
    </div>
  )
}

export default navStation6