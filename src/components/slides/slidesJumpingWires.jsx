import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useSpeechSynthesis } from '../speech/useSpeechSynthesis';
import { useSettings } from "../../components/AccessibilitySettings/AccessibilitySettings.jsx";
import SlideImage from "../slideImage/SlideImage.jsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slides.css";
import Speech from "../speech/speech";

const SlidesJumpingWires = ({ artifact, artifactImg1, artifactImg2, artifactImg3, artifactImg4 }) => {
  const { settings, setSettings } = useSettings();
  const { voices, status, toggle, stop } = useSpeechSynthesis();

  const directionsText = artifact.directions ?  artifact.directions.steps.map((x) => x.step).join(" ") : "";

  return (
    <div className="swiperMain">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSlideChange={stop}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="fg">
            <div className="bg">
            
              <div className="left description">
                <Speech text={artifact.description} />
                <p style={{ fontSize: `${settings.fontSize}` }}>{artifact.description}</p>
                <ul>
                  {artifact.info.map((el) => {
                    return (
                      <li key={el.id} className="info">
                        <span style={{ fontSize: `${settings.fontSize}`, fontStyle: "italic", fontWeight: "600" }}>{el.title}</span>
                        <span style={{ fontSize: `${settings.fontSize}`, fontStyle: "italic", fontWeight: "300" }}>{el.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="right">
                <SlideImage img={artifactImg1} />
              </div>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg">
            <div className="left">
              <span>
                <h3>The Impact</h3> <Speech text={artifact.impact} />
              </span>
              <p className="description" style={{ fontSize: `${settings.fontSize}` }}>
                {artifact.impact}
              </p>
            </div>
            <div className="right">
              <SlideImage img={artifactImg2} />
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 3 */}
        {artifact.directions ?
        <SwiperSlide>
          <div className="bg">
            {!artifact.directions.description ?
            <div className="left">
              <span><h3>{artifact.directions.title}</h3> <Speech text={directionsText} /></span>

              <ol className="swipe-directions" style={{ paddingLeft: `${settings.listPadding}` }}>
                {artifact.directions.steps.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="swipe-directions"
                      style={{ fontSize: `${settings.fontSize}` }}>
                      {el.step}
                    </li>
                  );
                })}
              </ol>
              {artifact.watch ? <span><h4 className="watchHeader">What to watch:</h4> <Speech text={artifact.watch}/></span> : ""}
              
              <p className="watchPara" style={{ fontSize: `${settings.fontSize}` }}>{artifact.watch}</p>

            <span>
                <h3>What's Going On</h3> <Speech text={artifact.how} />
              </span>
              <p style={{ fontSize: `${settings.fontSize}`, marginTop: "0px" }}>
                {artifact.how}
              </p>

            </div> : 
            <div className="left">
            <span><h3>{artifact.directions.title}</h3> <Speech text={directionsText} /></span>
            {artifact.watch ? <span><h4 className="watchHeader">What to watch:</h4> <Speech text={artifact.watch}/></span> : ""}
            
            <p className="watchPara" style={{ fontSize: `${settings.fontSize}` }}>{artifact.directions.description}</p>
          </div>}

            <div className="right">
              <SlideImage img={artifactImg1} />
            </div>
          </div>
          
        </SwiperSlide>
        : ""}
      </Swiper>
    </div>
  );
};

export default SlidesJumpingWires;
