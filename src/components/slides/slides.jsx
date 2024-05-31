import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slides.css";
import Speech from "../speech/speech";
import FontSize from "../fonts/fontSize";

const Slides = ({ artifact, artifactImg }) => {
  const synth = window.speechSynthesis;
  const speakStop = () => {
    console.log("Speech has stopped");
    synth.cancel();
  };

  const directionsText = artifact.directions.steps.map((x) => x.step).join(" ");

  return (
    <div>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        modules={[Pagination]}
        className="mySwiper"
        onSlideChange={speakStop}
      >
        <SwiperSlide>
          <div className="fg">
          <h6 className="swipe-mention">
                  <i className="fa-solid fa-angles-left"></i>Swipe
                  <i className="fa-solid fa-angles-right"></i>
          </h6>
            <div className="bg">
              <div className="left description">
                

                <FontSize text={artifact.description} />

                {/* <p>{artifact.description}</p> */}

                <ul>
                  {artifact.info.map((el) => {
                    return (
                      <li key={el.id} className="info">
                        {el.text}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="right">
                <img src={artifactImg}></img>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg">
            <div className="left">
              <h3>The Impact</h3> 
              <FontSize text={artifact.impact} />
              
              {/* <p className="description">{artifact.impact}</p> */}
            </div>
            <div className="right"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg">
            <div className="left">
              <Speech text={directionsText} />
              <h3>{artifact.directions.title}</h3>
              <ol className="swipe-directions">
                {artifact.directions.steps.map((el) => {
                  return (
                    <li key={el.id} className="swipe-directions">
                      {el.step}
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="right"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg">
            <div className="left">
              <h3>What's Going On</h3>
              <FontSize text={artifact.how} />
              {/* <p className="description">{artifact.how}</p> */}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
