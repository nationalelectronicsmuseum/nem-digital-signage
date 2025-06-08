import { Link } from "react-router-dom";
import "./nav.css";

const NavStation2 = () => {
  const cancelSpeech = () => {
    window.speechSynthesis.cancel()
  }
  return (
    <>
      <div className="nav menu">
      <Link to="/station2" relative="path" className="nav-links" onClick={cancelSpeech}>
            Home
        </Link>
      <Link to="/jumping-wires" relative="path" className="nav-links" onClick={cancelSpeech}>
            Jumping Wires
        </Link>
        <Link to="/jacobs-ladder" relative="path" className="nav-links" onClick={cancelSpeech}>
            Jacob's Ladder
        </Link>
        <Link to="/static-electricity" relative="path" className="nav-links" onClick={cancelSpeech}>
            Static Electricity
        </Link>
        <Link to="/vandegraaff" relative="path" className="nav-links" onClick={cancelSpeech}>
            Van de Graaff Generator
        </Link>
        <Link to="/" relative="path" className="nav-links" onClick={cancelSpeech}>
          <h6 className="white">Hub Station</h6>
        </Link>
      </div>
    </>
  );
};

export default NavStation2;
