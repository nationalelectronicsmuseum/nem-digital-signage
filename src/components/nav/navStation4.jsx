import { Link } from "react-router-dom";
import "./nav.css";

const NavStation4 = () => {
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
        <div className="nav menu">
        <Link to="/station4" relative="path" className="nav-links" onClick={cancelSpeech}>
           Home
        </Link>
        <Link to="/telegraph" relative="path" className="nav-links" onClick={cancelSpeech}>
           Telegraph Machine
        </Link>
        <Link to="/marconi" relative="path" className="nav-links" onClick={cancelSpeech}>
           The Marconi Magnetic Detector
        </Link>
        <Link to="/station4audio" relative="path" className="nav-links" onClick={cancelSpeech}>
           Audio Translator
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
        </div>   
    </>
  )
}

export default NavStation4