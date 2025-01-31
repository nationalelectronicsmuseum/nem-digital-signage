import React, { useState } from 'react'
import MenuStation6 from '../components/menu/menuStation6'
import Accessibility from '../components/accessibility/accessibility'
import Loop from '../components/loop'
import Slides from '../components/slides/slides'
import { artifact } from '../assets/database/artifact'

import ham1 from "../assets/img/ham01.png"
import ham2 from "../assets/img/ham2.png"
import ham3 from "../assets/img/ham3.png"
import ham4 from "../assets/img/ham4.png"
import ham5 from "../assets/img/ham5.png"


function HAMRadio() {
  const [one, setOne] = useState("hide")
  const [two, setTwo] = useState("hide")
  const [three, setThree] = useState("hide")
  const [four, setFour] = useState("hide")
  const [five, setFive] = useState("hide")
  const [reveal, setReveal] = useState("hide")


  const data = artifact.filter(x => x.title === "HAM Radio")[0]

  const revealing = () => {
    if (reveal === "hide") {
      setReveal("showImageOne")
    } else {
      setReveal("hide")
    }
  }
  const hideBlock = () => {
    setReveal("hide")
  }

  const toggleOne = () => {
    if (one === "hide") {
      setOne("showImageOne")
      console.log("toggled")
    } else {
      setOne("hide")
    }
  }
  const toggleTwo = () => {
    if (two === "hide") {
      setTwo("showImageTwo")
      console.log("toggled")
    } else {
      setTwo("hide")
    }
  }
  const toggleThree = () => {
    if (three === "hide") {
      setThree("showImageThree")
      console.log("toggled")
    } else {
      setThree("hide")
    }
  }
  const toggleFour = () => {
    if (four === "hide") {
      setFour("showImageFour")
      console.log("toggled")
    } else {
      setFour("hide")
    }
  }
  const toggleFive = () => {
    if (five === "hide") {
      setFive("showImageFive")
      console.log("toggled")
    } else {
      setFive("hide")
    }
  }

  return (
    <div>

      <div className="btnNav">
        <MenuStation6 />
        <div className="accs">
          <Accessibility text={artifact} />
        </div>
      </div>

      <div className={one}>
        <div className="hamBox">
          <div className="infoLeft">
            <p>{data.info[0].description}</p>
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
            <p>{data.info[1].description}</p>
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
            <p>{data.info[2].description}</p>
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
            <p>{data.info[3].description}</p>
          </div>
          <div className="infoRight">
          <img src={ham4} className="hamImg"></img>
          </div>
        </div>
        <div className="backgroundImage" onClick={toggleFour}></div>
      </div>

      <div className={five}>
      <div className="backgroundImage" onClick={toggleFive}></div>
      <div className="hamBox">
          <div className="infoLeft">
            <p>{data.info[4].description}</p>
            <p>{data.info[4].contact.email}</p>
            <p>{data.info[4].contact.web}</p>
          </div>
          <div className="infoRight">
          <img src={ham5} className="hamImg"></img>
          </div>
        </div>
      </div>

      <div className="sectionhead">
        <div className="sectiontitle">
          <h1 className="artifactTitle">HAM Radio Club</h1>
        </div>
      </div>
      <Loop />

      <div>
        <h2 onClick={toggleOne}>{data.info[0].name}</h2>
        <h2 onClick={toggleTwo}>{data.info[1].name}</h2>
        <h2 onClick={toggleThree}>{data.info[2].name}</h2>
        <h2 onClick={toggleFour}>{data.info[3].name}</h2>
        <h2 onClick={toggleFive}>{data.info[4].name}</h2>
      </div>



    </div>
  )
}

export default HAMRadio