import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "./slides.css";


import artifactImg from "../../assets/img/marconi.svg";


const Slides = ({artifact, artifactImg}) => {
  return (
    <div>
      <Swiper className="mySwiper">

        <SwiperSlide>
            <div className="bg">
                <div className="left">
                    {artifact.description}
                </div>
                <div className="right">
                    <img src={artifactImg}></img>
                </div>
            </div>
        </SwiperSlide>
            
        <SwiperSlide>
        <div className="bg">
                <div className="left">
                    <h3>The Impact</h3>
                    {artifact.impact}
                </div>
                <div className="right">
                    <img src={artifactImg}></img>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
            <div className="bg">
                <div className="left">
                    <h3>How does it work?</h3>
                    {artifact.directions}
                </div>
                <div className="right">
                    <img src={artifactImg}></img>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
