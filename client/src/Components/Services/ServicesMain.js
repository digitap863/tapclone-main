import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
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
import grid from "../../assets/services/grid_behind_icons.svg";

function ServicesMain() {
  const servicesArr = [
    {
      id: 1,
      title: "Web Development",
      img: service1,
      para: `The websites that We create can vary in complexity according to your requirement from a simple webpage to a complicated ecommerce or social networking site plus practically anything in between. <br/> <br/>

      From the Initial stage, our Ui/Ux design team and the development team work in tandem, ensuring that the website is both aesthetically pleasing and User-friendly. <br/> <br/>
      
      In the elaborated process of web development we keep it simple for you
      <br/>
      <br/>
    
      `,
      isFlipped: false,
    },
    {
      id: 2,
      title: "UI/UX Development",
      img: service2,
      para: `In the initial phase of the design process, our designers diligently gather comprehensive requirements and insights from your end. This meticulous data collection serves as the foundation for seamlessly incorporating your preferences and needs into the final product that we ultimately deliver to you. <br/> <br/>

      UI/UX design and web development are interconnected stages in the creation of a digital product. Effective collaboration between designers and developers is crucial to ensure a cohesive and successful end result that not only looks visually appealing but also provides a seamless and enjoyable user experience
      `,
      isFlipped: false,
    },
    {
      id: 3,
      title: "Branding",
      img: service3,
      para: `Founding the importance of branding goes beyond the act of Founding a business 

      It's about captivating hearts, stirring emotions, and crafting a mesmerizing narrative. Let's  step away from the stereotype of selling products and embrace the art of creating experiences. <br/><br/>

      With the right branding, you have the remarkable ability to shape the purchasing experience. Being able to control and shape the purchasing experience is the power of branding at work.

      
      How do we set you apart from your rivals? It's the enchanting story we help you weave, the identity that pulsates with uniqueness, by making you unmissable amidst a sea of competition. <br/><br/>

      Our goal? To carve out a clear space in the minds of your audience, where you are their cherished and unrivaled choice. Through our expertise, be known, loved, and preferred      
      `,
      isFlipped: false,
    },
    {
      id: 4,
      title: "Social Media Management",
      img: service4,
      para: `More than ever social media has become the anchoring environment for all businesses. And we, as market players, evolve with the trends of social media. <br/> <br/>

      As owners of businesses who are targeting to grow their consumer base should really have a strong digital base first. A business page is one thing to start with but utilizing it the right way is something every business seems to struggle with  <br/> <br/>
      
      So  instead of posting promotions for users without any thought. We make sure that the content you post satisfies connection and engages in communication while building community `,
      isFlipped: false,
    },

    {
      id: 5,
      title: "Organic SEO",
      img: service5,
      para: `Imagine your ideal customers - From the perfect restaurant to the most reliable B2B software providers, they rely on search engines to find whatever their hearts desire. And if you want to captivate their attention, you need to be on the preferred section of google, which is the first 10 results. For that you need to embrace the power of search engine optimization (SEO). <br/> <br/>

      Make no mistake - SEO is not just some passing trend or a bonus add-on. It's a crucial element of any marketing plan aimed at attracting qualified leads and boosting sales. By improving your site's search engine rankings, SEO can help your business reach new audiences.
      
      `,
      isFlipped: false,
    },
    {
      id: 6,
      title: "Google My Business",
      img: service6,
      para: `
      Did you know that 97% of people turn to the online realm when seeking information about a store location or a local business? <br/><br/>
      
      
      As a business owner, you understand the importance of being in the right place at the right time. And in the digital world, that place is none other than the screens of your potential customers. <br/><br/>
      
      
      Google My Business is one of Google’s free features that help you increase your company’s visibility by showcasing all the relevant information in search engines <br/><br/>
      
      
      Imagine your business being front and center when potential customers in and around your store location search for the services you offer. Imagine captivating their attention and drawing them in with all the relevant information
       `,
      isFlipped: false,
    },
  ];
  const [stars, setStars] = useState([]);
  const phoneNumber = "+919037833933";
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

  //card fliping
  const [isFlipped, setisFlipped] = useState(servicesArr);

  // const handleClick = () => {
  //   setisFlipped(!isFlipped);
  // };
  const handleClick = (id) => {
    // Find the item with the given id and update isFlipped
    setisFlipped((prevServices) =>
      prevServices.map((item) =>
        item.id === id ? { ...item, isFlipped: !item.isFlipped } : item
      )
    );
  };

  const StarPortal = ({ children }) => {
    const portalRoot = document.getElementById("star-root");
    return createPortal(children, portalRoot);
  };

  return (
    <>
      <div style={{ width: "100%", overflowX: "hidden" }}>
        <MobileNavbar />
        <NavBar />
        <div className="header">
          <div className="logoSection">{/* <img src={logoText} /> */}</div>
          {/* <div className="dateSection">
            <p style={{ margin: "0" }}> Mon 22.07</p>
          </div> */}
        </div>
        <div className="serviceMain">
          <div className="service-head-wrap " style={{ width: "55%" }}>
            <img
              className="header-1 w-[50%] mx-auto "
              style={{ width: "50%" }}
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
              // onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
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
              {servicesArr.map((elem) => (
                <SwiperSlide>
                  <div className=" w-full flex justify-center flex-col items-center">
                    <img src={elem.img} alt="" className="w-[70%] h-40" />
                    <h5 className="text-2xl font-semibold mt-5">
                      {elem.title}
                    </h5>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="serviceDetails ">
            {isFlipped &&
              isFlipped.map((items) => (
                <ReactCardFlip
                  isFlipped={items.isFlipped}
                  flipDirection="horizontal"
                >
                  <div
                    className=" serv-1 md:!flex !hidden  cursor-pointer  items-center justify-center mx-auto"
                    onMouseEnter={() => handleClick(items.id)}
                    style={{
                      backgroundImage: `url('${grid}')`,
                      backgroundSize: "cover",
                    }}
                  >
                    <img src={items.img} alt="" />
                    <h5 className="mb-10">{items.title}</h5>
                  </div>
                  <div
                    className=" w-[80%]   bg-slate-700/30 backdrop-blur-md rounded-2xl border border-gray-600 cursor-pointer px-6 py-6  2xl:py-10"
                    onMouseLeave={() => handleClick(items.id)}
                  >
                    <h4 className="">{items.title}</h4>
                    <p
                      className="text-[0.780rem]  2xl:text-[0.900rem] mt-3 2xl:mt-5"
                      dangerouslySetInnerHTML={{ __html: items.para }}
                    ></p>
                  </div>
                </ReactCardFlip>
              ))}

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
