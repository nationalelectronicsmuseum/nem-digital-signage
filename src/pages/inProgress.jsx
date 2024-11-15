import React, { useState, useContext } from "react";
import MenuStation1 from "../components/menu/menuStation1.jsx";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { Context, ContextSpeechPlayer } from "../assets/accessibilityContext.js";

export default function InProgress() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="btnNav">
        <MenuStation1 />
      </div>
      <div className="border">
                <h1 className="title">National Electronics Museum</h1>
        </div>
      <div className="sectionhead">
        <div className="inProgressTitle">
        
          <h1 className="inProgress">Content Coming Soon</h1>
        </div>
      </div>
    </div>
  );
}
