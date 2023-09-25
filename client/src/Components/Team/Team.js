import React, { useEffect, useState } from "react";
import "./Team.css";
import heading from "../../assets/our team/our team.svg";
import teamSingle from "../../assets/our team/Rectangle 44.png";
import { createPortal } from "react-dom";
import NavBar from "../Home/NavBar";
import MobileNavbar from "../Home/MobileNavbar";
import logoText from "../../assets/Shared/logoName.png";

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
        <NavBar/>
        <MobileNavbar/>
        <div className="header">
          <div className="logoSection">
          <img src={logoText} alt="logotext" />
          </div>
          {/* <div className="dateSection">
                    <p style={{ margin: "0" }}> Mon 22.07</p>
                </div> */}
        </div>
        <div className="teamMain ">
          <div style={{ width: "53%" }}>
            <img style={{ width: "100%" }} src={heading} alt="" />
          </div>
          <div className="teamList -mb-60">
            <div className="hoverImage">
              <img src={teamSingle} alt="" />
              <div className="caption">
                <h4>Member Name</h4>
                <div></div>
                <p>
                  Ceo
                </p>
              </div>
            </div>
            <div className="hoverImage">
              <img src={teamSingle} alt="" />
              <div className="caption">
                <h4>Member Name</h4>
                <div></div>
                <p>
                  Ceo
                </p>
              </div>
            </div>
            <div className="hoverImage">
              <img src={teamSingle} alt="" />
              <div className="caption">
                <h4>Member Name</h4>
                <div></div>
                <p>
                  Ceo
                </p>
              </div>
            </div>
            <div className="hoverImage">
              <img src={teamSingle} alt="" />
              <div className="caption">
                <h4>Member Name</h4>
                <div></div>
                <p>
                  Ceo
                </p>
              </div>
            </div>
            <div className="hoverImage">
              <img src={teamSingle} alt="" />
              <div className="caption">
                <h4>Member Name</h4>
                <div></div>
                <p>
                  Ceo
                </p>
              </div>
            </div>
            <div className="hoverImage">
              <img src={teamSingle} alt="" />
              <div className="caption">
                <h4>Member Name</h4>
                <div></div>
                <p>
                  Ceo
                </p>
              </div>
            </div>
            
          </div>
          <div className="star-space">
            <div class="galaxy">
              <div class="stars"></div>
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

export default Team;
