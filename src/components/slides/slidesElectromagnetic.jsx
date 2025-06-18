import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slides.css";
import Speech from "../speech/speech";
import { useSettings } from "../../components/AccessibilitySettings/AccessibilitySettings.jsx";
import { useSpeechSynthesis } from '../speech/useSpeechSynthesis.jsx';
import { useImageOverlay } from "../OverlayImage/OverlayImageContext.jsx";

const Slides = ({ artifact, artifactImg1, artifactImg2, artifactImg3, artifactImg4 }) => {
  const { settings, setSettings } = useSettings();
  const { voices, speechStatus, toggle, stop: stopSpeech } = useSpeechSynthesis();
  const { openOverlay } = useImageOverlay();

  return (
    <div className="swiperMain">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={stopSpeech}
      >
        <SwiperSlide >
          <div className="fg">
            <div className="bg">
              <p className="emFB">{artifact.description}</p>
            </div>
          </div>
        </SwiperSlide>

         {artifact.categories.waves.map((el) => {
          return(
          <SwiperSlide key={el.id}>
          <div className="fg">
            <div className="bg">
              <div className="left description">
                <h4 className="emTitle" >{el.title}</h4>
                <Speech text={el.description} />
                <p style={{ fontSize: `${settings.fontSize}` }}>{el.description}</p>
              </div>

              <div className="right">
                <img style={{ 
                  maxWidth: "600px", 
                  maxHeight: "700px", 
                  position: "absolute", 
                  top: "40%", 
                  left: "75%", 
                  transform: "translate(-50%) translateY(-50%)" }} 
                  src={artifactImg1} onClick={ () => openOverlay(artifactImg1)}></img>
              </div>
            </div>
          </div>
        </SwiperSlide>
        )})}
        <SwiperSlide >
          <div className="fg">
            <div className="bg">
              <p className="emFB" >{artifact.ending}</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slides;
