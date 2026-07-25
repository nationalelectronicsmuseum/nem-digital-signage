import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SectionCardCarousel.css";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import defaultImage from "/images/section.jpg?url";

export default function SectionCardCarousel({ station }) {
  const content = useContent();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    // Sections with no slides are dead-ends (they render a blank slideshow),
    // so don't surface them as cards.
    const sections = station.sections.filter((s) => s.slides?.length > 0);
    function update() {
      const perRow = getCardsPerRow();
      setRows(chunkBalanced(sections, perRow));
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
                      alt={title || ""}
                      className="card-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="card-title stationPages">{title || ""}</div>
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
      // If that row held only one card (e.g. perRow === 1), it's now empty —
      // drop it so we don't render a blank row.
      if (last.length === 0) rows.pop();
      rows.push([movedCard, items[i]]);
      i += 1;
    } else {
      rows.push(items.slice(i, i + perRow));
      i += perRow;
    }
  }
  return rows;
}
