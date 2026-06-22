import "../styles/MonoSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function MonoSlide({ slideID }) {
  const content = DataRegistry.slides[slideID];

  return (
    <div className="slide-wrapper">
      {content ? (
        <div className="mono-slide-container">
          <div className="mono-slide-pane">
            <div className="mono-slide-content">
              {content ? (
                <SlideContent data={content} />
              ) : (
                "Content not found for slide " + slideID
              )}
            </div>
          </div>
        </div>
      ) : (
        "Slide ID " + slideID + " not found."
      )}
    </div>
  );
}
