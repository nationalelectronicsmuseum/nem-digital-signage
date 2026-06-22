import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/Section.css";
import { getSlideComponent } from "./SlideRegistry";
import MenuButton from "./MenuButton.jsx";
import AccessibilityButton from "./AccessibilityButton.jsx";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import GrantLogo from "/images/millerGrant.png?url";
import loop from "/audio/loop.wav?url";

export default function SectionRenderer({ station, section }) {
  const content = useContent();
  let title = resolvePath(content, "common.sectionTitle." + section.id);

  return (
    <div className="section">
      <header className="section-header">
        <div className="controls">
          <MenuButton station={station} section={section} />
          <img className="section-grant-logo" src={GrantLogo}></img>
          <AccessibilityButton />
        </div>
        <h1 className="section-title">{title}</h1>
      </header>
      <main className="swiper-wrapper">
        <audio autoPlay loop src={loop} type="audio/wav"></audio>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
        >
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
