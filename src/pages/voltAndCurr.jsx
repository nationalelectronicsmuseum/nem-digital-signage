import React from 'react'
import Slides from "../components/slides/slides.jsx";
import MenuStation1 from '../components/menu/menuStation1.jsx';

export default function voltAndCurr() {
  const artifact = {
    title: "Voltage and Current",
    info: [
      {id: 1, text: ""}
    ],
    description: ["Voltage is sort of like electrical pressure. A current is a flow of electric charge. It is best to think of it like this: voltage CAUSES electric current, just like water pressure causes water to flow. ",
    
    "Voltage is the invisible energy that urges electricity to move from one place to another. Voltage and Current work hand in hand. Voltage provides the push, while Current keeps the electricity flowing. Together, they create the energy that powers our gadgets and lights up our world."],
    impact: "Understanding Voltage and Current helps engineers and scientists design safer and more efficient electrical systems. From the tiniest circuits to the grandest power grids, these concepts are crucial for creating technology that works reliably and safely.",
    directions: {
      title: "How it Works",
      steps: [
        {id: 1, step: "Turn knob clockwise and watch the meters"}, 
        {id: 2, step: "Flip the switch and turn on light bulb while watching meters"},
        {id: 3, step: "Rotate the knob to change voltage"}
      ]
    },
    how: "By flipping the switch, you close the circuit and allow the current to flow in the circuit`s path. Without the force of the voltage and the path of a circuit, current will not flow. Voltage pushes current, forcing it to flow through a closed circuit and light the bulb."
  }
  return (
    <>
      <MenuStation1 />
      <h1 className="artifactTitle">Voltage and Current</h1>

      <Slides artifact={artifact}/>
    </>
  )
}
