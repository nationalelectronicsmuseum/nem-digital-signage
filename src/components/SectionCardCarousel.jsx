import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SectionCardCarousel.css";
import { loadContent } from "../utils/loadContent";
import { useSettings } from "../context/SettingsContext.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import defaultImage from "/images/section.jpg?url";

export default function SectionCardCarousel({ station }) {
  const { settings } = useSettings();
  const languageCode = settings.language.languageCode;
  const content = loadContent(languageCode);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    function update() {
      const perRow = getCardsPerRow();
      setRows(chunkBalanced(station.sections, perRow));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [station.sections]);

  return (
    <div className="carousel-container">
      <div className="carousel-grid">
        {rows.map((row, rowIndex) => (
          <div className="carousel-row" key={rowIndex}>
            {row.map((section) => {
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
                      alt={title ? title : "Sample Title"}
                      loading="lazy"
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
        ))}
      </div>
    </div>
  );
}

function getCardsPerRow() {
  const containerWidth = window.innerWidth;
  const cardWidth = 400 + 16;
  return Math.max(1, Math.floor(containerWidth / cardWidth));
}

function chunkBalanced(items, perRow) {
  const rows = [];
  let i = 0;

  while (i < items.length) {
    const remaining = items.length - i;
    if (remaining === 1 && rows.length > 0) {
      const last = rows[rows.length - 1];
      const movedCard = last.pop();
      rows.push([movedCard, items[i]]);
      i += 1;
    } else {
      rows.push(items.slice(i, i + perRow));
      i += perRow;
    }
  }
  return rows;
}
