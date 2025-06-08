import {useContext} from 'react'
import NavStation3 from '../components/nav/navStation3.jsx'
import { ContextImage } from "../assets/accessibilityContext.js";
import Loop from '../components/loop'
import SlidesAudio from '../components/slides/slidesAudio'
import StationHeader from '../components/StationHeader/StationHeader.jsx';
import { artifact } from "../assets/database/artifact.js";

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
      <StationHeader nav={<NavStation3 />} artifact={artifact} />

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