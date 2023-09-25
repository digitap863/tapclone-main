import React, { useEffect, useState } from "react";
import heading from "../../assets/projects/projects.svg";
import Group207 from "../../assets/Group 207.png";
import Ellipse15 from "../../assets/Ellipse 15.png";
import Ellipse16 from "../../assets/Ellipse 15.png";
import ArrowBack from "../../assets/projects/Down.png";
import ArrowForward from "../../assets/projects/Forward.png";
import logoText from "../../assets/Shared/logoName.png";
import "./projects.css";
import { createPortal } from "react-dom";
import NavBar from "../Home/NavBar";
import MobileNavbar from "../Home/MobileNavbar";

function Projects() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(0);
  const [buttonForwardOpacity, setButtonForwardOpacity] = useState(false);
  const [buttonBackwardOpacity, setButtonBackwardOpacity] = useState(false);
  const arrayMenu = ["All", "Website", "Ui", "Branding"];

  const ChangeForwardCategory = () => {
    let value;
    if (category == "Branding") {
      value = -1;
    } else {
      value = arrayMenu.findIndex((value) => {
        return value == category;
      });
    }
    const item = arrayMenu[value + 1];
    console.log(item);
    setCategory(item);
  };
  const ChangeBackWordCategory = () => {
    let value;
    if (category == "All") {
      value = 4;
    } else {
      value = arrayMenu.findIndex((value) => {
        return value == category;
      });
    }
    const item = arrayMenu[value - 1];
    console.log(item);
    setCategory(item);
  };

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
  const phoneNumber = "+1234567890";
  const doPhoneCallClick = () => {
    window.open(`tel:${phoneNumber}`);
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
      <div style={{ width: "100%", overflowX: "" }}>
      <MobileNavbar />
                <NavBar />
        <div className="header">
          <div className="logoSection">
          <img src={logoText} alt="logotext" />
          </div>
        </div>
        <div className="projectsMain ">
          <div style={{ width: "57%" }}>
            <img style={{ width: "100%" }} src={heading} alt="" />
          </div>
          <div className="projectsListingMain ">
            <div className="projectListingHeader ">
              {arrayMenu.map((menuItem, idx) => (
                <span
                  style={{
                    color: category === menuItem ? "#47ff05" : "transparent",
                    WebkitTextStroke: category === menuItem ? "#47ff05" : null,
                  }}
                  key={idx}
                  onClick={(e) => {
                    setCategory(`${menuItem}`);
                  }}
                >
                  {menuItem}
                </span>
              ))}
            </div>

            {category == "All" && (
              <div className="projectListingContainer">
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                >
                </div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1.5",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                    marginTop: "-15%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                    marginTop: "10%",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1.5",
                    marginTop: "-14%",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                    marginTop: "-27%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                    marginTop: "-24%",
                    marginLeft: "34%",
                  }}
                ></div>
                <img
                  className="back-arrow"
                  src={ArrowBack}
                  onClick={ChangeBackWordCategory}
                ></img>
                <img
                  className="forward-arrow"
                  src={ArrowForward}
                  onClick={ChangeForwardCategory}
                ></img>
              </div>
            )}
            {category == "Website" && (
              <div className="projectListingContainer">
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/.93",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.48",
                    marginTop: "-33.5%",
                    marginLeft: "34%",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1.5",
                    marginTop: "8%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                    marginTop: "-15%",
                  }}
                ></div>
                <img
                  className="back-arrow"
                  src={ArrowBack}
                  onClick={ChangeBackWordCategory}
                ></img>
                <img
                  className="forward-arrow"
                  src={ArrowForward}
                  onClick={ChangeForwardCategory}
                ></img>
              </div>
            )}
            {category == "Ui" && (
              <div className="projectListingContainer">
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/.93",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/.93",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1.5",
                    marginTop: "8%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1",
                    marginLeft: "33%",
                    marginTop: "-18%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1",
                    marginTop: "-18%",
                  }}
                ></div>
                <img
                  className="back-arrow"
                  src={ArrowBack}
                  onClick={ChangeBackWordCategory}
                ></img>
                <img
                  className="forward-arrow"
                  src={ArrowForward}
                  onClick={ChangeForwardCategory}
                ></img>
              </div>
            )}
            {category == "Branding" && (
              <div className="projectListingContainer">
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1.5",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                    marginTop: "-15%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                    marginTop: "10%",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1/1.5",
                    marginTop: "-14%",
                  }}
                ></div>
                <div
                  className="ani-left"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "32%",
                    aspectRatio: "1",
                    marginTop: "-27%",
                  }}
                ></div>
                <div
                  className="ani-right"
                  style={{
                    backgroundColor: "#d9d9d9",
                    width: "66%",
                    aspectRatio: "1/0.45",
                    marginTop: "-24%",
                    marginLeft: "34%",
                  }}
                ></div>
                <img
                  className="back-arrow"
                  src={ArrowBack}
                  onClick={ChangeBackWordCategory}
                ></img>
                <img
                  className="forward-arrow"
                  src={ArrowForward}
                  onClick={ChangeForwardCategory}
                ></img>
              </div>
            )}

            <img src={Group207} className="glob-1"></img>
            <img src={Ellipse15} className="glob-2"></img>
            <img src={Ellipse16} className="glob-3"></img>
          </div>
          <div className="knowMoreServices mt-16 -mb-20">
            <span className="knowMoreText">
              Need to <br /> Know More
            </span>
            <div className="callBtn" onClick={() => doPhoneCallClick()}>
              <span>call</span>
            </div>
          </div>
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

export default Projects;
