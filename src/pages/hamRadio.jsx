import { useState } from 'react'
import Menu from '../components/menu/menu'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import { artifact } from '../assets/database/artifact'
import AudioSnip from '../components/audioClip/audioSnip'

import ham1 from "../assets/img/ham01.png"
import ham2 from "../assets/img/ham2.png"
import ham3 from "../assets/img/ham3.png"
// import ham4 from "../assets/img/ham4.png"
// import ham5 from "../assets/img/ham5.png"
import ham6 from "../assets/img/ham6.jpg"
import ham7 from "../assets/img/ham7.png"


function HAMRadio() {
  const [one, setOne] = useState("hide")
  const [two, setTwo] = useState("hide")
  const [three, setThree] = useState("hide")
  const [four, setFour] = useState("hide")
  const [five, setFive] = useState("hide")


  const data = artifact.filter(x => x.title === "HAM Radio")[0]

  
  const synth = window.speechSynthesis;

  const toggleOne = () => {
    if (one === "hide") {
      setOne("showImageOne")
    } else {
      setOne("hide")
      synth.cancel()
    }
  }
  const toggleTwo = () => {
    if (two === "hide") {
      setTwo("showImageTwo")
    } else {
      setTwo("hide")
      synth.cancel()
    }
  }
  const toggleThree = () => {
    if (three === "hide") {
      setThree("showImageThree")
    } else {
      setThree("hide")
      synth.cancel()
    }
  }
  const toggleFour = () => {
    if (four === "hide") {
      setFour("showImageFour")
    } else {
      setFour("hide")
      synth.cancel()
    }
  }
  const toggleFive = () => {
    if (five === "hide") {
      setFive("showImageFive")
    } else {
      setFive("hide")
      synth.cancel()
    }
  }

  return (
    <div>

      <div className="btnNav">
        <Menu />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className={one}>
        <div className="hamBox">
          <div className="infoLeft">
            <AudioSnip text={data.info[0].description}/>
            <p>{data.info[0].description}</p>
            <div className="audioSnipBox">
              <AudioSnip text={"Image: A desk with computers, mouse, keyboard, HAM radio, and a map."} />
              <h5>Image: A desk with computers, mouse, keyboard, HAM radio, and a map.</h5>
            </div>
          </div>
          <div className="infoRight">
            <img src={ham1} className="hamImg"></img>
          </div>
        </div>
        <div className="backgroundImage" onClick={toggleOne}></div>
      </div>

      <div className={two}>
      <div className="hamBox">
          <div className="infoLeft">
            <AudioSnip text={data.info[1].description}/>
            <p>{data.info[1].description}</p>
            
            <div className="audioSnipBox">
              <AudioSnip text={"Image: A child operating the HAM radio."} />
              <h5>Image: A child operating the HAM radio.</h5>
            </div>

          </div>
          <div className="infoRight">
          <img src={ham2} className="hamImg"></img>
          </div>
        </div>
        <div className="backgroundImage" onClick={toggleTwo}></div>
      </div>

      <div className={three}>
      <div className="hamBox">
          <div className="infoLeft">
          <AudioSnip text={data.info[2].description}/>
            <p>{data.info[2].description}</p>
            <div className="audioSnipBox">
              <AudioSnip text={"Image: Showing an example of the End Fed."} />
              <h5>Image: Showing an example of the End Fed.</h5>
            </div>
          </div>
          <div className="infoRight">
          <img src={ham3} className="hamImg"></img>
          </div>
        </div>
        <div className="backgroundImage" onClick={toggleThree}></div>
      </div>

      <div className={four}>
      <div className="hamBox">
          <div className="infoLeft">
            <AudioSnip text={data.info[3].description}/>
            <p>{data.info[3].description}</p>
            
            <div className="audioSnipBox">
              <AudioSnip text={"Image: ARRL Field Day, an annual emergency preparedness event."} /> 
              <h5>Image: ARRL Field Day, an annual emergency preparedness event.</h5>
            </div>
          </div>
          <div className="infoRight">
          <img src={ham7} className="hamImg"></img>
          </div>
        </div>
        <div className="backgroundImage" onClick={toggleFour}></div>
      </div>

      <div className={five}>
      <div className="backgroundImage" onClick={toggleFive}></div>
      <div className="hamBox">
          <div className="infoLeft">
            <AudioSnip text={data.info[4].description}/>
            <p>{data.info[4].description}</p>
            
            <div className="audioSnipBox">
            <AudioSnip text={"Scan QR Code to join FB group or explore the website."} /> 
              <h5>Scan QR Code to join FB group or explore the website.</h5>
            </div>
          </div>
          <div className="infoRight">
          <img src={ham6} className="hamImg"></img>
          </div>
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">HAM Radio Club</h1>
        </div>
      </div>
      <Loop />

      <div className="hamTitles">
        <button className="hamBtn" onClick={toggleOne}><h2>{data.info[0].name}</h2></button>
        <button className="hamBtn" onClick={toggleTwo}><h2>{data.info[1].name}</h2></button>
        <button className="hamBtn" onClick={toggleThree}><h2 >{data.info[2].name}</h2></button>
        <button className="hamBtn" onClick={toggleFour}><h2 >{data.info[3].name}</h2></button>
        <button className="hamBtn" onClick={toggleFive}><h2 >{data.info[4].name}</h2></button>
      </div>
    </div>
  )
}

export default HAMRadio