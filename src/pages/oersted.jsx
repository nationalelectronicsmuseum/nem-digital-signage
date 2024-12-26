import React, {useContext} from 'react'
import Accessibility from "../components/accessibility/accessibility.jsx";
import { ContextImage } from "../assets/accessibilityContext.js";
import { artifact } from '../assets/database/artifact'
import MenuStation1 from '../components/menu/menuStation1'
import Slides from '../components/slides/slides'
import Loop from '../components/loop.jsx';

import image1 from "../assets/img/oersted1.jpg"
import image2 from "../assets/img/oersted2.jpg"
import image3 from "../assets/img/oersted3.png"

function Oersted() {
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "Oersted's Experiment")

  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? image2 : display.includes("showImageTwo") ? image3 : null

  const hideMe = () => {
    setDisplay("hideImage")
  }
  
  return (
    <div>
      <div className={displayingImage} onClick={hideMe}>
      <div className="backgroundImage"></div>
        <img src={displayingImages} className="galleryImageOne"/>
      </div>

      <div className="btnNav">
        <MenuStation1 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">Oersted's Experiment</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={data[0]} artifactImg1={image2} artifactImg2={image3}/>
    </div>
  )
}

export default Oersted