import NavStation6 from "../components/nav/navStation3.jsx";
import Slides from "../components/slides/slides.jsx";
import StationHeader from "../components/StationHeader/StationHeader.jsx"
import { getLocalizedArtifact } from "../assets/Localization.js";
import { THE_AUDIO_TRANSLATOR } from "../assets/ArtifactTags.js";

import Loop from '../components/loop'
import image1 from "../assets/img/audiotrans2.jpg"
import image2 from "../assets/img/audiotrans3.jpg"

const Audio = () => {
    const artifact = getLocalizedArtifact(THE_AUDIO_TRANSLATOR);

  return (
    <div>
      <StationHeader nav={<NavStation6 />} artifact={artifact} />
      <div className="sectionhead">
        <div className="sectiontitle sectionleft">
          <h1 className="artifactTitle">{artifact.title}</h1>
        </div>
      </div>
      <Loop />
      <Slides artifact={artifact} artifactImg1={image1} artifactImg2={image2}/>
    </div>
  );
};

export default Audio;
