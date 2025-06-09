import { useContext } from "react";
import Slides from "../components/slides/slides";
import NavStation7 from "../components/nav/navStation7";
import artifact from "../assets/database/artifact";
import artifactSpanish from "../assets/database/artifact-spanish"
import { Context } from "../assets/accessibilityContext.js";
import StationHeader from "../components/StationHeader/StationHeader"
import Loop from '../components/loop'

function Polarization() {
  const [lang, setLang] = useContext(Context);
  
  const data = artifact.filter((x) => x.title === "Polarization Experiment").pop();
  const dataSpanish = artifactSpanish.filter((x) => x.title === "Experimento de polarización").pop();

  const dataArtifact = lang === "default" ? data: lang === "english" ? data : dataSpanish
  const dataTitle = lang === "default" ? data.title: lang === "english" ? data.title : dataSpanish.title

  return (
    <>
      <StationHeader nav={<NavStation7 />} artifact={dataArtifact} />

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">{dataTitle}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={dataArtifact} />
    </>
  );
}

export default Polarization;
