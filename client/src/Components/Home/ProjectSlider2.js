import React, { useState } from "react";
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
import project_8 from "../../assets/home/project_8.png"
import violetPrev from "../../assets/violetPrev.svg";
import yellowNext from "../../assets/yellowNext.svg";
import "./Slider.css";
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { FaLongArrowAltLeft } from "react-icons/fa";

function ProjectSlider2() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [selected,setSelected] = useState(null)
  function siteModal(link){
    setSelected(link)
    onOpen()
    console.log(swiperInstance)
    if (swiperInstance && swiperInstance.autoplay) {
      swiperInstance.autoplay.stop();
    }
    console.log('ih')
  }
  const imgArr = [
    { image: project_1 ,link:"https://www.continentaloverseaseducation.com/" },
    { image: project_2 ,link:"https://wbc-project.vercel.app/"},
    { image: project_3 ,link:"https://www.metrends.in/"},
    { image: project_4 ,link:"https://wbc-project.vercel.app/"},
    { image: project_5 ,link:"https://wbc-project.vercel.app/"},
    { image: project_6 ,link:"https://corepowergroup.com"},
    { image: project_7 ,link:"https://wbc-project.vercel.app/"},
    { image: project_8 ,link:"https://estatebuilders.in/"},
 
  ];

  return (
    <div className="projectsPrevSlider ">
      <Modal radius="lg" isOpen={isOpen} onOpenChange={onOpenChange}  size="full" className=" w-[1400px]" placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader> */}
              <ModalBody className="scrollbar-hide bg-black relative">
                <Button className="absolute bg-black hover:!bg-gray-900 text-white top-10 right-10 animate-bounce flex items-center gap-4" size="lg" color="danger" variant="light" onPress={onClose}>
                <FaLongArrowAltLeft /> Go Back
                </Button>

              <iframe src={selected} className="h-screen  bg-white" frameborder="0"></iframe>
              </ModalBody>
            
            </>
          )}
        </ModalContent>
      </Modal>
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
          disableOnInteraction: true,
        }}
        loop={true}
        speed={3000}
        slidesPerView={1}
        spaceBetween={8}
        onSwiper={(swiper) => {
          // Save swiper instance
          setSwiperInstance(swiper);
        }}
      >
        {imgArr.map(({ image,link }, idx) => (
          <SwiperSlide className="projectsPrevCarousel ">
            <div onClick={()=>siteModal(link)} className="hidden xl:block">
            <img src={image} className="mx-auto cursor-pointer" />
            </div> 
            <a href={link} target="_blank" className="xl:hidden">
            <img src={image} className="mx-auto cursor-pointer" />
            </a>
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
