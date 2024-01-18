import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import previewProject from "../../assets/previewProject.png";
import project_1 from "../../assets/home/project_1.png"
import project_2 from "../../assets/home/project_2.png"
import project_3 from "../../assets/home/project_3.png"
import project_4 from "../../assets/home/project_4.png"
import project_5 from "../../assets/home/project_5.png"
import project_6 from "../../assets/home/project_6.png"
import project_7 from "../../assets/home/project_7.png"
import violetPrev from "../../assets/violetPrev.svg";
import yellowNext from "../../assets/yellowNext.svg";
import "./Slider.css";

function ProjectSlider2() {
  const imgArr = [
    { image: project_1 },
    { image: project_2 },
    { image: project_3 },
    { image: project_4 },
    { image: project_5 },
    { image: project_6 },
    { image: project_7 },
 
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
            <img src={image} className="mx-auto" />
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
