import React, { useState } from "react";
import Menu from "../components/menu/menu.jsx";

export default function InProgress() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="btnNav">
        <Menu className="whiteMenu"/>
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
