import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "swiper/css";
import "./slides.css";
import Speech from "../speech/speech";
import FontSize from "../fonts/fontSize";

const Slides = ({ artifact, artifactImg }) => {
  return (
    <div>
        
      <Swiper className="mySwiper">
      
        <SwiperSlide>
          <div className="bg">
            
            <div className="left description">
            <h6 className="swipe-mention">
              <i className="fa-solid fa-angles-left"></i>Swipe
              <i className="fa-solid fa-angles-right"></i>
            </h6>
            <Speech text={artifact.description}/>
              <p>{artifact.description}</p>
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
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg">
            <div className="left">
            <Speech text={artifact.impact}/>
              <h3>The Impact</h3>
              <p className="description">{artifact.impact}</p>
            </div>

            <div className="right"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg">
            <div className="left">
            <Speech text={artifact.directions}/>
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

            <div className="right">
              <h3>What's Going On</h3>
              <Speech text={artifact.how}/>
              <p className="description">{artifact.how}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
