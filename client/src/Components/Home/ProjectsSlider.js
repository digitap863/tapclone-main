import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Slider.css";
import poster3 from "../../assets/poster3.jpeg";
import poster4 from "../../assets/poster4.jpeg";
import poster1 from "../../assets/poster1.jpeg";
import poster2 from "../../assets/poster2.jpeg";
import button from "../../assets/svg/right arrow.svg";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";


function ProjectSlider() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  // let settings = {
  //   dots: false,
  //   // autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: false,
  //   infinite: true,

  //   // dotsClass: "slick-dots custom-dots",
  //   speed: 2500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  // const array = [
  //   { image1: poster1, image2: poster1 },
  //   { image1: poster2, image2: poster2 },
  //   { image1: poster3, image2: poster3 },
  //   { image1: poster4, image2: poster4 },
  // ];
  const imgArr1 = [
    { image1: poster2, text: "Fruistick" },
    { image1: poster1, text: "Bloomsberry" },
  ];
  const imgArr2 = [
    { image1: poster3, text: "Fruistick" },
    { image1: poster4, text: "Fruistick" },
  ];

  // function change2() {
  //   const img1 = document.querySelector('.Fposter1')
  //   const img2 = document.querySelector('.Fposter2')
  //   const posterContainer=document.querySelector('FposterContainer')

  //   gsap.timeline().to(img2,{translateX:'-11%',duration:0.5})
  //   .to(img1,{rotateY:180,translateX:'-11%',filter:'blur(3px)',duration:1},0)

  //   // .to(img1,{filter: "blur(3px)",duration:0.2})
  //   // .to(img2,{filter:'blur(3px)',duration:0.2})

  //   const timeout = setTimeout(() => {
  //     const isLastSlide = currentIndex2 === array.length - 1
  //     isLastSlide ? setCurrentIndex2(0,changeBack2()) : setCurrentIndex2(currentIndex2 + 1,changeBack2())

  //     clearTimeout(timeout)
  //   },1000)

  //   function changeBack2(){
  //     gsap.timeline().to(img2,{translateX:0,duration:0.5})
  //     // .to(img1,{filter:'blur(0px)',duration:0.2})
  //     // .to(img2,{filter:'blur(0px)',duration:0.2},0.5)
  //     .to(img1,{rotateY:0,translateX:0,filter:'blur(0px)',duration:1},0)
  //   }
  // }
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

              {isHovered && (
                <div className="overlay-text">
                  <h3>{text}</h3>
                </div>
              )}
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

              {isHovered2 && (
                <div className="overlay-text">
                  <h3>{text}</h3>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectSlider;
