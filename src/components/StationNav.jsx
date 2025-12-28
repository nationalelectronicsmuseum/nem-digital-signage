import { Link } from "react-router-dom";
import { useEffect } from "react";
import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/StationNav.css";

export default function StationNav({ station }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);
  let swiper = null;

  const resetSwiper = () => {
    if (swiper) swiper.slideTo(0);
  };

  useEffect(() => {
    swiper = document.querySelector(".swiper").swiper;
  });

  return (
    <nav>
      <Link to={"/" + station.id}>Home</Link>
      {station.sections.map((sec) => {
        let title = resolvePath(content, "common.sectionCardTitle." + sec.id);
        return (
          <Link
            key={sec.id}
            to={"/" + station.id + "/" + sec.id}
            onClick={resetSwiper}
          >
            {title}
          </Link>
        );
      })}
      <Link to={"/"}>
        <div className="transparent">Index</div>
      </Link>
    </nav>
  );
}
