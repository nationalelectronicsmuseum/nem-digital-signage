import { useEffect } from "react";
import "../styles/SponsorSlide.css";
import SlideContent from "../components/SlideContent";
import DataRegistry from "../data";

export default function SponsorSlide({ slideID }) {
  const slide = DataRegistry.slides[slideID];

  // This slide shows a plain grey page instead of the site-wide collage.
  // The collage is painted on <body>, above the section, so we toggle a body
  // class while the slide is mounted rather than styling the container.
  useEffect(() => {
    document.body.classList.add("sponsor-slide-active");
    return () => document.body.classList.remove("sponsor-slide-active");
  }, []);

  return (
    <div className="slide-wrapper">
      {slide ? (
        <div className="sponsor-slide-container">
          {slide.left?.length > 0 && (
            <div className="sponsor-slide-image-pane">
              <SlideContent data={slide.left} className="sponsor-slide-image" />
            </div>
          )}
          <div className="sponsor-slide-center-pane">
            {slide.center ? (
              <SlideContent
                data={slide.center}
                className="sponsor-slide-content"
              />
            ) : (
              "Center property not found for slide " + slideID
            )}
          </div>
          {slide.right?.length > 0 && (
            <div className="sponsor-slide-image-pane">
              <SlideContent
                data={slide.right}
                className="sponsor-slide-image"
              />
            </div>
          )}
        </div>
      ) : (
        "Slide ID " + slideID + " not found."
      )}
    </div>
  );
}
