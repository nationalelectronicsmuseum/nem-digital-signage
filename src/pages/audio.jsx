import { useState } from "react";
import MenuButton from "../components/button/menuButton.jsx";
import Nav from "../components/nav/nav.jsx";

const Audio = () => {

  const [menu, setMenu] = useState(true);
  const [showMenu, setShowMenu] = useState("hidden");

  const handleMenu = () => {
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
    <div>
      <div className="nav-bar">
        <MenuButton handleMenu={handleMenu} />
        <div className={showMenu}>
          <Nav />
        </div>
      </div>

      <h1 className="artifactTitle">The Audio Translator</h1>
      <h3>Under Maintenance</h3>
    </div>
  );
};

export default Audio;
