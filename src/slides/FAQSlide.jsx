import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/FAQSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function FAQSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  const leftContent = slide.left;
  const rightContent = slide.right;

  return (
    <SwiperSlide>
      {slide ? (
        <div className="faq-slide-split-container">
          <div className="faq-slide-pane">
            <div className="faq-slide-content">
              {slide.left ? (
                <SlideContent data={leftContent} />
              ) : (
                "Left property not found for artifact " + slideID
              )}
            </div>
          </div>
          <div className="faq-slide-pane">
            <div className="faq-slide-content">
              {slide.right ? <SlideContent data={rightContent} /> : ""}
            </div>
          </div>
        </div>
      ) : (
        "Slide ID " + slideID + " not found."
      )}
    </SwiperSlide>
  );
}
