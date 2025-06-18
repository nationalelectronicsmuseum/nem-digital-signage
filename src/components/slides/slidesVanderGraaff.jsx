import { useContext } from "react";
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

const SlidesVanderGraaff = ({ artifact, artifactImg1, artifactImg2, artifactImg3, artifactImg4 }) => {
  const { settings, setSettings } = useSettings();
  const { voices, speechStatus, toggle, stop: stopSpeech } = useSpeechSynthesis();
  const { openOverlay } = useImageOverlay();

  const speechHow = artifact.howGraaff.info.join(" ") + " " + artifact.howGraaff.list.map((x) => x.item + " " + x.description).join(" ")
  const speechTry = artifact.try.title + " " + artifact.try.steps.map((x) => x.name + " " + x.text).join(" ")

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
                      <li key={el.id} className="info" style={{ fontSize: `${settings.fontSize}`, fontStyle: "italic", fontWeight: "300" }}>
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
                  src={artifactImg1}
                  onClick={() => openOverlay(artifactImg1)}></img>
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
              <img style={{ maxWidth: "600px", maxHeight: "700px", position: "absolute", top: "40%", left: "75%", transform: "translate(-50%) translateY(-50%)" }} src={artifactImg2} onClick={() => openOverlay(artifactImg2)}></img>
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg">
            <div className="left">

              <span><h3>{artifact.howGraaff.title}</h3> <Speech text={speechHow} /></span>
              <span style={{fontSize: `${settings.fontSize}`}}>{artifact.howGraaff.info[0]}</span>
              <span style={{fontSize: `${settings.fontSize}`}}>{artifact.howGraaff.info[1]}</span>

              <ol className="swipe-directions" style={{ paddingLeft: `${settings.listPadding}` }}>
                {artifact.howGraaff.list.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="swipe-directions"
                      style={{ fontSize: `${settings.fontSize}` }}>
                     <span style={{fontWeight : "bold"}}>{el.item}</span> <br style={{display: "none"}}/>{el.description}
                    </li>
                  );
                })}
              </ol>
            </div>

            <div className="right">
              <img style={{ maxWidth: "600px", maxHeight: "700px", position: "absolute", top: "40%", left: "75%", transform: "translate(-50%) translateY(-50%)" }} src={artifactImg3} onClick={() => openOverlay(artifactImg3)}></img>
            </div>
          </div>
          
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg">
            <div className="left">

              <span><h3>{artifact.try.title}</h3> <Speech text={speechTry} /></span>

              <ol className="swipe-directions" style={{ paddingLeft: `${settings.listPadding}` }}>
                {artifact.try.steps.map((el) => {
                  return (
                    <li
                      key={el.id}
                      className="swipe-directions"
                      style={{ fontSize: `${settings.fontSize}` }}>
                     <span style={{ fontWeight: "bold"}}>{el.name}</span> <br style={{ display: "none"}}/> {el.text}
                    </li>
                  );
                })}
              </ol>
              {artifact.watch ? <span><h4 className="watchHeader">What to watch:</h4> <Speech text={artifact.watch}/></span> : ""}
              
              <p className="watchPara" style={{ fontSize: `${settings.fontSize}` }}>{artifact.watch}</p>
            </div>

            <div className="right">
            <img style={{ maxWidth: "600px", maxHeight: "700px", position: "absolute", top: "40%", left: "75%", transform: "translate(-50%) translateY(-50%)" }} src={artifactImg4} onClick={() => openOverlay(artifactImg4)}></img>
            </div>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlidesVanderGraaff;
