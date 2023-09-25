import React from "react";
import circle from "../../assets/Asset-2_300x-1X.png";

const HeroCircle = () => {
  return (
    <>
      <div className="circle ">
        <div className="circleBorder  ">
          <div className="circleBorderCircle "></div>
        </div>
        <img className="mainCircle  " src={circle} alt="" />
      </div>
    </>
  );
};

export default HeroCircle;
