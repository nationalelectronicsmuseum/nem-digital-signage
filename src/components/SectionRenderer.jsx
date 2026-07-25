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
import loop from "/audio/loop.flac?url";

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
        {/* Silent keep-alive: a 10 Hz sine, below the ~20 Hz hearing threshold,
            that holds the speaker amp out of standby so speech synthesis isn't
            clipped at the start. It MUST stay losslessly encoded — Opus/MP3 and
            friends high-pass their input and cannot represent 10 Hz, so they
            reconstruct it as an audible ~10 Hz thump ("distant helicopter").
            Re-encode with:
              ffmpeg -f lavfi -i "aevalsrc=0.675*sin(2*PI*10*t):s=8000:d=30" \
                     -c:a flac -compression_level 12 -sample_fmt s16 loop.flac */}
        <audio autoPlay loop src={loop} type="audio/flac"></audio>
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
