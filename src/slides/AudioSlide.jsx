import "../styles/AudioSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function AudioSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  const leftContent = slide.left;
  const rightContent = slide.right;

  return (
    <div className="slide-wrapper">
      {slide ? (
        <div className="audio-slide-split-container">
          <div className="audio-slide-pane audio-slide-left">
            <div className="audio-slide-content">
              {slide.left ? (
                <SlideContent data={leftContent} className="audio-slide-content" />
              ) : (
                "Left property not found for artifact " + slideID
              )}
            </div>
          </div>
          <div className="audio-slide-pane audio-slide-right">
            <div className="audio-slide-content">
              {slide.right ? <SlideContent data={rightContent} /> : ""}
            </div>
          </div>
        </div>
      ) : (
        "Slide ID " + slideID + " not found."
      )}
    </div>
  );
}
