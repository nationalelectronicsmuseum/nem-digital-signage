import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import "../styles/Section.css";
import { getSlideComponent } from "./SlideRegistry";
import MenuButton from "./MenuButton.jsx";
import AccessibilityButton from "./AccessibilityButton.jsx";

export default function SectionRenderer({ station, section }) {
  return (
    <div className="section">
      <header className="section-header">
        <div className="controls">
          <MenuButton station={station} section={section} />
          <AccessibilityButton />
        </div>
        <h1 className="section-title">{section.title}</h1>
      </header>
      <main className="swiper-wrapper">
        <Swiper navigation={true} modules={[Navigation]}>
          {section.slides.map((slide, i) => {
            const Slide = getSlideComponent(slide.type);
            return (
              <SwiperSlide key={i}>
                <Slide {...slide} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </main>
    </div>
  );
}
