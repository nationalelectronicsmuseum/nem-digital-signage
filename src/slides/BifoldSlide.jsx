import "../styles/BifoldSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function BifoldSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  const leftContent = slide.left;
  const rightContent = slide.right;

  return (
    <div className="slide-wrapper">
      {slide ? (
        <div className="bifold-slide-split-container">
          <div className="bifold-slide-pane">
            <div className="bifold-slide-content">
              {slide.left ? (
                <SlideContent data={leftContent} />
              ) : (
                "Left property not found for artifact " + slideID
              )}
            </div>
          </div>
          <div className="bifold-slide-pane">
            <div className="bifold-slide-content">
              {slide.right ? (
                <SlideContent data={rightContent} />
              ) : (
                "Right property not found for artifact " + slideID
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
