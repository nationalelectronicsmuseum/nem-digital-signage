import React, { useContext } from "react";
import Slides from "../components/slides/slides.jsx";
import MenuStation1 from "../components/menu/menuStation1.jsx";
import Accessibility from "../components/accessibility/accessibility.jsx";
import { Context } from "../assets/accessibilityContext.js";
import voltCurrImage from "../assets/img/voltcurr.png";
import { artifact } from "../assets/database/artifact.js";
import ohmslawGif from "../assets/img/ohmslaw.gif";

import loop from "../assets/sound/loop.wav"

export default function voltAndCurr() {
  const [lang, setLang] = useContext(Context);

  // const testartifact = {
  //   title: "Voltage and Current",
  //   info: [{ id: 1, text: "" }],
  //   description: [
  //     "Voltage is sort of like electrical pressure. A current is a flow of electric charge. It is best to think of it like this: voltage CAUSES electric current, just like water pressure causes water to flow.",

  //     "Voltage is the invisible energy that urges electricity to move from one place to another. Voltage and Current work hand in hand. Voltage provides the push, while Current keeps the electricity flowing. Together, they create the energy that powers our gadgets and lights up our world.",
  //   ],
  //   impact:
  //     "Understanding Voltage and Current helps engineers and scientists design safer and more efficient electrical systems. From the tiniest circuits to the grandest power grids, these concepts are crucial for creating technology that works reliably and safely.",
  //   directions: {
  //     title: "How it Works",
  //     steps: [
  //       { id: 1, step: "Turn knob clockwise and watch the meters." },
  //       {
  //         id: 2,
  //         step: "Flip the switch and turn on light bulb while watching meters.",
  //       },
  //       { id: 3, step: "Rotate the knob to change voltage." },
  //     ],
  //   },
  //   how: "By flipping the switch, you close the circuit and allow the current to flow in the circuit`s path. Without the force of the voltage and the path of a circuit, current will not flow. Voltage pushes current, forcing it to flow through a closed circuit and light the bulb.",
  // };
  // const artifactSpanish = {
  //   title: "Voltaje y Corriente",
  //   info: [{ id: 1, text: "" }],
  //   description: [
  //     "El voltaje es algo así como la presión eléctrica. Una corriente es un flujo de carga eléctrica. Es mejor pensarlo de esta manera: el voltaje CAUSA corriente eléctrica, al igual que la presión del agua hace que el agua fluya.",

  //     "El voltaje es la energía invisible que impulsa a la electricidad a moverse de un lugar a otro. El voltaje y la corriente trabajan de la mano. El voltaje proporciona el impulso, mientras que la corriente mantiene el flujo de electricidad. Juntos, crean la energía que alimenta nuestros dispositivos e ilumina nuestro mundo."
  //   ],
  //   impact:
  //     "Comprender el voltaje y la corriente ayuda a los ingenieros y científicos a diseñar sistemas eléctricos más seguros y eficientes. Desde los circuitos más pequeños hasta las redes eléctricas más grandes, estos conceptos son cruciales para crear tecnología que funcione de manera confiable y segura.",
  //   directions: {
  //     title: "Cómo Funciona",
  //     steps: [
  //       { id: 1, step: "Gire la perilla en el sentido de las agujas del reloj y observe los medidores." },
  //       {
  //         id: 2,
  //         step: "Activa el interruptor y enciende la bombilla mientras observas los medidores.",
  //       },
  //       { id: 3, step: "Gire la perilla para cambiar el voltaje." },
  //     ],
  //   },
  //   how: "Gire la perilla para cambiar. Al girar el interruptor, se cierra el circuito y se permite que la corriente fluya por el camino del circuito. Sin la fuerza del voltaje y el camino de un circuito, la corriente no fluirá. El voltaje empuja la corriente, lo que la obliga a fluir a través de un circuito cerrado y encender la bombilla.",
  // }
  const data = artifact.filter(x => x.title === "Voltage and Current").pop()
  const dataSpanish = artifact.filter(x => x.title === "Voltaje y Corriente").pop()

  return (
    <div>
  
      <div className="btnNav">
        <MenuStation1 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>
      <div className="sectionhead">
      <audio autoPlay loop src={loop} type="audio/wav"></audio>
        <div className="sectiontitle">
          <h1 className="artifactTitle">Voltage and Current</h1>
        </div>
      </div>
      <Slides artifact={lang === "default" ? data: lang === "english" ? data : dataSpanish} artifactImg1={ohmslawGif} artifactImg2={voltCurrImage} />
    </div>
  );
}