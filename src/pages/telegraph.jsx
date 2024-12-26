import React, {useContext} from "react";
import { ContextImage } from "../assets/accessibilityContext.js";
import Menu from "../components/menu/menu";
import SlidesTelegraph from '../components/slides/slidesTelegraph';
import { artifact } from "../assets/database/artifact";
import Loop from '../components/loop';
import Accessibility from '../components/accessibility/accessibility';

import image1 from "../assets/img/telegraph1.jpg"
import image2 from "../assets/img/telegraph2.png"

const Telegraph = () => {
  const data = artifact.filter((x) => x.title === "Telegraph Machine - Connecting the World");
      
      const [display, setDisplay] = useContext(ContextImage)
        
      const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
      const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : null
      
      const hideMe = () => {
        setDisplay("hideImage")
      }
  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
        <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne" />
      </div>
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
      <SlidesTelegraph artifact={data[0]} artifactImg1={image1} artifactImg2={image2} />
    </div>
  );
};

export default Telegraph;
