import { useState } from "react";
import StationNav from "./StationNav.jsx";
import "../styles/MenuButton.css";

export default function MenuButton({ station }) {
  const [open, setOpen] = useState("");
  const [menuButton, setMenuButton] = useState("menu-button");

  const toggleMenu = () => {
    if (open === "") {
      setOpen("menu-enabled");
      setMenuButton("menu-button menu-button-on");
    } else {
      setOpen("");
      setMenuButton("menu-button");
    }
  };

  return (
    <div className={open}>
      <button
        className="burger-menu-icon"
        onClick={toggleMenu}
        aria-label="Section menu"
        aria-expanded={open !== ""}
      >
        <svg
          width="30px"
          height="30px"
          className={menuButton}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10" y1="25" x2="90" y2="25" className="line one"></line>
          <line x1="10" y1="50" x2="90" y2="50" className="line two"></line>
          <line x1="10" y1="75" x2="90" y2="75" className="line three"></line>
        </svg>
      </button>
      <div className="menu-background"></div>
      {/* Any tap inside the menu (a nav link or the backdrop) closes it. */}
      <div className="station-menu" role="presentation" onClick={toggleMenu}>
        <StationNav station={station} />
      </div>
    </div>
  );
}
