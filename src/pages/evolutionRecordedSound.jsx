import React, {useContext} from 'react'
import MenuStation3 from '../components/menu/menuStation3'
import { ContextImage } from "../assets/accessibilityContext.js";
import Loop from '../components/loop'
import Accessibility from '../components/accessibility/accessibility'
import SlidesAudio from '../components/slides/slidesAudio'


function EvolutionRecordedSound() {
//   const data = artifact.filter(x => x.title === "Faraday's Experiment: Electricity and Magnetism")
  
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
        <MenuStation3 />
        <div className="accs">
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">The Evolution of Recorded Sound</h1>
        </div>
      </div>
      <Loop />
      <SlidesAudio/>
    </div>
  )
}

export default EvolutionRecordedSound