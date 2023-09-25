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
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const array = [{ image1: poster1, image2: poster1 }, { image1: poster2, image2: poster2 }, { image1: poster3, image2: poster3 }, { image1: poster4, image2: poster4 }]

  // function change1() {
  //   const img1 = document.querySelector('.poster1')
  //   const img2 = document.querySelector('.poster2')
  //   const posterContainer=document.querySelector('.posterContainer')

  //   gsap.timeline().to(img1,{translateX:'11%',duration:0.5})
  //   .to(img2,{rotateY:-180,translateX:'11%',filter:'blur(3px)',duration:1},0)

  //   // .to(img1,{filter: "blur(3px)",duration:0.2})
  //   // .to(img2,{filter:'blur(3px)',duration:0.2})

  //   const timeout = setTimeout(() => {
  //     const isLastSlide = currentIndex === array.length - 1
  //     isLastSlide ? setCurrentIndex(0,changeBack1()) : setCurrentIndex(currentIndex + 1,changeBack1())

  //     clearTimeout(timeout)
  //   },1000)

  //   function changeBack1(){
  //     gsap.timeline().to(img1,{translateX:0,duration:0.5})
  //     // .to(img1,{filter:'blur(0px)',duration:0.2})
  //     // .to(img2,{filter:'blur(0px)',duration:0.2},0.5)
  //     .to(img2,{rotateY:0,translateX:0,filter:'blur(0px)',duration:1},0)
  //   }
  // }

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
