import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from "react-dom";
import logoText from '../../assets/Shared/logoName.png'
import './Sales.css'
import Horizontal from './RangeSlider';
import submit from '../../assets/Sales/submit.png'
import graph from '../../assets/Sales/graph.gif'
import image1 from '../../assets/Sales/1.png';
import image2 from '../../assets/Sales/2.png';
import image3 from '../../assets/Sales/3.png';
import image4 from '../../assets/Sales/4.png';
import image5 from '../../assets/Sales/5.png';
import image6 from '../../assets/Sales/6.png';
import image7 from '../../assets/Sales/7.png';
import image8 from '../../assets/Sales/8.png';
import image9 from '../../assets/Sales/9.png';
import testiProfile from '../../assets/Sales/testiimage.png'
import rating from '../../assets/Sales/rating.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import astroHi from "../../assets/svg/astroHi.svg";
import TextTransition, { presets } from 'react-text-transition';
import gsap from 'gsap';
import MobileNavbar from '../Home/MobileNavbar';
import NavBar from '../Home/NavBar';

const TEXTS = ['500 leads delivered within in a Month', '20K monthly users in 50+ websites', 'Cost per Lead acquired at ₹1'];


function SalesMain() {
    const [value, setValue] = useState(10000);
    const [formData, setFormData] = useState({
        Name: '',
        Company_Name: '',
        Official_Mail: '',
        Official_Number: '',
        Website_Link: '',
        Service_Preferred: [],
        Monthly_Budget:value,
        // Grade:''
    });
    function findGrade(){
        console.log("find grade called");
        let Score = 0 
        const email = formData.Official_Mail
        const emailTail = email.split('@')[1]
        if(emailTail!=='gmail.com'&&emailTail!=='yahoo.com'&&emailTail!=='hotmail.com'&&emailTail!=='msn.com' ){
            Score+=1
        }
        if(formData.Website_Link){
            Score+=1
        }
        if(formData.Monthly_Budget>40000){
            Score+=3
        }else if(formData.Monthly_Budget>20000){
            Score+=2
        }else if(formData.Monthly_Budget>15000){
            Score+=1
        }
        Score+=formData.Service_Preferred.length
        return Score
        // setFormData({ ...formData, Grade: Score })
    }
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            // // Add the selected service to the array
            setFormData((prevFormData) => ({
                ...prevFormData,
                Service_Preferred: [...prevFormData.Service_Preferred, name],
            }));
        } else {
            // Remove the deselected service from the array
            setFormData((prevFormData) => ({
                ...prevFormData,
                Service_Preferred: prevFormData.Service_Preferred.filter((s) => s !== name),
            }));
        }
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const Grade = findGrade()
        console.log(formData);
        try {
            const params = {
                ...formData,
                Grade
              };
              const formBody = new URLSearchParams(params).toString();
            const response = await fetch(
                'https://script.google.com/macros/s/AKfycbya9yaYVzvK6bEjs3b2KjKdKtzSxKIH8lwMYCGmZCNUiOeJVPX4h0G8TJR2_IrssWae/exec',
                {
                  method: 'POST',
                  mode: 'no-cors', // Important for cross-origin requests to Google Apps Script
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: new URLSearchParams(formBody).toString(),
                }
              );
                console.log(response);
              if (response.ok) {
                // Handle success, e.g., show a success message
                console.log('Data sent successfully');
              } else {
                // Handle the error
                console.error('Error sending data');
              }
        } 
        catch (error) {
            // Handle errors (e.g., show error message)
            console.error('Error submitting form:', error);
        }
    };
    const [loaded, setLoaded] = useState(false);
    const myRefLong = useRef();
    const astroHiRef = useRef(null);
    const [stars, setStars] = useState([]);
    const [index, setIndex] = React.useState(0);
    const createStars = () => {
        const newStars = [];
        for (let i = 0; i < 100; i++) {
            let random = Math.random();
            let leftDir = Math.floor(Math.random() * 100);
            let topDir = Math.floor(Math.random() * 100);
            let starSize =
                Math.random() > 0.6 ? Math.random() * 1 + 1 : Math.random() * 1 + 1.8;
            const newStar = {
                size: starSize,
                left: leftDir + "%",
                top: topDir + "%",
            };
            newStars.push(newStar);
        }
        setStars(newStars);
    };
    useEffect(() => {
        createStars();
        const interval = setInterval(() => {
            let random = Math.random();
            let leftDir = Math.floor(Math.random() * 100);
            let topDir = Math.floor(Math.random() * 100);
            let starSize = random > 0.8 ? random * 1 + 3.5 : random * 1 + 2;
            const newStar = {
                size: starSize,
                left: leftDir + "%",
                top: topDir + "%",
            };
            setStars((prevStars) => [...prevStars, newStar]);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const StarPortal = ({ children }) => {
        const portalRoot = document.getElementById("star-root");
        return createPortal(children, portalRoot);
    };
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    useEffect(() => {
        const motion4 = (astroHi, path) => {
            gsap
                .timeline()
                .fromTo(
                    astroHi,
                    { opacity: 0 },
                    { opacity: 1, delay: 0.3, duration: 0.3 }
                )
                .to(path, { opacity: 0.25, duration: 8 })
                .fromTo(path, { opacity: 0 }, { opacity: 0.5 }, 8)
                .to(
                    astroHi,
                    {
                        motionPath: {
                            path: path,
                            align: path,
                            alignOrigin: [0.5, 0.5],
                            // autoRotate: true,
                        },
                        duration: 6,
                        // delay: 0.8,
                        repeat: 0,
                        ease: "power1.easeOut",
                    }
                    // 0
                )
                .to(astroHi, {
                    x: "-=40",
                    y: "-=40",
                    yoyo: true,
                    repeat: -1,
                    ease: "power1.inOut",
                    duration: 4,
                });
        };

        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                const astroHi = astroHiRef.current;
                const astroHiPath = document.querySelector("#astroHiPath");
                motion4(astroHi, astroHiPath);
                observer.unobserve(myRefLong.current);
                //   const rocket = document.querySelector(".rocket4");
                //   const path = document.querySelector("#pathWhite4");
                //   motion4(rocket, path);
                //   observer.unobserve(myRefLong.current)
            }
        });
        observer.observe(myRefLong.current);
    }, [loaded]);
    return (
        <>
            <div style={{ width: "100%", overflowX: "hidden" }}>
                <MobileNavbar />
                <NavBar />
                <div className="header">
                    <div className="logoSection">
                        {/* <h1 style={{ color: "white", margin: "0" }}>LOGO</h1> */}
                        <img src={logoText} alt='logotext' className='xl:w-[35%]' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className="sales-hero-text">
                        <p className='font-poppins'>Sales</p>
                    </div>
                </div>
                <div className='flex  flex-col lg:flex-row w-full lg:mx-[10%] gap-[5rem] xl:w-[89%] 2xl:w-[90%] justify-center'>
                    <div className='sales-text-2 lg:w-[45%] textcenter  mx-10'>
                        <p className='!text-xl md:!text-4xl xl:!text-5xl mt-12 mb-16 absolute w-[90%] lg:w-[45%] top-[23%] left-[5%] xl:left-[9%] 2xl:top-[47%] 2xl:left-[12%]'><TextTransition springConfig={presets.wobbly} className='text-center w-full' direction='up' >{TEXTS[index % TEXTS.length]}</TextTransition></p>
                        {/* <p className='w-full !text-5xl text-center mt-12 mb-16'>Best Conversion <br />Value</p> */}
                        <img src={graph} alt="graph" className='md:w-full md:mt-24 lg:mt-52 w-[22rem]' />
                        <div className='flex items-center mt-5 gap-10'>
                            <h5 className='md:w-[70%] md:ml-7 text-2xl text-left w-full font-semibold'>See how we can market your brand</h5>
                            <span className='text-3xl animate-pulse'><ion-icon name="arrow-forward-outline" /></span>
                        </div>
                    </div>
                    <div className='bg-[#0E0E0E] xl:w-[50%] 2xl:w-[42%] rounded-xl p-5 md:p-10 mx-2 md:mt-10 lg:mt-0'>
                        <h2 className='font-bold text-3xl pb-5 drop-shadow-4xl shadow-pink-500'>
                            Form Details
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className='flex justify-between my-7 gap-3 xl:gap-8 2xl:gap-0'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    className='bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto'
                                    value={formData.Name}
                                    name='Name'
                                    onChange={(e) =>
                                        setFormData({ ...formData, Name: e.target.value })
                                    }
                                />
                                <input
                                    type='text'
                                    placeholder='Company Name'
                                    className='bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto'
                                    value={formData.Company_Name}
                                    name='Company_Name'
                                    onChange={(e) =>
                                        setFormData({ ...formData, Company_Name: e.target.value })
                                    }
                                />
                            </div>
                            <div className='flex justify-between my-7 gap-3 xl:gap-8 2xl:gap-0'>
                                <input
                                    type='text'
                                    placeholder='Official Email'
                                    className='bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto'
                                    value={formData.Official_Mail}
                                    onChange={(e) =>
                                        setFormData({ ...formData, Official_Mail: e.target.value })
                                    }
                                />
                                <input
                                    type='text'
                                    placeholder='Official number'
                                    className='bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto'
                                    value={formData.Official_Number}
                                    onChange={(e) =>
                                        setFormData({ ...formData, Official_Number: e.target.value })
                                    }
                                />
                            </div>
                            <input
                                type='text'
                                placeholder='Website Link'
                                className='bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-full'
                                value={formData.Website_Link}
                                onChange={(e) =>
                                    setFormData({ ...formData, Website_Link: e.target.value })
                                }
                            />
                            <div className='border w-full gap-10 border-gray-500 py-2 px-6 mt-8 rounded-lg flex'>
                                <div className='w-[45%]'>
                                    <div className='flex justify-between my-2'>
                                        <label htmlFor='seo'>Seo</label>
                                        <input
                                            type='checkbox'
                                            name='seo'
                                            id='seo'
                                            checked={formData.Service_Preferred.includes('seo')}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className='flex justify-between my-2'>
                                        <label htmlFor='gmb'>GMB</label>
                                        <input
                                            type='checkbox'
                                            name='gmb'
                                            id='gmb'
                                            checked={formData.Service_Preferred.includes('gmb')}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                </div>
                                <div className='w-[45%]'>
                                    <div className='flex justify-between my-2'>
                                        <label htmlFor='socmed'>Social Media</label>
                                        <input
                                            type='checkbox'
                                            name='socmed'
                                            id='socmed'
                                            checked={formData.Service_Preferred.includes('socmed')}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    <div className='flex justify-between my-2'>
                                        <label htmlFor='webdev'>Website Development</label>
                                        <input
                                            type='checkbox'
                                            name='webdev'
                                            id='webdev'
                                            checked={formData.Service_Preferred.includes('webdev')}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className='w-full'>
                                <h5 className='text-center mb-7 mt-5 text-xl font-bold'>
                                    Monthly Budget
                                </h5>
                                <Horizontal  value={value} setValue={setValue} setFormData={setFormData} formData={formData}/>
                            </div>
                            <div>
                                <button type='submit'>
                                    <img src={submit} alt='Submit' className='cursor-pointer' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mx-[6%] w-[90%] pt-40 md:pt-64 relative'>
                    <div
                        onLoad={() => setLoaded(true)}
                        ref={myRefLong}
                        className="relative"
                    >
                        <img ref={astroHiRef} className=" w-[25%] md:w-[20%] lg:w-[15%] absolute -bottom-[30%]" src={astroHi} alt="" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="1305" height="243" viewBox="0 0 1305 243" fill="none" className='absolute -top-40 -right-[5%]'>
                            <path id="astroHiPath" d="M1969 1C1878.33 102.333 1570.6 263.4 1065 97C559.4 -69.4 145 123.667 1 241" stroke="white" stroke-width="3" stroke-dasharray="19 19" />
                        </svg>
                    </div>
                    <h1 className='text-center text-[#ff41df] font-bold text-3xl md:text-5xl'>Clients</h1>
                    <div className='flex justify-center mt-10 w-full'>
                        <div className="grid grid-cols-3 w-full lg:w-[70%] gap-y-10 gap-x-10">
                            <div className='flex justify-center items-center'>
                                <img src={image1} alt="logo 1" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image2} alt="logo 2" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image3} alt="logo 3" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image4} alt="logo 4" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image5} alt="logo 5" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image6} alt="logo 6" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image7} alt="logo 7" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image8} alt="logo 8" className='md:w-28 w-20' />
                            </div>
                            <div className='flex justify-center items-center'>
                                <img src={image9} alt="logo 9" className='md:w-28 w-20' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='ml-[6%] md:w-[90%] md:mt-32 mt-20'>
                    <h1 className='text-center text-[#ff41df] font-bold text-3xl md:text-5xl'>Testimonials</h1>
                    <div className='mt-12'>
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            centeredSlides={true}
                            autoplay
                            loopedSlides={false}
                            slidesPerView={1.3}
                            spaceBetween={30}
                            breakpoints={{
                                // When screen width is less than 768px (typical for mobile devices)
                                768: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 30,
                                },
                                // For larger screens, use your original settings
                                1200: {
                                    slidesPerView: 2.25,
                                    spaceBetween: 150,
                                },
                            }}
                        >
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                            <SwiperSlide className='flex justify-center'><div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl'>
                                <img src={testiProfile} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                <h5 className='font-semibold md:text-xl my-3'>Raymond Gary</h5>
                                <img src={rating} alt="" className='mb-4' />
                                <p className='md:w-[85%] text-xs md:text-base text-center '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="knowMoreLayer"></div>
            </div>
            <StarPortal>
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
                            setStars((prevStars) => prevStars.filter((_, i) => i !== index));
                        }}
                    />
                ))}
            </StarPortal>
        </>

    )
}

export default SalesMain