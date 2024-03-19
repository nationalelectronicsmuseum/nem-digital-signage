import React from "react";

function Slides() {
  const swipeArea = document.querySelector("main");
  const swipeWidth = window.innerWidth / 2;
  const swipeWidthMax = 320;

  if (swipeWidth > swipeWidthMax) {
    swipeWidth = swipeWidthMax;
  }

  let swipeStartX = null;
  let swipeEndX = null;
  let swipeLengthX = null;

  let swipeStartY = null;
  let swipeEndY = null;
  let swipeLengthY = null;

  swipeArea.addEventListener("touchstart", swipeStart, false);
  swipeArea.addEventListener("touchend", swipeEnd, false);

  const swipeStart = (evt) => {
    swipeStartX = evt.changedTouches[0].clientX;
    swipeStartY = evt.changedTouches[0].clientY;
  };

  const swipeEnd = (evt) => {
    swipeEndX = evt.changedTouches[0].clientX;
    swipeEndY = evt.changedTouches[0].clientY;

    swipeLengthX = swipeStartX - swipeEndX;
    swipeLengthY = swipeStartY - swipeEndY;

    if (Math.abs(swipeLengthX) > Math.abs(swipeLengthY)) {
      if (swipeLengthX > swipeWidth) {
        /* left swipe */
      } else if (swipeLengthX < -swipeWidth) {
        /* right swipe */
      }
    }
  };

  return (
    <>
      <div className="main">
        </div>;
    </>
  );
}

export default Slides;
