import { useImageOverlay } from "../OverlayImage/OverlayImageContext.jsx";
import { getLocalizedStringConstant } from "../../assets/Localization.js";

import "./SlideImage.css"

function SlideImage(props) {
    const caption = getLocalizedStringConstant("Image Caption");
    const { openOverlay } = useImageOverlay();
    return (
        <div className="slideImageContainer">
            <img className="slideImage" src={props.img} onClick={() => openOverlay(props.img)}></img>
            <i className="slideImageCaption">{caption}</i>
        </div>
    );
}

export default SlideImage;
