import React from "react";
import { Link } from "react-router-dom";

function HomeStation() {
  return (
    <>
      <div>
        <h1 className="title">National Electronics Museum</h1>
      </div>
      <div>
        <Link to="/station1" relative="path">
          Station 1
        </Link>
        <Link to="/station2" relative="path">
          Station 2
        </Link>
        <Link to="/station3" relative="path">
          Station 3
        </Link>
        <Link to="/station4" relative="path">
          Station 4
        </Link>
        <Link to="/station5" relative="path">
          Station 5
        </Link>
        <Link to="/station6" relative="path">
          Station 6
        </Link>
        <Link to="/station7" relative="path">
          Station 7
        </Link>
        <Link to="/station8" relative="path">
          Station 8
        </Link>
        <Link to="/station9" relative="path">
          Station 9
        </Link>
        <Link to="/station10" relative="path">
          Station 10
        </Link>
        <Link to="/station11" relative="path">
          Station 11
        </Link>
        <Link to="/station12" relative="path">
          Station 12
        </Link>
      </div>
    </>
  );
}

export default HomeStation;
