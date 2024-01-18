import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RemoveScroll } from "react-remove-scroll";
import SwipeButton from "./SwipeButton";
import Footer from "../Footer/Footer";
import NavBar from "./NavBar";
import ProjectSection from "./ProjectSection";
import "./Home.css";
import "./Animation.css";
import layer from "../../assets/Layer 3.png";
import ASTRO42 from "../../assets/svg/ASTRO42.svg";
import ufo from "../../assets/svg/ufo.svg";
import ufoPlanet from "../../assets/Asset 4@3002 28.png";
import rocket from "../../assets/svg/rocket.svg";
import blueplanet from "../../assets/bluePlanet.png";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import ufo2 from "../../assets/svg/Layer 4.svg";
import ufoLight from "../../assets/svg/light.svg";
import Slider from "react-slick";
import logo_1 from "../../assets/home/logo_1.png";
import logo_2 from "../../assets/home/logo_2.png";
import logo_3 from "../../assets/home/logo_3.png";
import logo_4 from "../../assets/home/logo_4.png";
import logo_5 from "../../assets/home/logo_5.png";
import logo_6 from "../../assets/home/logo_6.png";
import logo_7 from "../../assets/home/logo_7.png";

import planet1 from "../../assets/svg/globe 2.svg";
import { createPortal } from "react-dom";
import worldMap from "../../assets/worldMap.svg";
import useMediaQuery from "../../hook/useMediaQuery";
import MobileNavbar from "./MobileNavbar";
import HeroCircle from "./HeroCircle";
import ServicesHome from "./ServicesHome";
import planetPre from "../../assets/Shared/planetPre.svg";
import shipPre from "../../assets/Shared/shipPre.svg";
import logo1 from "../../assets/Shared/favicon.png";
import logoText from "../../assets/Shared/logoName.png";

