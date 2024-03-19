import React from "react";
import "./menuButton.css";

function MenuButton({handleMenu}) {

    
const toggleOpen = () => {
    console.log("Yes")
    var menu = document.getElementsByClassName('menu')[0]
    console.log(menu)
    menu.classList.toggle('on');
  }


  return (
    <div className="wrapper" onClick={handleMenu}>
      <button className="button" onClick={toggleOpen} >
        <svg
          width="30px"
          height="30px"
          className="menu"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="10" y1="25" x2="90" y2="25" className="line one"></line>
          <line x1="10" y1="50" x2="90" y2="50" className="line two"></line>
          <line x1="10" y1="75" x2="90" y2="75" className="line three"></line>
        </svg>
      </button>
    </div>
  );
}

export default MenuButton;
