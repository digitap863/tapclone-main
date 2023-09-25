import React, { useEffect, useState } from "react";

const PreLoader = () => {
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 40; i++) {
      let leftDir = Math.floor(Math.random() * 100);
      let topDir = Math.floor(Math.random() * 100);
      let starSize =
        Math.random() > 0.2 ? Math.random() * 1 + 0.5 : Math.random() * 1 + 1.2;
      let animationDuration = Math.floor(Math.random() * (7 - 3 + 1) + 3);
      let animationDir = Math.random() > 0.5 ? "alternate" : "reverse";
      const newStar = {
        size: starSize,
        left: leftDir + "%",
        top: topDir + "%",
        animationDir,
        animationDuration: animationDuration + "s",
      };
      newStars.push(newStar);
    }
    setStars(newStars);
  }, []);

  return (
    <>
      <div className="preloader-container">
        <div class="atom">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
      </div>
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            "--size": `${star.size}vmin`,
            left: star.left,
            top: star.top,
            animation: `sparkle ${Math.floor(
              Math.random() * (60 - 1 + 1) + 1
            )}s linear forwards`,
          }}
          onAnimationEnd={() => {
            console.log("iam getting called");
            setStars((prevStars) => prevStars.filter((_, i) => i !== index));
          }}
        />
      ))}
      {stars.map((star, index) => (
        <div
          key={index}
          className="star-nav"
          style={{
            "--size": `${star.size}vmin`,
            opacity: "0.5",
            left: star.left,
            top: star.top,
            animation: `GFG ${star.animationDuration} infinite linear ${star.animationDir}`,
          }}
        />
      ))}
    </>
  );
};

export default PreLoader;
