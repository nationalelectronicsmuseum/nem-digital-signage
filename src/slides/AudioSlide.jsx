import "../styles/AudioSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function AudioSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  if (!slide) {
    return (
      <div className="slide-wrapper">{"Slide ID " + slideID + " not found."}</div>
    );
  }

  return (
    <div className="slide-wrapper">
      <div className="audio-slide-split-container">
        <div className="audio-slide-pane audio-slide-left">
          <div className="audio-slide-content">
            {slide.left ? (
              <SlideContent data={slide.left} className="audio-slide-content" />
            ) : (
              "Left property not found for artifact " + slideID
            )}
          </div>
        </div>
        <div className="audio-slide-pane audio-slide-right">
          <div className="audio-slide-content">
            {slide.right ? <SlideContent data={slide.right} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
