import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import { servicesArr } from '../../assets/constants';
import { Button } from '@nextui-org/react';
import leftarrow from '../../assets/services/arrowleft.png'
import rightarrow from '../../assets/services/arrowright.png'
import { useNavigate } from 'react-router-dom';

function ServicesHome() {
    const navigate = useNavigate()
    return (
        <div className='lg:ml-20 flex flex-col lg:flex-row items-center lg:justify-end'>
            <div className='lg:w-1/3 heroTextServiceHome flex flex-col items-center lg:items-start'>
                <h1>Our <br /> <span className='text-[#AEEF24]'>Services</span></h1>
                <p className='w-[70%] lg:w-[59%] mb-5 text-lg text-gray-300 '>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</p>
                <Button onClick={()=>navigate('/services')} className='rounded-[3rem] bg-transparent text-white border px-16 py-4'>OUR SERVICES</Button>
            </div>
            <div className='w-[90%] lg:w-1/2 relative'>
                <Swiper
                modules={[Autoplay,Navigation]}
                    loop={true}
                    centeredSlides={true}
                    autoplay
                    loopedSlides={false}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        nextEl: ".next-button",
                        prevEl: ".prev-button",
                        clickable: true,
                      }}
                >
                    {
                        servicesArr.map((elem, index) => (
                            <SwiperSlide className='flex justify-center py-10'>
                                <div
                                    key={index}
                                    className={`flex h[14rem] relative justify-center items-center`}
                                >
                                    <img src={elem.img} alt="" className='w-[60%] lg:w-auto' />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <img src={leftarrow} alt="" className='absolute z-10 top-[40%] left-[5%] cursor-pointer prev-button' />
                <img src={rightarrow} alt="" className='absolute z-10 top-[40%] right-[5%] cursor-pointer next-button' />
            </div>
        </div>
    )
}

export default ServicesHome