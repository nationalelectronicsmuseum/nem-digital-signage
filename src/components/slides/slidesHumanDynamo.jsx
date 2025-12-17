import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useSpeechSynthesis } from "../speech/useSpeechSynthesis";
import { useSettings } from "../../components/AccessibilitySettings/AccessibilitySettings.jsx";
import SlideImage from "../slideImage/SlideImage.jsx";
import Video from "../Video/Video.jsx";
import { getLocalizedStringConstant } from "../../assets/Localization.js";

import humanDynamoVideo from "../../assets/video/humanDynamo.mp4";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slides.css";
import Speech from "../speech/speech";

const SlidesHumanDynamo = ({
  artifact,
  artifactImg1,
  artifactImg2,
  artifactImg3,
  artifactImg4,
}) => {
  const { settings, setSettings } = useSettings();
  const { voices, status, toggle, stop } = useSpeechSynthesis();

  const theImpactHeaderText = getLocalizedStringConstant("The Impact:");
  const whatToWatchHeaderText = getLocalizedStringConstant("What to Watch:");
  const whatsGoingOnHeaderText = getLocalizedStringConstant("What's Going On:");
  const directionsText = artifact.directions
    ? artifact.directions.steps.map((x) => x.step).join(" ")
    : "";

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
                <p style={{ fontSize: `${settings.fontSize}` }}>
                  {artifact.description}
                </p>
              </div>

              <div className="right">
                {artifactImg1 ? <SlideImage img={artifactImg1} /> : ""}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg">
            <div className="left">
              <span>
                <h3>{theImpactHeaderText}</h3> <Speech text={artifact.impact} />
              </span>
              <p
                className="description"
                style={{ fontSize: `${settings.fontSize}` }}
              >
                {artifact.impact}
              </p>
            </div>
            <div className="right">
              {artifactImg2 ? <SlideImage img={artifactImg2} /> : ""}
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        {artifact.try ? (
          <SwiperSlide>
            <div className="bg">
              {!artifact.try.description ? (
                <div className="left">
                  <span>
                    <h3>{artifact.try.title}</h3>{" "}
                    <Speech text={directionsText} />
                  </span>

                  <ol
                    className="swipe-directions"
                    style={{ paddingLeft: `${settings.listPadding}` }}
                  >
                    {artifact.try.steps.map((el) => {
                      return (
                        <li
                          key={el.id}
                          className="swipe-directions"
                          style={{ fontSize: `${settings.fontSize}` }}
                        >
                          {el.text}
                        </li>
                      );
                    })}
                  </ol>
                  {artifact.watch ? (
                    <span>
                      <h4 className="watchHeader">{whatToWatchHeaderText}</h4>{" "}
                      <Speech text={artifact.watch} />
                    </span>
                  ) : (
                    ""
                  )}

                  <p
                    className="watchPara"
                    style={{ fontSize: `${settings.fontSize}` }}
                  >
                    {artifact.watch}
                  </p>
                </div>
              ) : (
                <div className="left">
                  <span>
                    <h3>{artifact.directions.title}</h3>{" "}
                    <Speech text={directionsText} />
                  </span>
                  {artifact.watch ? (
                    <span>
                      <h4 className="watchHeader">{whatToWatchHeaderText}</h4>{" "}
                      <Speech text={artifact.watch} />
                    </span>
                  ) : (
                    ""
                  )}

                  <p
                    className="watchPara"
                    style={{ fontSize: `${settings.fontSize}` }}
                  >
                    {artifact.directions.description}
                  </p>
                </div>
              )}

              <div style={{justifyContent: "center", display: "grid", height: "100%"}} className="right">
                <Video src={humanDynamoVideo} width={400} height={711} />
              </div>
            </div>
          </SwiperSlide>
        ) : (
          ""
        )}
        <SwiperSlide>
            <div className="bg">
              <div className="left">
                <span>
                  <h3>{whatsGoingOnHeaderText}</h3>{" "}
                  <Speech text={artifact.how} />
                </span>
                <p
                  style={{ fontSize: `${settings.fontSize}` }}
                >
                  {artifact.how}
                </p>
              </div>

              <div className="right">
                {artifactImg4 ? <SlideImage img={artifactImg4} /> : ""}
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SlidesHumanDynamo;
