import React, { useState } from "react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { imgArr1, imgArr2 } from "../../assets/posters";
import "./Slider.css";


function ProjectSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);




  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter = (swiper) => {
    setIsHovered(true);
  };
  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter2 = (swiper) => {
    setIsHovered2(true);
  };

  return (
    <div className="projectsSlider ">
      <div className="projSlider1 ">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop={true}
          speed={2000}
          // spaceBetween={50}
          slidesPerView={1}
          className="overlay-container"
        >
          {imgArr1.map(({ image1, text }, idx) => (
            <SwiperSlide
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={image1} />

              {/* {isHovered && (
                <div className="overlay-text">
                  <h3>{text}</h3>
                </div>
              )} */}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <img src={poster4}/> */}
      </div>
      <div className="projSlider2 ">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          loop={true}
          speed={2000}
          // spaceBetween={50}
          slidesPerView={1}
          // spaceBetween={50}
        >
          {imgArr2.map(({ image1, text }, idx) => (
            <SwiperSlide
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <img src={image1} />

              {/* {isHovered2 && (
                <div className="overlay-text">
                  <h3>{text}</h3>
                </div>
              )} */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSlider;
