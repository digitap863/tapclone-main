import React from "react";

const SwipeButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: window.scrollY + 400,
      behavior: "smooth",
    });
  };
  return (
    <button className="swipe-btn" onClick={handleClick}>
      SWIPE DOWN
    </button>
  );
};

export default SwipeButton;
