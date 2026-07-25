import "../styles/FAQSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function FAQSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];
  if (!slide) {
    return (
      <div className="slide-wrapper">{"Slide ID " + slideID + " not found."}</div>
    );
  }

  return (
    <div className="slide-wrapper">
      <div className="faq-slide-split-container">
        <div className="faq-slide-pane">
          <div className="faq-slide-content">
            {slide.left ? (
              <SlideContent data={slide.left} />
            ) : (
              "Left property not found for artifact " + slideID
            )}
          </div>
        </div>
        <div className="faq-slide-pane">
          <div className="faq-slide-content">
            {slide.right ? <SlideContent data={slide.right} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
