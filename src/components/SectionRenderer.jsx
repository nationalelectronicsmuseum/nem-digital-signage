import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/Section.css";
import { getSlideComponent } from "./SlideRegistry";
import MenuButton from "./MenuButton.jsx";
import AccessibilityButton from "./AccessibilityButton.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import GrantLogo from "/images/millerGrant.webp?url";
import loop from "/audio/loop.webm?url";

export default function SectionRenderer({ station, section }) {
  const content = useContent();
  let title = resolvePath(content, "common.sectionTitle." + section.id);
  const hasSlides = section.slides?.length > 0;

  return (
    <div className="section">
      <header className="section-header">
        <div className="controls">
          <MenuButton station={station} section={section} />
          <img
            className="section-grant-logo"
            src={GrantLogo}
            alt={resolvePath(content, "common.label.grantLogo") || "Miller Grant logo"}
          />
          <AccessibilityButton />
        </div>
        <h1 className="section-title">{title}</h1>
      </header>
      <main className="swiper-wrapper">
        <audio autoPlay loop src={loop} type="audio/webm"></audio>
        {hasSlides ? (
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
                  <ErrorBoundary>
                    <Slide {...slide} />
                  </ErrorBoundary>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <div className="section-empty">
            {resolvePath(content, "common.label.sectionComingSoon") ||
              "Content coming soon."}
          </div>
        )}
      </main>
    </div>
  );
}
