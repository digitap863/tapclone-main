import React, { useEffect, useState } from "react";
import aboutHeading from "../../assets/about/About.png";
import playBtn from "../../assets/about/playBtn.svg";
import services from "../../assets/about/services.png";
import ourTeam from "../../assets/about/our-team.svg";
import Ellipse1 from "../../assets/contact/Ellipse 17.png";
import Ellipse2 from "../../assets/contact/Ellipse 18.png";
import Ellipse from "../../assets/contact/Group 203.png";
import curvPath from "../../assets/headCurvPath.png";
import bubPlanet from "../../assets/bubblePlanet.svg";
import tailPlanet from "../../assets/navbar_planet.png";
import { createPortal } from "react-dom";
import "./About.css";
import { useNavigate } from "react-router-dom";
import logoText from "../../assets/Shared/logoName.png";

function AboutMain() {
  const [stars, setStars] = useState([]);
  const navigate = useNavigate();
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
  return (
    <>
      <div style={{ width: "100%", overflowX: "cli" }}>
        <div className="header">
          <div className="logoSection">
            {/* <h1 style={{ color: "white", margin: "0" }}>LOGO</h1> */}
            <img src={logoText} />
          </div>
        </div>
        <div className="aboutMain ">
          <div className="about-planetsWrap " style={{ width: "45%" }}>
            <img
              className="aboutHeading"
              style={{ width: "100%" }}
              src={aboutHeading}
              alt=""
            />
            <img className="planet-Path" src={curvPath} alt="" />
            <img className="bubble-Planet" src={bubPlanet} alt="" />
            <img className="tail-Planet" src={tailPlanet} alt="" />
          </div>
          <div className="aboutDetails ">
            <div className="about-title  ">
              <h1>
                We bring <br />
                <span style={{ color: "#70ff00" }}>the whole</span>
                <br />
                <span className="white-stroke">PACKAGE!</span>
              </h1>
            </div>
            <div className="video-play ">
              <img src={playBtn} alt="" />
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 10s linear 0.1s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#70ff00",
                  }}
                >
                  <span>We're</span>
                  <br />
                  Technology <br />
                  Focused
                </h1>
                <p>
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type */}
                </p>
              </div>
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 10s linear 2.6s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#8E64E9",
                  }}
                >
                  <span>We're Not Just</span>
                  <br />
                  Advertisers <br />
                  We're <br />
                  Creators
                </h1>
                <p>
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type */}
                </p>
              </div>
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 8s linear 0.5s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#BCFF87",
                  }}
                >
                  <span>We're</span>
                  <br />
                  Design and <br />
                  Digital <br />
                </h1>
                <p>
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type */}
                </p>
              </div>
            </div>
            <div className="about-desc ">
              <div
                className="about-desc-content "
                style={{
                  transition: "1s ease-in-out",
                  animation: "lds-ellipsis2 8s linear 2s infinite",
                }}
              >
                <h1
                  style={{
                    color: "#A53954",
                  }}
                >
                  <span>We're</span>
                  <br />
                  Design and <br />
                  Digital <br />
                </h1>
                <p>
                  {/* Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type */}
                </p>
              </div>{" "}
            </div>
          </div>
        </div>

        <div className="service-team-btn ">
          <img src={Ellipse1} className="Ellipse1"></img>
          <img src={Ellipse2} className="Ellipse2"></img>
          <img src={Ellipse} className="Ellipse"></img>
          <div className="btns-container ">
            <div className="btn-bg ">
              <img
                src={services}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/services")}
              />
            </div>
            <div className="btn-bg ">
              <img
                src={ourTeam}
                alt=""
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/team")}
              />
            </div>
          </div>
        </div>

        <div className="knowMoreServices " style={{ marginTop: "4rem" }}>
          <span className="knowMoreText">
            Need to <br /> Know More
          </span>
          <div className="callBtn" onClick={() => doPhoneCallClick()}>
            <span>Call</span>
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
              console.log("iam getting called");
              setStars((prevStars) => prevStars.filter((_, i) => i !== index));
            }}
          />
        ))}
      </StarPortal>
    </>
  );
}

export default AboutMain;
