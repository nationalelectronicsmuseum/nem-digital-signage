import React from 'react'
import Menu from "../components/menu/menu";
import Slides from "../components/slides/slides";
import { artifact } from "../assets/database/artifact";
import Loop from '../components/loop';
import Accessibility from '../components/accessibility/accessibility';

import image1 from "../assets/img/telegraph1.jpg"
import image2 from "../assets/img/telegraph2.png"

const Telegraph = () => {
  const data = artifact.filter((x) => x.title === "Telegraph Machine - Connecting the World");
  return (
    <div>
      <div className="btnNav">
        <Menu />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Telegraph Machine - Connecting the World</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image1} artifactImg2={image2} />
    </div>
  );
};

export default Telegraph;
