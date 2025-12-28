import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../styles/Section.css";
import { getSlideComponent } from "./SlideRegistry";
import MenuButton from "./MenuButton.jsx";
import AccessibilityButton from "./AccessibilityButton.jsx";
import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import GrantLogo from "/images/millerGrant.png?url";

export default function SectionRenderer({ station, section }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);
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
