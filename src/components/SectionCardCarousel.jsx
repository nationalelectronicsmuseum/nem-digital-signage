import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SectionCardCarousel.css";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import defaultImage from "/images/section.webp?url";

export default function SectionCardCarousel({ station }) {
  const content = useContent();
  const [rows, setRows] = useState([]);

  // Balance cards into centered rows. A pure CSS grid can't do this: it can't
  // move a lone trailing card up to avoid an isolated row (4,1 -> 3,2), and a
  // partial last row stays left-aligned instead of centered.
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

// Split items into rows of `perRow`, but never leave a final row with a single
// card when there is a previous row to borrow from: pull one card down so the
// last two rows split evenly (e.g. 4,1 becomes 3,2).
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
