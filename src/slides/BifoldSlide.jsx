import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Slides.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function BifoldSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  const leftContent = slide.left;
  const rightContent = slide.right;

  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide>
        {slide ? <div className="split-container">
          <div className="pane">
            <div className="content">
              {slide.left ? <SlideContent data={rightContent} /> : "Left property not found for artifact " + slideID}
            </div>
          </div>
          <div className="pane">
            <div className="content">
              {slide.right ? <SlideContent data={leftContent} /> : "Right property not found for artifact " + slideID}
            </div>
          </div>
        </div> : "Slide ID " + slideID + " not found."}
      </SwiperSlide>
    </Swiper>
  );
}
