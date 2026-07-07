import { Link } from "react-router-dom";
import "../styles/SectionCardCarousel.css";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import defaultImage from "/images/section.webp?url";

export default function SectionCardCarousel({ station }) {
  const content = useContent();

  return (
    <div className="carousel-container">
      <div className="carousel-grid">
        {station.sections.map((section) => {
          let title = resolvePath(
            content,
            "common.sectionCardTitle." + section.id
          );
          return (
            <Link
              key={section.id}
              to={"/" + station.id + "/" + section.id}
              relative="path"
              className="card"
            >
              <div className="card-image-wrapper">
                <img
                  src={section.image ? section.image : defaultImage}
                  alt=""
                  className="card-image"
                />
              </div>

              <div className="card-title stationPages">
                {title ? title : "Sample Title"}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
