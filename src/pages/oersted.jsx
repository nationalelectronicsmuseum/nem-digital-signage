import { useContext } from 'react'
import { Context, ContextImage } from "../assets/accessibilityContext.js";
import artifact from '../assets/database/artifact'
import artifactSpanish from "../assets/database/artifact-spanish.js"
import NavStation1 from '../components/nav/navStation1.jsx';
import Slides from '../components/slides/slides'
import Loop from '../components/loop.jsx';
import StationHeader from "../components/StationHeader/StationHeader.jsx";

import image1 from "../assets/img/oersted1.jpg"
import image2 from "../assets/img/oersted2.jpg"
import image3 from "../assets/img/oersted3.png"

function Oersted() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "Oersted's Experiment").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "Experimento de Oersted").pop()


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

      <StationHeader nav={<NavStation1 />} artifact={artifact} />

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={lang === "default" ? data : lang === "english" ? data : dataSpanish} artifactImg1={image2} artifactImg2={image3}/>
    </div>
  )
}

export default Oersted