import React, {useContext} from "react";
import artifactImg from "../assets/img/home-audio.svg";
import { Context, ContextImage } from "../assets/accessibilityContext.js";
import MenuStation3 from "../components/menu/menuStation3";
import Slides from "../components/slides/slides.jsx";
import Accessibility from '../components/accessibility/accessibility.jsx';
import { artifactSpanish } from '../assets/database/artifacts-spanish.js'

import image1 from "../assets/img/audiotrans2.jpg"
import image2 from "../assets/img/audiotrans3.jpg"

const Audio = () => {
  const artifact = {
    title: "The Audio Translator",
    info: [
      { 
        id: 1,
        title: "Impact: ", 
        text: "Connected 40 million households by 1930" 
      },
      { id: 2,
        title: "Global Reach: ", 
        text: "95% mobile network coverage (2023)" },
    ],
    description:
      ["The Audio Translator, not to be confused with a language translator, is a device that captures distant sounds, turning them into electrical signals. This breakthrough marked a new era in communication."],
    impact: [
      "Audio translators transformed distant whispers into global conversations. They shaped modern communication, uniting people worldwide. Explore the power of innovation and connection in our shared history.",

      "While the telephone, invented in the late 19th century, revolutionized direct communication between individuals, it was limited by the need for physical connection via wires or cables. It facilitated one-on-one conversations over long distances but didn't address the challenge of capturing and transmitting distant sounds or voices for broader audiences. The audio translator enabled the conversion of sound waves into electrical signals, allowing the transmission of these signals over vast distances without degradation. This technology facilitated the broadcast of sounds—music, speeches, news—to a wide audience, overcoming the limitations of direct communication offered by the telephone. It enabled shared experiences and cultural exchange on a mass scale, reaching millions of households globally.",
    ],
    directions: {
      title: "How it Works",
      steps: [
        {
          id: 1,
          step: "Press the button to turn it on and wait a moment for it to warm up.",
        },
        {
          id: 2,
          step: "When you see the green line on the screen, talk into the holes on the front of the case.",
        },
        {
          id: 3,
          step: "Watch how the green line on the screen reacts to the sound of your voice. It is converting sound into an electrical signal.",
        },
      ],
    },
    how: "An audio translator works by capturing sound waves through a sensitive microphone or diaphragm. These sound waves are then converted into electrical signals. This transformation allows the signals to be amplified, transmitted, and reproduced as sound at a receiving end. Essentially, it converts audible information into electrical impulses for efficient transmission across distances, ensuring that the original sounds remain intact when they reach their destination. ",
  };

    const dataSpanish = artifactSpanish.filter(x => x.title === "El Traductor de Audi").pop()

    const [lang, setLang] = useContext(Context);
    const [display, setDisplay] = useContext(ContextImage)
    
    const displayingImage = display.includes("showImageOne") ? display : display.includes("showImageTwo") ? display : "hideImage"
    const displayingImages = display.includes("showImageOne") ? image1 : display.includes("showImageTwo") ? image2 : null
  
    const dataArtifact = lang === "default" ? artifact : lang === "english" ? artifact : dataSpanish
    const dataTitle = lang === "default" ? artifact.title: lang === "english" ? artifact.title : dataSpanish.title

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
        <MenuStation3 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>
      <div className="sectionhead">
        <div className="sectiontitle sectionleft">
          <h1 className="artifactTitle">{dataTitle}</h1>
        </div>
      </div>
      <Slides artifact={dataArtifact} artifactImg1={image1} artifactImg2={image2}/>
    </div>
  );
};

export default Audio;
