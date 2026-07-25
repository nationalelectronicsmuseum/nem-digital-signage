import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/StationNav.css";

export default function StationNav({ station }) {
  const content = useContent();
  const swiperRef = useRef(null);

  const resetSwiper = () => {
    if (swiperRef.current) swiperRef.current.slideTo(0);
  };

  useEffect(() => {
    swiperRef.current = document.querySelector(".swiper")?.swiper;
  });

  return (
    <nav>
      <Link to={"/" + station.id}>
        {resolvePath(content, "common.label.home") || "Home"}
      </Link>
      {station.sections
        .filter((sec) => sec.slides?.length > 0)
        .map((sec) => {
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
        <div className="transparent">
          {resolvePath(content, "common.label.index") || "Index"}
        </div>
      </Link>
    </nav>
  );
}
