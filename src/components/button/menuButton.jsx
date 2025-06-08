import { useState } from "react";
import "./menuButton.css";

function MenuButton(props) {
  const [open, setOpen] = useState("");
  const [menuButton, setMenuButton] = useState("menuBtn")

  const toggleMenu = () => {
    if (open === "") {
      setOpen("open");
      setMenuButton("menuBtn on")
    } else {
        setOpen("");
        setMenuButton("menuBtn")
    }
  };


  return (
    <div className={open}>
        <button className="burger" onClick={toggleMenu} >
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
          <div className="background"></div>
        <div className="menu" onClick={toggleMenu}>
          {props.children}
        </div>
      </div>
  );
}

export default MenuButton;
