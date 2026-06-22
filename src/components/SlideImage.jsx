import { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/SlideImage.css";

const ImageOverlay = ({ onClose, image }) => {
  return createPortal(
    <div className="image-overlay-background" onClick={onClose}>
      <button
        type="button"
        className="image-overlay-close"
        onClick={onClose}
        aria-label="Close image"
      ></button>
      <div
        className="image-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged image"
        onClick={(e) => e.stopPropagation()}
      >
        {image && (
          <div className="image-overlay-content">
            <img className="image-overlay-content-image" src={image} alt="" />
          </div>
        )}
      </div>
    </div>,
    document.getElementById("modal-image-root")
  );
};

export default function SlideImage(props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="slideImageContainer">
      <button
        type="button"
        className="slideImageButton"
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        onClick={() => setOpen(true)}
        aria-label="Enlarge image"
      >
        <img className="slideImage" src={props.img} alt={props.caption || ""} />
      </button>
      <i className="slideImageCaption">{props.caption}</i>
      {open && (
        <ImageOverlay image={props.img} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
