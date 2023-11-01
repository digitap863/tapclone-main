import React, { useEffect, useState } from "react";
import "./Team.css";
import heading from "../../assets/our team/our team.png";
import teamSingle from "../../assets/our team/Rectangle 44.png";
import { createPortal } from "react-dom";
import NavBar from "../Home/NavBar";
import MobileNavbar from "../Home/MobileNavbar";
import logoText from "../../assets/Shared/logoName.png";
import { team } from "../../assets/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";

function Team() {
  const [stars, setStars] = useState([]);

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

  return (
    <>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <NavBar />
        <MobileNavbar />
        <div className="header">
          <div className="logoSection">
            <img src={logoText} alt="logotext" />
          </div>
          {/* <div className="dateSection">
                    <p style={{ margin: "0" }}> Mon 22.07</p>
                </div> */}
        </div>
        <div className="teamMain">
          <div style={{ width: "53%" }}>
            <img style={{ width: "100%" }} src={heading} alt="" />
          </div>
          <div className="lg:grid grid-cols-3 mt-20 -mb-60 mx-20 gap-10 relative hidden">
            {/* <div className=" bg-[#7f297b] h-full absolute w-full blur-3xl z[-1] opacity-50"></div> */}
            {team.map((elem) => (
              <div className="bg-white bg-opacity-25 gap-6 items-center px-10 pt-8 pb-4 rounded-[3rem] relative border border-gray-400 flex flex-col hover:-translate-y-4 duration-300 ease-in-out z-[1]">
                <div className=" bg-[#7f297b] h-full absolute w-full blur-3xl z[-1] opacity-50"></div>
                <div className="relative">
                  <img
                    src={elem.image}
                    className="h-[20rem] rounded-[3rem] w-[18rem] object-cover relative z-10"
                    alt=""
                  />
                  <div className="bg-[#9372b7] blur-lg -inset-3 absolute z-0" />
                </div>
                <div className="caption relative">
                  <h4 className="font-bold text-2xl text-white">{elem.name}</h4>
                  <p className="my-3">{elem.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[95%]  mt-12 lg:hidden">
          <div className="bg-[#9372b7] blur-3xl h-[55%] top-[25%] -inset-1 opacity-40 absolute z-0" />
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
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 30,
                },
                // For larger screens, use your original settings
                1200: {
                  slidesPerView: 2.25,
                  spaceBetween: 150,
                },
              }}
            >
              {team.map((elem) => (
                <SwiperSlide className="flex justify-center relative z-[1]">
                  <Link
                    to="https://www.google.com/maps/place/Tapclone/@10.0078877,76.3033704,17z/data=!3m1!4b1!4m6!3m5!1s0x3b080da62bd15555:0x797f158c9a280eea!8m2!3d10.0078877!4d76.3059453!16s%2Fg%2F11frqhkwb1?entry=ttu"
                    target="_blank"
                  >
                    {/* <div className="border w-full py-12 border-gray-400 flex flex-col items-center p-5 rounded-xl min-h-[22rem]">
                      <img
                        src={elem.img}
                        alt=""
                        className="rounded-full h-16 w-16 md:h-20 md:w-20 "
                      />
                      <h5 className="font-semibold md:text-xl my-3">
                        {elem.name}
                      </h5>
                      
                    </div> */}
                    <div className="bg-black bg-opacity-25 gap-6 items-center px-10 pt-5 md:pt-7 pb-4 rounded-[3rem] relative border border-gray-400 flex flex-col duration-300 ease-in-out z-[1]">
                      <div className="relative">
                        <img
                          src={elem.image}
                          className="h-[16rem] rounded-[3rem] w-[15rem] md:w-[17rem] object-cover relative z-[1]"
                          alt=""
                        />
                        <div className="bg-[#983dfa] blur-lg  -inset-[1.3px] opacity-50 absolute z-0" />
                      </div>
                      <div className="caption">
                        <h4 className="font-bold text-2xl">{elem.name}</h4>
                        <p className="mb-3">{elem.role}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="star-space">
            <div class="galaxy">
              <div class="stars"></div>
            </div>
          </div> */}
          <div className="knowMoreLayer" style={{ marginTop: "15%" }}></div>
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

export default Team;
