import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.css";
import previewProject from "../../assets/previewProject.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import yellowNext from "../../assets/yellowNext.svg";
import violetPrev from "../../assets/violetPrev.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ProjectSlider2() {
  const imgArr = [
    { image: previewProject },
    { image: previewProject },
    { image: previewProject },
  ];

  return (
    <div className="projectsPrevSlider ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={3000}
        slidesPerView={1}
        spaceBetween={8}
      >
        {imgArr.map(({ image }, idx) => (
          <SwiperSlide className="projectsPrevCarousel ">
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img
        className="swiper-button-prev"
        src={violetPrev}
        alt="Previous Button"
      />
      <img
        className="swiper-button-next"
        src={yellowNext}
        alt="Previous Button"
      />
      <div>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
}

export default ProjectSlider2;