function HomeMain() {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [stars, setStars] = useState([]);
  const [activeMapButton, setActiveMapButton] = useState(1);
  const imgRef = useRef(null);
  const astroRef = useRef(null);
  const ufoRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const mapArr = [
    {
      country: "INDIA",
      mapIndex: 1,
    },
    {
      country: "SHARJA",
      mapIndex: 2,
    },
    {
      country: "AUSTRALIA",
      mapIndex: 3,
    },
    {
      country: "NETHERLANDS",
      mapIndex: 4,
    },
    {
      country: "NEW ZEALAND",
      mapIndex: 5,
    },
    {
      country: "SINGAPORE",
      mapIndex: 6,
    },
  ];

  const handleMapButtonHover = (index) => {
    setActiveMapButton(index);
  };

  const images = [logo_1, logo_2, logo_3, logo_4, logo_5, logo_6, logo_7];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    centerMode: true,
    beforeChange: (current, next) => setImageIndex(next),
  };

  gsap.registerPlugin(MotionPathPlugin);

  // path1
  const motion = (rocket, path) => {
    gsap
      .timeline()
      .fromTo(rocket, { opacity: 0 }, { opacity: 1, delay: 3, duration: 1 })
      .fromTo(path, { opacity: 0 }, { opacity: 1 })
      .fromTo(
        path,
        { strokeDashoffset: 1200 },
        { strokeDashoffset: 0, duration: 135 }
      )
      .to(
        rocket,
        {
          motionPath: {
            path: path,
            align: path,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          duration: 20,
          repeat: 0,
          ease: "none",
        },
        3
      )
      .to(rocket, { opacity: 0, duration: 1 }, 28);
  };

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
    if (window.innerWidth >= 768) {
      gsap.to(imgRef.current, {
        rotation: 360,
        duration: 25,
        repeat: -1,
        // repeatDelay: 3,
        // yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#rockPath",
          align: "#rockPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
      });
    } else {
      gsap.to(imgRef.current, {
        rotation: 360,
        duration: 15,
        repeat: -1,
        // repeatDelay: 3,
        // yoyo: true,
        ease: "power1.inOut",
        motionPath: {
          path: "#rockPath",
          align: "#rockPath",
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
          start: 1,
          end: 0,
        },
      });
    }

    gsap.to(astroRef.current, {
      x: "-=40",
      y: "-=80",
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

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

  const [loaded, setLoaded] = useState(false);
  const myRef = useRef();
  const ufoStartRef = useRef(null);
  // const [ufoVisible, setUfoVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          document.querySelector(".puzzlePop").style.opacity = "1";
          document.querySelector(".Contents").classList.add("contentPop");
          document.querySelector(".shadow").style.top = "13px";

          observer.unobserve(myRef.current);
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(myRef.current);
  }, [loaded]);

  useEffect(() => {
    const ufoThing = ufoRef.current;
    let count = 0;

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // console.log("entry", entry);
      // setUfoVisible(entry.isIntersecting);

      if (entry.isIntersecting && window.innerWidth >= 768) {
        count++;
        if (count === 1) {
          document.body.style.overflow = "hidden";
          var enableScroll = setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1200);
        }

        gsap
          .timeline()
          .fromTo(ufoThing, { opacity: 0 }, { opacity: 1 })
          .to(ufoThing, {
            duration: 4,
            repeat: false,
            ease: "power1.inOut",
            motionPath: {
              path: "#ufoPath",
              align: "#ufoPath",
              // autoRotate: true,
              alignOrigin: [0.5, 0.5],
              start: 0,
              end: 1,
            },
          })
          .then(() => {
            clearTimeout(enableScroll);
            setIsVisible(true);
            observer.unobserve(ufoStartRef.current);
          });
      }
    });
    observer.observe(ufoStartRef.current);

    return () => {
      // clearTimeout(enableScroll);
      document.body.style.overflow = "auto";
      // observer.unobserve(ufoStartRef.current);
    };
  }, []);

  const StarPortal = ({ children }) => {
    const portalRoot = document.getElementById("star-root");
    return createPortal(children, portalRoot);
  };
  const [splash, setSplash] = useState(true);
  const [logoanim, setlogoanim] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setlogoanim(true);
    }, 1000);
    setTimeout(() => {
      setSplash(false);
      document.body.style.overflow = "auto";
    }, 3000);
  }, []);
  const [starsLoader, setstarsLoader] = useState([]);
  const [state, setState] = useState(true);
  const [line1Style, setLine1Style] = useState({
    width: "2px",
    height: "35px",
    backgroundColor: "white",
  });

  const [line2Style, setLine2Style] = useState({
    width: "2px",
    height: "35px",
    backgroundColor: "white",
  });
  const handleButtonClick = () => {
    setState(!state);
    if (state) {
      setLine1Style({
        ...line1Style,
        transform: "",
      });
      setLine2Style({
        ...line2Style,
        transform: "",
      });
    } else {
      setLine1Style({
        ...line1Style,
        transform: "translate(1.5px,-2px) rotate(225deg)",
        transition: "0.3s ease-in",
      });
      setLine2Style({
        ...line2Style,
        transform: "translate(-8.5px,-0.5px) rotate(-225deg)",
        transition: "0.3s ease-in",
      });
    }
  };
  useEffect(() => {
    if (state) {
      const newStars = [];
      for (let i = 0; i < 80; i++) {
        let leftDir = Math.floor(Math.random() * 100);
        let topDir = Math.floor(Math.random() * 100);
        let starSize =
          Math.random() > 0.2
            ? Math.random() * 1 + 0.5
            : Math.random() * 1 + 1.2;
        let animationDuration = Math.floor(Math.random() * (7 - 3 + 1) + 3);
        let animationDir = Math.random() > 0.5 ? "alternate" : "reverse";
        const newStar = {
          size: starSize,
          left: leftDir + "%",
          top: topDir + "%",
          animationDir,
          animationDuration: animationDuration + "s",
        };
        newStars.push(newStar);
      }
      setstarsLoader(newStars);
    } else {
      setstarsLoader([]);
    }
  }, [state]);
  return (
    <>
      <div
        className={`h-screen bg-black  z-50 absolute duration-500 flex justify-center items-center overflow-hidden ${
          splash ? "translate-y-0" : "-translate-y-full"
        } w-full`}
      >
        <img
          src={planetPre}
          alt="planet"
          className="absolute rotate-[-20deg] right-[10%] top-[20%]"
        />
        <img
          src={shipPre}
          alt="planet"
          className="absolute left-[10%] top-[60%]"
        />
        <div className="h-20 w-[70%] lg:w-[30%] flex justify-center items-center bg-transparent">
          <img
            src={logo1}
            alt="logo"
            className="animate-fade-in w-[10%] lg:w-auto"
          />
          <div className="w-[70%] lg:w-full h-full overflow-hidden relative">
            <img
              src={logoText}
              alt="logotext"
              className={`absolute w-[90%] lg:w-auto top-[30%] lg:top-[15%] left-3 duration-[1200ms] ease-in ${
                logoanim ? "translate-x-0" : "-translate-x-[110%]"
              }`}
            />
          </div>
        </div>
        {starsLoader.map((star, index) => (
          <div
            key={index}
            className="star-nav"
            style={{
              "--size": `${star.size}vmin`,
              left: star.left,
              top: star.top,
              animation: `GFG ${star.animationDuration} infinite linear ${star.animationDir}`,
            }}
          />
        ))}
      </div>
      <div
        className={`homeMain ${splash ? "" : ""}`}
        onLoad={() => setLoaded(true)}
      >
        <MobileNavbar />
        <NavBar />

        <div className="header">
          <div className="logoSection">
            {/* <h1 style={{ color: "white", margin: "0" }}>LOGO</h1> */}
            {/* <img src={logoText} /> */}
          </div>
          {/* <div className='dateSection'>
          <p style={{ margin: '0' }}> Mon 22.07</p>
        </div> */}
        </div>

        <section className="section1 ">
          {isMobile ? (
            <>
              <img className="rocket" src={rocket} alt="" ref={imgRef} />
              <svg
                width="1020"
                className="rocketPath"
                height="1875"
                viewBox="0 0 1020 1875"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="rockPath"
                  d="M 1 950 A 950 943 0 0 1 1888 931 A 943 943 0 0 1 1 931 Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="39 39"
                />
              </svg>
            </>
          ) : (
            <>
              <img className="rocket" src={rocket} alt="" ref={imgRef} />
              <svg
                width="1020"
                className="rocketPath"
                height="1875"
                viewBox="0 0 1020 1875"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="rockPath"
                  d="M 1 931 A 943 943 0 0 1 1888 931 A 943 943 0 0 1 1 931 Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="19 19"
                />
              </svg>
            </>
          )}

          {/* <svg
          className="rocketPath "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 150 300"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            id="pathWhite"
            d="M75,0 A75,75 0 0 0 75,150"
            fill="none"
            stroke-width="0.4"
          />
          <path
            id="pathBlack"
            d="M75,0 A75,75 0 0 0 75,150"
            fill="none"
            stroke="black"
            stroke-width="1"
          />
        </svg> */}

          {/* <svg className='rocketPath'  viewBox="0 0 754 899" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='pathWhite' d="M898 1L753 1" stroke="white"  />
          
        </svg> */}

          <div className="heroText ">
            <p>
              A
              {/* <TypeAnimation
                sequence={[
                  " GOOD",
                  1000,
                  " GOOD START",
                  1000,
                  () => setStartText2(true),
                ]}
                // repeat={Infinity}
                style={{
                  color: "#47ff05",
                }}
                cursor={false}
                speed={50}
              /> */}
              <span
                style={{
                  color: "#47ff05",
                }}
              >
                &nbsp;GOOD START
              </span>
              <br />
              {/* {text2 && (
                // "IS THE BEST"
                <TypeAnimation
                  sequence={[
                    " IS",
                    1000,
                    " IS THE",
                    1000,
                    " IS THE BEST",
                    1000,
                    () => setStartText3(true),
                  ]}
                  // repeat={Infinity}
                  // style={{ color: "#47ff05" }}
                  cursor={false}
                  speed={65}
                />
              )} */}
              <span>IS THE BEST</span>
              <br />
              {/* {text3 && (
                <TypeAnimation
                  sequence={[
                    " RECIPE",
                    1000,
                    " RECIPE FOR",
                    1000,
                    () => setStartText4(true),
                  ]}
                  style={{ color: "#8e64e9" }}
                  // repeat={Infinity}
                  // style={{ color: "#47ff05" }}
                  cursor={false}
                  speed={75}
                />
              )} */}
              <span style={{ color: "#8e64e9" }}> RECIPE FOR </span>
              <br />
              SUCCESS.
              {/* {text4 && (
                <TypeAnimation
                  sequence={[" SUCCESS.", 1000, () => setStartText4(true)]}
                  // style={{ color: "#8e64e9" }}
                  // repeat={Infinity}
                  // style={{ color: "#47ff05" }}
                  cursor={false}
                  speed={85}
                />
              )} */}
            </p>

            {/* <button className="swipe-btn">SWIPE DOWN</button> */}
            <SwipeButton />
            <div className="quoteBtn ">
              <svg
                width="120"
                height="50"
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path1"
                  d="M2 2L25 25L2 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path2"
                  d="M25 2L48 25L25 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path3"
                  d="M48 2L71 25L48 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path4"
                  d="M71 2L94 25L71 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path5"
                  d="M94 2L117 25L94 48"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>

          {!isMobile && (
            <div className="quoteBtn">
              <svg
                width="120"
                height="50"
                viewBox="0 0 120 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path1"
                  d="M2 2L25 25L2 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path2"
                  d="M25 2L48 25L25 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path3"
                  d="M48 2L71 25L48 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path4"
                  d="M71 2L94 25L71 48"
                  stroke="white"
                  strokeWidth="3"
                />
                <path
                  className="path5"
                  d="M94 2L117 25L94 48"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            </div>
          )}

          <HeroCircle />
          <br />
          {!isMobile && <img className="layer" src={layer} alt="" />}
        </section>

        <section className="section2" ref={myRef}>
          {!isMobile && (
            <div className="puzzlePop">
              <img className="puzzle " ref={astroRef} src={ASTRO42} alt="" />
            </div>
          )}
          <div className="Contents ">
            <h1 style={{ margin: "0", zIndex: "2" }}>
              Straight <br /> talk <br />
              <span style={{ color: "#aeef24" }}>
                {" "}
                Direct <br /> results.
              </span>
            </h1>
            <h1 className="shadow" style={{ margin: "0", zIndex: "1" }}>
              Straight <br /> talk <br />
              <span>
                {" "}
                Direct <br /> results.
              </span>
            </h1>
            <p className="mt-5 max-w-md">
              it is tough to make things simple. We aren't different just for
              the sake of being different. We are here to make a difference to
              brands.
            </p>
          </div>
        </section>
        {isMobile && (
          <div className="puzzlePop">
            <img className="puzzle " ref={astroRef} src={ASTRO42} alt="" />
          </div>
        )}

        <section className="section3 " style={{ position: "relative" }}>
          <div className="">
            <img
              src={ufo}
              alt=""
              className="absolute right-[10%] top-[50%]  floating"
            />

            <img src={blueplanet} className="absolute right-[40%] top-[60%] rotate" />
          </div>
          <div className="ufoPlanet  ">
            <img src={ufoPlanet} alt="" />
          </div>
        </section>

        {/* <ServiceSection /> */}
        <ServicesHome />
        {/* <div className="ufoPlanet-section ">
          <img className="ufoPlanet" src={ufo2} ref={ufoRef} alt="" />
          <img
            src={ufoLight}
            alt=""
            className={`ufolight ${isVisible ? "visible" : ""}`}
          />
          <svg
            // style={{ opacity: 100 }}
            className="ufoPath "
            id="erFka5b34HB1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 300 300"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
          >
            <path
              id="ufoPath"
              d="M296.99571,49.35622c0,22.58294-17.97341,31.54776-33.61946,44.34907-66.21769,54.17811-112.24482,43.63376-188.8412,43.63376"
              transform="matrix(1.05 0 0 1.41-15.053649-38.441179)"
              fill="none"
              stroke="#3f5787"
              // stroke="#000000"
              strokeWidth="0.2"
            />
          </svg>
        </div> */}
        <section className="brandSection pt-28 " ref={ufoStartRef}>
          <h1>
            We believe in brands. <br />
            brands <span style={{ color: "#70ff00" }}>believe in us</span>
          </h1>
          <div className="brandSectionUfo relative ">
            <img src={ufo2} alt="" className="floating" />
            <img src={ufoLight} alt="" className="floating" />
            <div className="flex items-center justify-center">
              <div className="logoSlider absolute top-[60%]">
                <Slider {...settings}>
                  {images.map((item, idx) => (
                    <div
                      className={
                        idx === imageIndex
                          ? "brandSliderDiv activeSlide"
                          : "brandSliderDiv"
                      }
                    >
                      <img src={item} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/* <div className="brandSectionLayer ">
            <img src={layer2} alt="" />
          </div> */}
        </section>
        <ProjectSection />

        {/* <section className='projectSection' style={{ marginLeft: '6%' }} >
        <img className='orangePlanet' src={orangePlanet} alt="" />
        <img className='violetCircle' src={violetCircle} alt="" />
        <div className='violetSmallCircle' style={{ background: '#b291e8' }}></div>
        <svg className='rocketPath4' style={{ position: 'absolute', width: '100%' }} viewBox="0 300 1440 2311" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id='pathWhite4' d="M-132 0C-132 250 64.4999 514.501 543 505.001C1086.5 487.001 1283 622.001 1283 986.501C1283 1351 868.5 1433 543 1433C293 1433 189.5 1619 189.5 1822.5C189.5 2090.5 378.167 2190.83 543 2205C803.833 2220.67 1346.5 2240 1532.5 2610" strokeWidth='0.4'  />
          <path id='pathBlack4' d="M-132 0C-132 250 64.4999 514.501 543 505.001C1086.5 487.001 1283 622.001 1283 986.501C1283 1351 868.5 1433 543 1433C293 1433 189.5 1619 189.5 1822.5C189.5 2090.5 378.167 2190.83 543 2205C803.833 2220.67 1346.5 2240 1532.5 2610" stroke="black" strokeWidth='1' />
        </svg>
        <img className='rocket4' src={rocket} alt="" />

        <h1>LATEST <br /><span style={{ color: '#ae46de' }}>PROJECTS</span></h1>
        <div style={{ width: '100%', aspectRatio: '1/0.3', display: 'flex', alignItems: 'center', marginTop: '20%', paddingLeft: "10%" }}>
          <div style={{ width: '75%', height: '100%', overflowX: 'hidden', perspective: '1000px' }}>

            <ProjectSlider></ProjectSlider>
          </div>

        </div>

        <div style={{ width: '100%', aspectRatio: '1/0.3', display: 'flex', alignItems: 'center', justifyContent: 'end', marginTop: '30%' }}>
          <div style={{ width: '75%', height: '100%', overflowX: 'hidden', perspective: '1000px', marginRight: "5%" }}>

            <ProjectSlider2></ProjectSlider2>
          </div>

        </div>

        <div style={{ aspectRatio: "1/0.6", display: 'flex', flexDirection: 'column', justifyContent: "center", alignItems: 'center', marginTop: '30%', position: 'relative' }}>
          <img className='planet7' src={planet7} alt="" />
          <div style={{ width: '60%', height: '50%', backgroundColor: '#bbbaba', zIndex: '2' }}></div>
          <img style={{ width: "3rem", marginTop: '5%' }} src={button2} alt="" />
        </div>
      </section> */}

        <section
          className="packagesSection"
          style={{
            marginLeft: "6%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img className="planet1" src={planet1} alt="" />
          {/* <h1
            style={{
              color: "white",
              fontSize: "2.5rem",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: " 1px rgb(255 255 255 / 100%)",
              }}
            >
              OUR
            </span>{" "}
            <br /> PACKAGES
          </h1>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5%",
            }}
          >
            <svg
              className="warpedGrid"
              width="1440"
              height="298"
              viewBox="0 0 1440 298"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-32 1C172.667 47 1014 107 1442 1"
                stroke="white"
                strokeWidth="2"
              />
              <path
                d="M-32 296.072C172.667 250.072 1014 190.072 1442 296.072"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M-4 145H1450" stroke="white" strokeWidth="2" />
            </svg>

            <div
              style={{
                width: "40%",
                aspectRatio: "1/0.6",
                background: "#bbbaba",
              }}
            ></div>
            <div
              style={{
                background: "#96f64a",
                width: "40%",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "0.3rem",
              }}
            >
              <span style={{ color: "black", fontWeight: "800" }}>BUY NOW</span>
            </div>
            <img
              style={{ width: "3rem", marginTop: "5%" }}
              src={button}
              alt=""
            />
          </div> */}
        </section>

        <section
          className="countriesServe "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#fff",
              textAlign: "center",
            }}
          >
            <br />
            Countries
            <br />
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: " 1px rgb(255 255 255 / 100%)",
              }}
            >
              We Serve
            </span>
          </h1>

          <div className="map-button-container ">
            <div className="map-row">
              {mapArr.slice(0, 3).map(({ country, mapIndex }) => (
                <button
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => handleMapButtonHover(mapIndex)}
                  className={
                    activeMapButton === mapIndex ? "active-map-btn" : ""
                  }
                >
                  {country}
                </button>
              ))}
            </div>
            <div className="map-row">
              {mapArr.slice(3).map(({ country, mapIndex }) => (
                <button
                  style={{ cursor: "pointer" }}
                  onMouseEnter={() => handleMapButtonHover(mapIndex)}
                  className={
                    activeMapButton === mapIndex ? "active-map-btn" : ""
                  }
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              justifyContent: "center",
            }}
            className="map-img-wrap "
          >
            <img
              style={{ width: "100%" }}
              className="world-map "
              src={worldMap}
            />
            {mapArr.map(({ country, mapIndex }) => (
              <div
                className={`map-dot ${country} ${
                  activeMapButton === mapIndex ? "map-dot-active" : ""
                }`}
              >
                {activeMapButton === mapIndex ? (
                  <>
                    <div className="ripple-1"></div>
                    <div className="ripple-2"></div>
                    <div className="ripple-3"></div>
                    <div className="ripple-4"></div>
                    <div className="ripple-5"></div>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        <section
          className="contactSection"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              color: "#70ff00",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "transparent",
                WebkitTextStroke: " 2px rgb(255 255 255 / 100%)",
              }}
            >
              we always seek for <br />
              new adventures.
            </span>{" "}
            <br />
            Lets's Do Business
          </h1>
          <div
            className="contactButton "
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/contact")}
          >
            <span>CONTACT</span>
          </div>
        </section>

        <div className="knowMoreLayer "></div>

        <Footer />
        {/* <section style={{ width: '100%', height: '200vh' }}>
        <img src={planet2} alt="" />
        <img src={planet3} alt="" />
        <img src={planet6} alt="" />
        <img src={planet8} alt="" />
        <img src={planet9} alt="" />
      </section> */}
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
              console.log("iam getting called");
              setStars((prevStars) => prevStars.filter((_, i) => i !== index));
            }}
          />
        ))}
      </StarPortal>
    </>
  );
}

export default HomeMain;
