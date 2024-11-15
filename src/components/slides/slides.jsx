import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slides.css";
import Speech from "../speech/speech";
import { Context, ContextFontSize, ContextListPadding } from "../../assets/accessibilityContext";

const Slides = ({ artifact, artifactImg1, artifactImg2 }) => {
  const [fontS, setFontS] = useContext(ContextFontSize);
  const [listPadding, setListPadding] = useContext(ContextListPadding);

  const descriptionText = artifact.description.join(" ");
  const directionsText = artifact.directions.steps.map((x) => x.step).join(" ");


  const synth = window.speechSynthesis;

  const speakStop = () => {
    console.log("Speech has stopped");
    synth.cancel();
  };

  return (
    <div className="swiperMain">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={speakStop}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="fg">
            {/* <h6 className="swipe-mention">
              <i className="fa-solid fa-angles-left"></i>Swipe
              <i className="fa-solid fa-angles-right"></i>
            </h6> */}
            <div className="bg">
              <div className="left description">
                <Speech text={descriptionText} />

                <p style={{ fontSize: `${fontS}` }}>{artifact.description}</p>

                <ul>
                  {artifact.info.map((el) => {
                    return (
                      <li key={el.id} className="info" style={{ fontSize: `${fontS}`, fontStyle: "italic", fontWeight: "300" }}>
                        {el.text}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="right">
                <img style={{ 
                  maxWidth: "600px", 
                  maxHeight: "700px", 
                  position: "absolute", 
                  top: "40%", 
                  left: "75%", 
                  transform: "translate(-50%) translateY(-50%)" }} 
                  src={artifactImg1}></img>
              </div>
            </div>
          </div>
          <span style={{ color: "#a70e20" }}>
            <i className="fa-solid fa-angles-right"></i>
          </span>
        </SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
          <span style={{ color: "#a70e20" }}>
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <div className="bg">
            <div className="left">
              <span>
                <h3>The Impact</h3> <Speech text={artifact.impact} />
              </span>
              {/* <FontSize text={artifact.impact} /> */}

              <p className="description" style={{ fontSize: `${fontS}` }}>
                {artifact.impact}
              </p>
            </div>
            <div className="right">
              <img style={{ maxWidth: "600px", maxHeight: "700px", position: "absolute", top: "40%", left: "75%", transform: "translate(-50%) translateY(-50%)" }} src={artifactImg2}></img>
            </div>
          </div>
          <span style={{ color: "#a70e20" }}>
            <i className="fa-solid fa-angles-right"></i>
          </span>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <span style={{ color: "#a70e20" }}>
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <div className="bg">
            <div className="left">

              <span><h3>{artifact.directions.title}</h3> <Speech text={directionsText} /></span>

              <ol className="swipe-directions" style={{ paddingLeft: `${listPadding}` }}>
                {artifact.directions.steps.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="swipe-directions"
                      style={{ fontSize: `${fontS}` }}>
                      {el.step}
                    </li>
                  );
                })}
              </ol>
              <h4 className="watchHeader">What to watch:</h4>
              <p className="watchPara">{artifact.watch}</p>
            </div>

            <div className="right">
              <span>
                <h3>What's Going On</h3> <Speech text={artifact.how} />
              </span>
              <p className="description" style={{ fontSize: `${fontS}` }}>
                {artifact.how}
              </p>
            </div>
          </div>
          <span style={{ color: "#a70e20" }}>
            <i className="fa-solid fa-angles-right"></i>
          </span>
        </SwiperSlide>

        {/* <SwiperSlide>
          <span style={{ color: "#a70e20" }}>
            <i className="fa-solid fa-angles-left"></i>
          </span>
          <div className="bg">
            <div className="left">
              <h3>What's Going On</h3>
              <p className="description" style={{fontSize:`${fontS}`}}>{artifact.how}</p>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slides;
