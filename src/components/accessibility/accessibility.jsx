import React, {useState} from 'react'
import FontSize from '../fonts/fontSize'
import "./accessibility.css"
import Speech from '../speech/speech'

function Accessibility({text}) {
    const [state, setState] = useState("hide")
    const [selected, setSelected] = useState("qdbp notselected")

    const showMenu = () => {
        console.log("im clicked")
        if(state === "hide"){
            setState("show")
            setSelected("qdbp selected")
        } else {
            setState("hide")
            setSelected("qdbp notselected")
        }
    }

  return (
    <div>
        <button onClick={showMenu} className={selected}>Accessibility</button>
        
        <div className={state}>
            <div className="qp">
                <Speech text={text.description} title={text.title}/>
                <Speech text={text.impact} title={"The Impact"}/>
                <Speech text={text.how} title={"What's Going On"}/>
            </div>
            
        </div>
    </div>
  )
}

export default Accessibility