import { useContext } from "react";
import Slides from "../components/slides/slides.jsx";
import NavStation1 from "../components/nav/navStation1.jsx";
import { Context, ContextImage } from "../assets/accessibilityContext.js";
import voltImpact from "../assets/img/volt_impact.jpg"
import artifact from "../assets/database/artifact.js";
import artifactSpanish from "../assets/database/artifact-spanish.js"
import ohmslawGif from "../assets/img/ohmslaw.gif";
import Loop from '../components/loop'
import StationHeader from "../components/StationHeader/StationHeader.jsx";


export default function VoltAndCurr() {
  const [lang, setLang] = useContext(Context);
  const [display, setDisplay] = useContext(ContextImage)

  const data = artifact.filter(x => x.title === "Voltage and Current").pop()
  const dataSpanish = artifactSpanish.filter(x => x.title === "Voltaje y corriente").pop()

  const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
  const displayingImages = display.includes("showImageOne") ? ohmslawGif : display.includes("showImageTwo") ? voltImpact : null

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
      <Slides artifact={lang === "default" ? data: lang === "english" ? data : dataSpanish} artifactImg1={ohmslawGif} artifactImg2={voltImpact} />
    </div>
  );
}