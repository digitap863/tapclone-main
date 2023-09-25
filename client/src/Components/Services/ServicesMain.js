import React, { useEffect, useState } from "react";
import "./Services.css";
import heading from "../../assets/services/services.svg";
import service1 from "../../assets/services/Asset 11web development 1.svg";
import service2 from "../../assets/services/Asset 12UI ux.svg";
import service3 from "../../assets/services/Asset 16branding 1.svg";
import service4 from "../../assets/services/Asset 17SOCIAL MEDIA 1.svg";
import service5 from "../../assets/services/Asset 18SEO 1.svg";
import service6 from "../../assets/services/Asset 20GMP 1.svg";
import layerKnowMore from "../../assets/services/pattern.svg";
import ufoPlanet1 from "../../assets/Asset 4@3002 28.png";
import ufoPlanet2 from "../../assets/Asset 5@30 1.png";
import servicePath from "../../assets/servicePath.png";
import bluePlanet from "../../assets/bluePlanet.png";
import { createPortal } from "react-dom";
import logoText from "../../assets/Shared/logoName.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import NavBar from "../Home/NavBar";
import MobileNavbar from "../Home/MobileNavbar";

function ServicesMain() {
  const servicesArr = [
    {
      title:"Web Development",
      img:service1
    },
    {
      title:"UI/UX Development",
      img:service2
    },
    {
      title:"Branding",
      img:service3
    },
    {
      title:"Social Media Management",
      img:service4
    },
    {
      title:"Organic SEO",
      img:service5
    },
    {
      title:"Google My Business",
      img:service6
    },
    
  ]
  const [stars, setStars] = useState([]);
  const phoneNumber = "+1234567890";
  const doPhoneCallClick = () => {
    window.open(`tel:${phoneNumber}`);
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

  // function addStar() {
  //     var s = document.createElement("div");
  //     s.className = "star";
  //     s.style.setProperty("--size", Math.random() * 2 + 2 + "vmin");
  //     s.style.left = Math.floor(Math.random() * 100) + "%";
  //     s.style.top = Math.floor(Math.random() * 100) + "%";
  //     s.onanimationend = function () {
  //         this.remove();
  //     };
  //     document.querySelector(".star-space").appendChild(s);
  // }
  // let timeout = setInterval(addStar, 100);

  // window.addEventListener("beforeunload", () => {
  //     clearInterval(timeout);
  // });
  return (
    <>
      <div style={{ width: "100%", overflowX: "hidden" }}>
      <MobileNavbar />
                <NavBar />
        <div className="header">
          <div className="logoSection">
            <img src={logoText} />
          </div>
          {/* <div className="dateSection">
            <p style={{ margin: "0" }}> Mon 22.07</p>
          </div> */}
        </div>
        <div className="serviceMain">
          <div className="service-head-wrap " style={{ width: "55%" }}>
            <img
              className="header-1 "
              style={{ width: "100%" }}
              src={heading}
              alt=""
            />
            {/* <img className="servPath" src={servicePath} alt="" /> */}
            <img className="blue-planet" src={bluePlanet} alt="" />
          </div>
          <div className="md:hidden w-[100%] mt-16">
            <Swiper
              modules={[Autoplay]}
              loop={true}
              centeredSlides={true}
              autoplay
              loopedSlides={false}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              slidesPerView={1}
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
              {servicesArr.map((elem)=>(
                <SwiperSlide>
                <div className=" w-full flex justify-center flex-col items-center">
                  <img src={elem.img} alt="" className="w-[70%] h-40"/>
                  <h5 className="text-2xl font-semibold mt-5">{elem.title}</h5>
                </div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="serviceDetails ">
            <div className="serv-1 md:!flex !hidden">
              <img src={service1} alt="" />
              <h5>WEB DEVELOPMENT</h5>
            </div>
            <div className="serv-2 md:!flex !hidden">
              <img src={service2} alt="" />
              <h5>UI/UX DEVELOPEMENT</h5>
            </div>
            <div className="serv-3 md:!flex !hidden">
              <img src={service3} alt="" />
              <h5>BRANDING</h5>
            </div>
            <div className="serv-4 md:!flex !hidden">
              <img src={service4} alt="" className="socialMedia" />
              <h5>
                SOCIAL MEDIA <br></br>MANAGEMENT
              </h5>
            </div>
            <div className="serv-5 md:!flex !hidden">
              <img src={service5} alt="" />
              <h5>ORGANIC SEO</h5>
            </div>
            <div className="serv-6 md:!flex !hidden">
              <img src={service6} alt="" />
              <h5>
                GOOGLE MY <br></br> BUSINESS
              </h5>
            </div>
            <img
              className="planetImage1"
              style={{
                animation: "GFG-Planet 10s linear 1s infinite",
              }}
              src={ufoPlanet1}
            ></img>
            <img
              className="planetImage2"
              style={{
                animation: "GFG-Planet 10s linear 1s alternate infinite",
              }}
              src={ufoPlanet2}
            ></img>
          </div>
          {/* <div className="star-space">
            <div class="galaxy">
              <div class="stars"></div>
            </div>
          </div> */}
          <div className="knowMoreServices">
            <span className="knowMoreText">
              Need to <br /> Know More
            </span>
            <div className="callBtn" onClick={() => doPhoneCallClick()}>
              <span>call</span>
            </div>
          </div>
          <div className="knowMoreLayer"></div>
        </div>
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

export default ServicesMain;
