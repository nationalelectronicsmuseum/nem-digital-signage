import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import audio1 from "../../assets/sound/01C.wav"
import audio2 from "../../assets/sound/02C.wav"
import audio3 from "../../assets/sound/03C.wav"

import audioImg1 from "../../assets/img/audioPic1.jpg"
import audioImg2 from "../../assets/img/audioPic2.jfif"
import audioImg3 from "../../assets/img/audioPic3.jpg"

import "./slides.css";

const SlidesAudio = ({}) => {
    return(
        <div>
            <Swiper
                pagination ={{
                    type: "progressbar"
                }}
                navigation = {true}
                modules = {[Pagination, Navigation]}
                className = "mySwiper">

                    <SwiperSlide>
                        <div className="audioSlides">
                            <div className="placeholder">
                            <img src={audioImg1}></img>
                            </div>
                            <div className="audioRight">
                                <h3>Bunker Hill</h3>
                                <span><h5><i>Performed by</i> <b>Harlan and Stanley</b>, Ca. 1905</h5></span>
                                
                                <p>Recorded on Edison black wax cylinder #8966</p>
                                <audio controls src={audio1}></audio>
                            </div>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="audioSlides">
                            <div className="placeholder">
                            <img src={audioImg2}></img>
                            </div>
                            <div className="audioRight">
                                <h3>Over There</h3>
                                <span><h5><i>Performed by</i> <b>Enrico Caruso</b>, 1918</h5></span>
                                <p>Recorded on Victor Talking Machine disk.</p>
                                <audio controls src={audio2}></audio>
                            </div>
                            
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                    <div className="audioSlides">
                            <div className="audioLeft">
                                <img style={{left: "-20"}}src={audioImg3}></img>
                            </div>
                            <div className="audioRight">
                                <h3>Johnny B. Goode</h3>
                                <span><h5><i>Performed by</i> <b>The Grateful Dead</b>, June 10, 1973</h5></span>
                                <p>Recorded on Sony TC 2850SD portable cassette recorder on Memorex cassettes.</p>
                                <audio controls src={audio3}></audio>
                            </div>
                            
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SlidesAudio