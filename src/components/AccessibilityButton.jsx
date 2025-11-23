import { useRef, useState } from "react";
import "../styles/AccessibilityButton.css";
import AccessibilityMenu from "./AccessibilityMenu.jsx";
import aIcon from "/images/accessibleIcon.svg?url";

export default function AccessibilityButton() {
  const [open, setOpen] = useState("");
  const [hideMenu, setHideMenu] = useState("hide-menu");
  const menuRef = useRef();

  const toggleMenu = () => {
    if (open === "") {
      setOpen("menu-enabled");
      setHideMenu("accessibility-menu show-menu");
    } else {
      setOpen("");
      setHideMenu("accessibility-menu hide-menu");
    }
  };

  const handleBackdropClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      toggleMenu();
    }
  };

  return (
    <div className={open}>
      <button onClick={toggleMenu} className="accessibility-button">
        <img src={aIcon} className="accessibility-icon"></img>
        Accessibility
      </button>
      <div className="accessibility-background"></div>
      <div className={hideMenu} onMouseDown={handleBackdropClick}>
        <AccessibilityMenu menuRef={menuRef} />
      </div>
    </div>
  );
}
