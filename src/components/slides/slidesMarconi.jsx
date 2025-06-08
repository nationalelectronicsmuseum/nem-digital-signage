import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slides.css";
import Speech from "../speech/speech";
import { ContextFontSize, ContextListPadding, ContextImage } from "../../assets/accessibilityContext";

const SlidesMarconi = ({ artifact, artifactImg1, artifactImg2, artifactImg3, artifactImg4 }) => {
  const [fontS, setFontS] = useContext(ContextFontSize);
  const [listPadding, setListPadding] = useContext(ContextListPadding);
    const [display, setDisplay] = useContext(ContextImage)

  const descriptionText = artifact.description.map((x) => x.step).join(" ");
  const directionsText = artifact.directions.steps.map((x) => x.step).join(" ");

  console.log(descriptionText)

  const synth = window.speechSynthesis;

  const speakStop = () => {
    console.log("Speech has stopped");
    synth.cancel();
  };

  const displayImageOne = () => {
    if(display === "hideImage"){
      setDisplay("showImageOne")
      console.log("image shown", display)
    } else {
      setDisplay("hideImage")
      console.log("image hidden", display)
    }
  }
  const displayImageTwo = () => {
    if(display === "hideImage"){
      setDisplay("showImageTwo")
      console.log("image shown", display)
    } else {
      setDisplay("hideImage")
      console.log("image hidden", display)
    }
  }
  const displayImageThree = () => {
    if(display === "hideImage"){
      setDisplay("showImageThree")
      console.log("image shown", display)
    } else {
      setDisplay("hideImage")
      console.log("image hidden", display)
    }
  }
  const displayImageFour = () => {
    if(display === "hideImage"){
      setDisplay("showImageFour")
      console.log("image shown", display)
    } else {
      setDisplay("hideImage")
      console.log("image hidden", display)
    }
  }

  return (
    <div className="swiperMain">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
                <Speech text={artifact.description} />
                

                <p style={{ fontSize: `${fontS}` }}>{artifact.description}</p>

                <ul>
                  {artifact.info.map((el) => {
                    return (
                      <li key={el.id} className="info" style={{ fontSize: `${fontS}`, fontStyle: "italic", fontWeight: "300" }}>
                        <span style={{fontWeight: "600"}}>{el.title}:</span> {el.text}
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
                  onClick={displayImageOne}></img>
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
              {/* <FontSize text={artifact.impact} /> */}

              <p className="description" style={{ fontSize: `${fontS}` }}>
                {artifact.impact}
              </p>
            </div>
            <div className="right">
              
              <h3>{artifact.timeline.title}</h3>
              {artifact.timeline.dates.map((el)=> {
                return(
                  <p key={el.id}>
                    <span style={{fontWeight: "600"}}>{el.date}</span>{el.text}
                    </p>
                )
              })}
            </div>
          </div>
        </SwiperSlide>


        {/* Slide 3 */}
        <SwiperSlide>
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
              {artifact.watch ? <span><h4 className="watchHeader">What to watch:</h4> <Speech text={artifact.watch}/></span> : ""}
              
              <p className="watchPara" style={{ fontSize: `${fontS}` }}>{artifact.watch}</p>
            </div>

            <div className="right">
            <div className="right">
                <img style={{ maxWidth: "600px", maxHeight: "700px", position: "absolute", top: "40%", left: "75%", transform: "translate(-50%) translateY(-50%)" }} src={artifactImg2} onClick={displayImageTwo}></img>
            </div>
            </div>
          </div>
          
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="bg">
            <div className="left">

            <span>
                <h3>What's Going On</h3> <Speech text={artifact.how} />
              </span>
              <p className="description" style={{ fontSize: `${fontS}` }}>
                {artifact.how}
              </p>
            </div>

            <div className="right">
                <img style={{ maxWidth: "600px", maxHeight: "700px", position: "absolute", top: "40%", left: "75%", transform: "translate(-50%) translateY(-50%)" }} src={artifactImg3} onClick={displayImageThree}></img>
            </div>
          </div>
          
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlidesMarconi;
