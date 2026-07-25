import "../styles/CenteredMonoSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function CenteredMonoSlide({ slideID }) {
  const content = DataRegistry.slides[slideID];

  return (
    <div className="slide-wrapper">
      {content ? (
        <div className="centered-mono-slide-container">
          <div className="centered-mono-slide-pane">
            {content ? (
              <SlideContent
                className="centered-mono-slide-content"
                data={content}
              />
            ) : (
              "Content not found for slide " + slideID
            )}
          </div>
        </div>
      ) : (
        "Slide ID " + slideID + " not found."
      )}
    </div>
  );
}
