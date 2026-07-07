import "../styles/BifoldSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function BifoldSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  if (!slide) {
    return (
      <div className="slide-wrapper">{"Slide ID " + slideID + " not found."}</div>
    );
  }

  return (
    <div className="slide-wrapper">
      <div className="bifold-slide-split-container">
        <div className="bifold-slide-pane">
          <div className="bifold-slide-content">
            {slide.left ? (
              <SlideContent data={slide.left} />
            ) : (
              "Left property not found for artifact " + slideID
            )}
          </div>
        </div>
        <div className="bifold-slide-pane">
          {slide.right ? (
            <SlideContent data={slide.right} className="bifold-slide-content" />
          ) : (
            "Right property not found for artifact " + slideID
          )}
        </div>
      </div>
    </div>
  );
}
