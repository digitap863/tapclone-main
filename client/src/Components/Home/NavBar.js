import { React, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import navOval from "../../assets/navbar_oval.png";
import navPlanet from "../../assets/navbar_planet.png";
import navOrbPlanet from "../../assets/navOrbit_planet.svg";
import logoIcon from '../../assets/Shared/favicon.png'
import logoTitle from '../../assets/Shared/logoName.png'
import "../../Components/Home/Home.css"


function NavBar() {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [stars, setStars] = useState([]);
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
      setStars(newStars);
    } else {
      setStars([]);
    }
  }, [state]);

  const getCurrentDay = () => {
    const today = new Date();
    return today.getDate();
  };
  const [titlevis, setTitleVis] = useState(false)

  return (
    <div className="relative z-50">
      <img src={logoTitle} alt="logoText" className={`absolute top-1 duration-500 ${titlevis ? 'translate-x-[6rem]' : 'translate-x-[-17rem]'}`} />
      <div className="navBar lg:!flex !hidden" style={{ width: state ? "100%" : "5%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <img src={logoIcon} alt="logicon" className="xl:w-9 xl:mt-3 cursor-pointer" onClick={() => navigate('/')} onMouseEnter={() => setTitleVis(!titlevis)} onMouseLeave={() => setTitleVis(!titlevis)} />
          {/* <h1>L</h1> */}
          <div className="navBtn" onClick={() => handleButtonClick()}>
            <div className="line1" style={line1Style}></div>
            <div className="line2" style={line2Style}></div>
          </div>
          <p style={{ fontSize: "1.5rem" }}></p>
        </div>

        <div className="navs flex flex-col  justify-center  ">
          <p>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              HOME
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              ABOUT
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              SERVICES
            </NavLink>
          </p>
          {/* <p>
            <NavLink
              to="/careers"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              CAREERS
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/blogs"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              BLOGS
            </NavLink>
          </p> */}
          <p>
            <NavLink
              to="/gallery"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              GALLERY
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "#aeef24" : "#fff",
              })}
            >
              CONTACT
            </NavLink>
          </p>
        </div>
        <div>
          <span className="menuTyping">MENU</span>
        </div>
        {state && (
          <div className="orbit-container ">
            <img className="orbit" src={navOval} alt="" />
            <img className="nav-planet" src={navPlanet} alt="" />
            <img className="orbitngPlanet" src={navOrbPlanet} alt="" />
          </div>
        )}
        {stars.map((star, index) => (
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
    </div>
  );
}

export default NavBar;
