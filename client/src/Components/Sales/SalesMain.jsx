import React, { useEffect, useRef, useState } from 'react'
import { createPortal } from "react-dom";
import logo from '../../assets/Shared/fulllogo.jpg'
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
import { validateEmail, validateMobileNumber, validateName } from '../validations/validate';
import { Button, Tooltip } from '@nextui-org/react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/testimonials/1.png'
import img2 from '../../assets/testimonials/2.png'
import img3 from '../../assets/testimonials/3.png'
import img4 from '../../assets/testimonials/4.png'
import img5 from '../../assets/testimonials/5.png'
import img6 from '../../assets/testimonials/6.png'
import Review from './Review';
import phoneicon from '../../assets/Sales/Group 438.svg'

const TEXTS = ['500 leads delivered within in a Month', '20K monthly users in 50+ websites', 'Highly effective lead campaigns at ₹1 CPA.'];


function SalesMain() {
    const [value, setValue] = useState(10000);
    const [formData, setFormData] = useState({
        Name: '',
        Company_Name: '',
        Official_Mail: '',
        Official_Number: '',
        Website_Link: '',
        Service_Preferred: [],
        Monthly_Budget: value,
    });
    const [errors, setErrors] = useState({});
    function findGrade() {
        console.log("find grade called");
        let Score = 0
        const email = formData.Official_Mail
        const emailTail = email.split('@')[1]
        if (emailTail !== 'gmail.com' && emailTail !== 'yahoo.com' && emailTail !== 'hotmail.com' && emailTail !== 'msn.com') {
            Score += 1
        }
        if (formData.Website_Link) {
            Score += 1
        }
        if (formData.Monthly_Budget > 40000) {
            Score += 3
        } else if (formData.Monthly_Budget > 20000) {
            Score += 2
        } else if (formData.Monthly_Budget > 15000) {
            Score += 1
        }
        Score += formData.Service_Preferred.length
        return Score
        // setFormData({ ...formData, Grade: Score })
    }
    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (checked) {
            setErrors({ ...errors, Service_Preferred: null })
            setFormData((prevFormData) => ({
                ...prevFormData,
                Service_Preferred: [...prevFormData.Service_Preferred, name],
            }));
        } else {
            setFormData((prevFormData) => ({
                ...prevFormData,
                Service_Preferred: prevFormData.Service_Preferred.filter((s) => s !== name),
            }));
        }
    };
    function validateForm(formData) {
        const newErrors = {};

        if (!formData.Name) {
            newErrors.Name = 'Name is required';
        } else if (!validateName(formData.Name)) {
            newErrors.Name = 'Enter a valid Name';
        }

        if (!formData.Company_Name) {
            newErrors.Company_Name = 'Company Name is required';
        } else if (!validateName(formData.Company_Name)) {
            newErrors.Company_Name = 'Enter a valid Name';
        }

        if (!formData.Official_Mail) {
            newErrors.Official_Mail = 'Official Email is required';
        } else if (!validateEmail(formData.Official_Mail)) {
            newErrors.Official_Mail = 'Please enter a valid email address';
        }

        if (!formData.Official_Number) {
            newErrors.Official_Number = 'Official Number is required';
        } else if (!validateMobileNumber(formData.Official_Number)) {
            newErrors.Official_Number = 'Please enter a valid Mobile Number';
        }
        if (formData.Service_Preferred.length === 0) {
            newErrors.Service_Preferred = 'Select atleast one service';
        }
        return newErrors;
    }
    const navigate = useNavigate()
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateForm(formData)
        setErrors(newErrors)
        console.log(newErrors);
        if (Object.keys(newErrors).length > 0) {
            return;
        }
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
            setFormData({
                Name: '',
                Company_Name: '',
                Official_Mail: '',
                Official_Number: '',
                Website_Link: '',
                Service_Preferred: [],
                Monthly_Budget: value,
            })
            console.log(response);
            navigate('/thankyou')
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


    const Testimonials = [
        {
            name: "Basant Nair",
            review: "We have been working with Tapclone for our digital marketing services for about 4 years now and we are very happy with their services. Be it Instagram FB promotions or Google Ads or Google Maps they are very much meeting our expectations. I think I there shouldn’t be any doubt in giving them a Five Star rating. They deserve it very much. All the best and thank you Team Tapclone for your support in keeping Cindrebay No.1 in Kerala through your dedicated efforts.",
            img: img1
        },
        {
            name: "Ananthu Rajan",
            review: "Very pleasant experience with the Tapclone team. Timely updations on every steps and the communication part; they clearly recognise our requirements and tailoring the website to meet our exact needs. Thanks for the support Team Tapclone.",
            img: img2
        },
        {
            name: "Meghna Margaret Carbello",
            review: "Tapclone help us to develop our brand and also our promotional activities. And it's result oriented and Customer Friendly.",
            img: img3
        },
        {
            name: "Romy Palakkal",
            review: "Best for Digital marketing services. Also very good support is given by the team",
            img: img4
        },
        {
            name: "Najeeb Abdulla",
            review: "Best SEO and Digital Marketing Team. Thank you Mr. Shineesh for your support and advise on selecting digital marketing platforms and contents😊 also to your designing team. Good work. Sure to recommend Tapclone to my friends and associates.",
            img: img5
        },
        {
            name: "Jijesh MT",
            review: "They are committed to helping us to grow our business in all aspects of digital marketing and Effective work on Google map promotions. The end result and their responsiveness is outstanding.",
            img: img6
        },

    ]

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
    const targetDivRef = useRef(null);

  // Step 2: Define an event handler for the scroll action
  const scrollToDiv = () => {
    // Step 3: Use scrollIntoView() to scroll the target div into view
    targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <>
            <div style={{ width: "100%", overflowX: "hidden" }}>
                {/* <MobileNavbar />
                <NavBar /> */}
                <div className="header">
                    <div className="logoSection">
                        {/* <h1 style={{ color: "white", margin: "0" }}>LOGO</h1> */}
                        <img src={logo} alt='logotext' className='xl:w-[35%] w-[85%] mt-2 xl:mt-0 md:w-[60%]' />
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div className="sales-hero-text">
                        <p className='font-poppins'>Market your Brand</p>
                    </div>
                </div>
                <div className='flex  flex-col lg:flex-row w-full lg:mx-[10%] gap-[5rem] xl:w-[89%] 2xl:w-[90%] justify-center'>
                    <div className='sales-text-2 lg:w-[45%] textcenter  mx-10'>
                        <p className='!text-xl md:!text-4xl xl:!text-5xl md:mt-12 mb-16 absolute w-[90%] lg:w-[45%] top-[21%] md:top-[23%] left-[5%] xl:left-[9%] 2xl:top-[47%] 2xl:left-[12%]'><TextTransition springConfig={presets.wobbly} className='text-center w-full' direction='up' >{TEXTS[index % TEXTS.length]}</TextTransition></p>
                        <img src={graph} alt="graph" className='md:w-full md:mt-24 lg:mt-52 w-[22rem]' />
                        <div className='flex items-center mt-5 gap-10'>
                            <h5 className='md:w-[70%] md:ml-7 text-2xl text-left w-full font-semibold'>See how we can market your brand</h5>
                            <span className='text-3xl animate-pulse hidden lg:block'><ion-icon name="arrow-forward-outline" /></span>
                            <span className='text-3xl animate-pulse rotate-90 lg:hidden' onClick={scrollToDiv}><ion-icon name="arrow-forward-outline" /></span>
                        </div>
                        <div className='lg:ml-6 mt-8 z-10 flex flex-col justify-center items-center lg:items-start'>
                            <h1 className='font-poppins text-[#E56FD2] font-semibold text-2xl'>Talk with a expert now</h1>
                            <Link to='tel:+919037833933'>
                            <Button className='bg-[#E52EC7] mt-5 lg:hidden rounded-xl text-white' size='lg' startContent={<img src={phoneicon} alt=""  className='w-9'/>} link>
                                Call us now
                            </Button>
                            </Link>
                            <div className='bg-[#E52EC7] hidden lg:block p-2 mt-3 rounded-xl'>
                                <h4 className='text-white'>9037833933</h4>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#0E0E0E] xl:w-[50%] 2xl:w-[42%] rounded-xl p-5 md:p-10 mx-2 md:mt-10 lg:mt-0' ref={targetDivRef}>
                        <h2 className='font-bold text-3xl pb-5 drop-shadow-4xl shadow-pink-500 text-center'>
                           Book Free Call With Us
                        </h2>
                        <form onSubmit={handleFormSubmit}>
                            <div className='flex justify-between my-7 gap-3 xl:gap-8 2xl:gap-0'>
                                <Tooltip
                                    showArrow
                                    placement="left"
                                    isOpen={errors.Name}
                                    isDisabled={!errors.Name}
                                    content={errors.Name}
                                    classNames={{
                                        base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-red-400 text-base",
                                        arrow: "bg-red-400 dark:bg-white",
                                    }}
                                >
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        className={`bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto  ${errors.Name ? 'border-red-400 bg-black transition ease-in-out duration-500' : ''}`}
                                        value={formData.Name}
                                        name='Name'
                                        onChange={(e) => {
                                            setFormData({ ...formData, Name: e.target.value })
                                            setErrors({
                                                ...errors,
                                                Name: null,
                                            })
                                        }
                                        }
                                    />
                                </Tooltip>
                                <Tooltip
                                    showArrow
                                    placement="top-end"
                                    isOpen={errors.Company_Name}
                                    isDisabled={!errors.Company_Name}
                                    content={errors.Company_Name}
                                    classNames={{
                                        base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-red-400 text-base",
                                        arrow: "bg-red-400 dark:bg-white",
                                    }}
                                >
                                    <input
                                        type='text'
                                        placeholder='Company Name'
                                        className={`bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto  ${errors.Company_Name ? 'border-red-500 bg-black transition ease-in-out duration-500' : ''}`}
                                        value={formData.Company_Name}
                                        name='Company_Name'
                                        onChange={(e) => {
                                            setFormData({ ...formData, Company_Name: e.target.value })
                                            setErrors({
                                                ...errors,
                                                Company_Name: null,
                                            })
                                        }
                                        }
                                    />
                                </Tooltip>
                            </div>
                            <div className='flex justify-between my-7 gap-3 xl:gap-8 2xl:gap-0'>
                                <Tooltip
                                    showArrow
                                    placement="left"
                                    isOpen={errors.Official_Mail}
                                    isDisabled={!errors.Official_Mail}
                                    content={errors.Official_Mail}
                                    classNames={{
                                        base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-red-400 text-base",
                                        arrow: "bg-red-400 dark:bg-white",
                                    }}
                                >

                                    <input
                                        type='text'
                                        placeholder='Official Email'
                                        className={`bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto  ${errors.Official_Mail ? 'border-red-500 bg-black transition ease-in-out duration-500' : ''}`}
                                        value={formData.Official_Mail}
                                        onChange={(e) => {
                                            setFormData({ ...formData, Official_Mail: e.target.value })
                                            setErrors({
                                                ...errors,
                                                Official_Mail: null,
                                            })
                                        }
                                        }
                                    />
                                </Tooltip>
                                <Tooltip
                                    showArrow
                                    placement="bottom-end"
                                    isOpen={errors.Official_Number}
                                    isDisabled={!errors.Official_Number}
                                    content={errors.Official_Number}
                                    classNames={{
                                        base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-red-400 text-base",
                                        arrow: "bg-red-400 dark:bg-white",
                                    }}
                                >

                                    <input
                                        type='text'
                                        placeholder='Official number'
                                        className={`bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-[50%] md:w-full lg:w-auto  ${errors.Official_Number ? 'border-red-500 bg-black transition ease-in-out duration-500' : ''}`}
                                        value={formData.Official_Number}
                                        onChange={(e) => {
                                            setFormData({ ...formData, Official_Number: e.target.value })
                                            setErrors({
                                                ...errors,
                                                Official_Number: null,
                                            })
                                        }
                                        }
                                    />
                                </Tooltip>
                            </div>
                            <input
                                type='text'
                                placeholder='Website Link'
                                className={`bg-[#3d3c4c] border border-gray-400 rounded-lg text-lg py-2 px-2 focus:border-[#9747FF] w-full ${errors.Website_Link ? 'border-red-500 bg-black transition ease-in-out duration-500' : ''}`}
                                value={formData.Website_Link}
                                onChange={(e) => {
                                    setFormData({ ...formData, Website_Link: e.target.value })
                                    setErrors({
                                        ...errors,
                                        Website_Link: null,
                                    })
                                }
                                }
                            />
                            <Tooltip
                                showArrow
                                placement="top"
                                isOpen={errors.Service_Preferred}
                                isDisabled={!errors.Service_Preferred}
                                content={errors.Service_Preferred}
                                classNames={{
                                    base: "py-2 px-4 shadow-xl text-black bg-gradient-to-br from-white to-red-400 text-base",
                                    arrow: "bg-red-400 dark:bg-white",
                                }}
                            >
                                <div className={`border w-full gap-10 border-gray-500 py-2 px-6 mt-8 rounded-lg flex ${errors.Service_Preferred ? "border-red-500 bg-black transition ease-in-out duration-500" : ''}`}>
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
                            </Tooltip>

                            <div className='w-full'>
                                <h5 className='text-center mb-7 mt-5 text-xl font-bold'>
                                    Monthly Budget
                                </h5>
                                <Horizontal value={value} setValue={setValue} setFormData={setFormData} formData={formData} />
                            </div>
                            <div>
                                <button type='submit'>
                                    <img src={submit} alt='Submit' className='cursor-pointer' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='mx-[6%] w-[90%] pt-20 md:pt-64 mt-20 md:mt-0 relative '>
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
                            {
                                Testimonials.map((elem) => (
                                    <SwiperSlide className='flex justify-center'>
                                        <Link to='https://www.google.com/maps/place/Tapclone/@10.0078877,76.3033704,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080da62bd15555:0x797f158c9a280eea!8m2!3d10.0078877!4d76.3059453!16s%2Fg%2F11frqhkwb1?entry=ttu' target='_blank'>
                                            <div className='border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl min-h-[22rem]'>
                                                <img src={elem.img} alt="" className='rounded-full h-16 w-16 md:h-20 md:w-20 ' />
                                                <h5 className='font-semibold md:text-xl my-3'>{elem.name}</h5>
                                                <img src={rating} alt="" className='mb-4' />
                                                <Review elem={elem} />
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))
                            }
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