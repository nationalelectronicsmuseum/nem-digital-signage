import { useState } from "react";
import { createPortal } from "react-dom";
import "../styles/SlideImage.css";

const ImageOverlay = ({ onClose, image }) => {
  return createPortal(
    <div className="image-overlay-background" onClick={onClose}>
      <button className="image-overlay-close"></button>
      <div className="image-overlay" onClick={(e) => e.stopPropagation()}>
        {image && (
          <div className="image-overlay-content">
            <img className="image-overlay-content-image" src={image}></img>
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
      <img
        className="slideImage"
        src={props.img}
        onClick={() => setOpen(true)}
      ></img>
      <i className="slideImageCaption">{props.caption}</i>
      {open && (
        <ImageOverlay image={props.img} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}
