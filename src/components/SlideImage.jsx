import { useState } from "react";
import { createPortal } from "react-dom";
import { useContent } from "../context/ContentProvider.jsx";
import { resolvePath } from "../utils/resolvePath.js";
import "../styles/SlideImage.css";

const ImageOverlay = ({ onClose, image, alt, labels }) => {
  return createPortal(
    <div className="image-overlay-background" onClick={onClose}>
      <button
        type="button"
        className="image-overlay-close"
        onClick={onClose}
        aria-label={labels.close}
      ></button>
      <div
        className="image-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={labels.enlarged}
        onClick={(e) => e.stopPropagation()}
      >
        {image && (
          <div className="image-overlay-content">
            <img
              className="image-overlay-content-image"
              src={image}
              alt={alt || ""}
            />
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-image-root")
  );
};

export default function SlideImage(props) {
  const [open, setOpen] = useState(false);
  const content = useContent();
  const t = (key, fallback) =>
    resolvePath(content, "common.label." + key) || fallback;
  return (
    <div className="slideImageContainer">
      <button
        type="button"
        className="slideImageButton"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        onClick={() => setOpen(true)}
        aria-label={t("enlargeImage", "Enlarge image")}
      >
        <img
          className="slideImage"
          src={props.img}
          alt={props.alt || ""}
          loading="lazy"
          decoding="async"
        />
      </button>
      <i className="slideImageCaption">{props.caption}</i>
      {open && (
        <ImageOverlay
          image={props.img}
          alt={props.alt}
          labels={{
            close: t("closeImage", "Close image"),
            enlarged: t("enlargedImage", "Enlarged image"),
          }}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}
