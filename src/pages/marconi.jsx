import { useState } from "react";
import { Link } from "react-router-dom";
// import marconiImg from "../assets/img/marconi.png"
import marconiImg from "../assets/img/marconi.svg";
import MenuButton from "../components/button/menuButton.jsx";
import Nav from "../components/nav/nav.jsx";

const Marconi = () => {
  const [menu, setMenu] = useState(true);
  const [showMenu, setShowMenu] = useState("hidden");
  // const [slide, setSlide] = useState(1);

  const handleMenu = () => {
    // setMenu(true);
    if (menu === true) {
      setMenu(false);
      setShowMenu("showMenu");
      console.log("showMenu");
    } else {
      setMenu(true);
      setShowMenu("hidden");
      console.log("hidden");
    }
  };

  return (
    <>
      <div className="nav-bar">
        <MenuButton handleMenu={handleMenu} />
        <div className={showMenu}>
          <Nav />
        </div>
      </div>

      <h1 className="artifactTitle">The Marconi Magnetic Detector</h1>

    <div className="slide1">

      <div className="marconi-left">
        <div className="description">

        </div>
      </div>

      <div className="marconi-right">
      <img src={marconiImg} className="marconiImg"></img>
      </div>

    </div>
    </>
  );
};

export default Marconi;
