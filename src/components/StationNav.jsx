import { Link } from "react-router-dom";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/StationNav.css";

// Navigating to the section already being shown doesn't remount the Swiper,
// so rewind it to the first slide. Looked up at click time — no effect needed.
const resetSwiper = () => {
  document.querySelector(".swiper")?.swiper?.slideTo(0);
};

export default function StationNav({ station }) {
  const content = useContent();

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
      {/* Invisible staff-only shortcut back to the station index. Hidden from
          assistive tech and the tab order so visitors never land on it. */}
      <Link to={"/"} aria-hidden="true" tabIndex={-1}>
        <div className="transparent">Index</div>
      </Link>
    </nav>
  );
}
