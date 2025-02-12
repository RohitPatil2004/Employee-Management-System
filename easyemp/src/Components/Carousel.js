import React, { useEffect, useRef, useState } from "react";
import "./Styles/Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef({});

  const updateIndex = (newIndex) => {
    if (newIndex >= React.Children.count(children) || newIndex < 0) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + 1);
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const OnTouchStart = (e) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
    console.log("TOUCH >>> START");
  };

  const OnTouchMove = (e) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swipping = true;
    }
    console.log("TOUCH >>> MOVE");
  };

  const OnTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
    const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
    const absX = Math.abs(touch.clientX - swipe.current.x);
    if (swipe.current.swipping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - 1);
      } else if (swipedRight) {
        updateIndex(activeIndex + 1);
      }
    }

    swipe.current = {};
    console.log("TOUCH >>> END");
  };

  return (
    <div
      className="carousel"
      onTouchStart={OnTouchStart}
      onTouchMove={OnTouchMove}
      onTouchEnd={OnTouchEnd}
    >
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};


export default Carousel;
