import React, { useCallback, useEffect, useState } from "react";
import contactHeading from "../../assets/contact/contact.svg";
import grid from "../../assets/contact/grid.svg";
import "./Contact.css";
import { createPortal } from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ellipse1 from "../../assets/contact/Ellipse 17.png";
import Ellipse2 from "../../assets/contact/Ellipse 18.png";
import Ellipse from "../../assets/contact/Group 203.png";
import box2 from "../../assets/contact/bg box 2.svg";
import box1 from "../../assets/contact/bg box.svg";
import button from "../../assets/contact/button.svg";
import call from "../../assets/contact/call.svg";
import map from "../../assets/contact/india.png";
import location from "../../assets/contact/location.svg";
import MobileNavbar from "../Home/MobileNavbar";
import NavBar from "../Home/NavBar";
import orangeplanet from "../../assets/Asset 6@30 1.png"
import blueplanet from "../../assets/Asset 4@3002 28.png"


function Contact() {
  const [stars, setStars] = useState([]);
  const [shakeTrigger, setShakeTrigger] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const goToMap = (latitude, longitude, text) => {
    // window.open(
    //   `https://www.google.com/maps?q=${latitude},${longitude}`,
    //   "_blank"
    // );
    window.open(`https://goo.gl/maps/${text}`, "_blank");
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

  const notify = async () => {
    if (doFormValidation()) {
      toast("Thanks for submitting the form !");
      setShakeTrigger(true);
      setTimeout(() => {
        setShakeTrigger(false);
      }, 600);
      try {
        // const response = await fetch(
        //   // "http://localhost:8000/api/contact-form/",
        //   "http://16.170.249.40/api/contact-form/",

        //   {
        //     method: "POST",
        //     mode: "cors",
        //     headers: {
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(form),
        //   }
        // );
        // const data = await response.json();
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbzVviIZIzclZp1mtM4YzaUhdvYyyB_aYrsTIarbO5E9pUGoJbeCdDwuMZwegvfeDS0_XA/exec",
          {
            method: "POST",
            mode: "no-cors", // Important for cross-origin requests to Google Apps Script
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              Name: form.name,
              Email: form.email,
              Message: form.message,
            }).toString(),
          }
        );
        // AKfycbzF2vBXlQCRQv14k8F97221GfNiHRM4Ku-0kXkS506v4Su-mqIcHMQvnu7BbmHXsPDYVA
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } catch (error) {
        toast.error(`${error.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  const [err, setErr] = useState({
    nameErr: "",
    emailErr: "",
    messageErr: "",
  });

  const doFormValidation = () => {
    const { name, email } = form;
    if (!name) {
      setErr((err) => ({
        ...err,
        emailErr: "",
        nameErr: "Name Is Required",
      }));
      return false;
    } else if (!email) {
      setErr((err) => ({
        ...err,
        nameErr: "",
        emailErr: "Email Is Required",
      }));
      return false;
    }

    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!namePattern.test(name)) {
      setErr((err) => ({
        ...err,
        nameErr: "Please enter a valid name.",
        emailErr: "",
      }));
      return false;
    }

    if (!emailPattern.test(email)) {
      setErr((err) => ({
        ...err,
        nameErr: "",
        emailErr: "Please enter a valid email address.",
      }));
      return false;
    }

    setErr((err) => ({
      nameErr: "",
      emailErr: "",
      messageErr: "",
    }));
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const removeStars = useCallback(
    (idx) => {
      setStars((prevStars) => prevStars.filter((_, i) => i !== idx));
    },
    [stars]
  );
  return (
    <>
      <div style={{ width: "100%" }}>
        <NavBar />
        <MobileNavbar />
        <div className="header">
          <div className="logoSection">
            {/* <img src={logoText} alt="logoText" /> */}
          </div>
          {/* <div className="dateSection">
                    <p style={{ margin: "0" }}> Mon 22.07</p>
                </div> */}
        </div>
        <div className="contactSection relative">
          <img
            className="contactImage "
            style={{ width: "30%" }}
            src={contactHeading}
            alt=""
          />
          <img src={orangeplanet} className="absolute top-[10%] left-[10%] moving_2"/>
          <img src={blueplanet} className="absolute top-0 right-[10%] moving_1"/>
          <div
            className="subContact "
            style={{ display: "flex", width: "100%" }}
          >
            <div className="getIntouch w-auto md:w-[40%]">
              <p style={{ margin: "0" }}>
                GET <br /> IN TOUCH
              </p>
              <p style={{ margin: "0", color: "#AEEF24" }}>WITH US</p>
              <div className="contactInputs ">
                <div className="input-group">
                  <input
                    type="text"
                    className="getIn-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  {err.nameErr && (
                    <span className="getIn-nameErr">{err.nameErr}</span>
                  )}
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    className="getIn-email"
                    value={form.email}
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  {err.emailErr && (
                    <span className="getIn-emailErr">{err.emailErr}</span>
                  )}
                  <label htmlFor="mail">Email</label>
                </div>
                <div className="input-group">
                  <input
                    style={{ height: "8rem" }}
                    type="text"
                    name="message"
                    className="getIn-message"
                    value={form.message}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                  <label htmlFor="message">Message</label>
                </div>
              </div>
            </div>
            <div
              className="mapSection !hidden lg:!flex"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60%",
                marginTop: "2rem",
              }}
            >
              <img className="w-[65%] 2xl:w-[52%]" src={grid} alt="" />
              <img
                // style={{ position: "absolute", width: "70%" }}
                src={map}
                alt=""
                className="absolute w-[70%] 2xl:w-[55%]"
              />
              {/* <div className="ripple-6"></div>
              <div className="ripple-6a"></div>
              <div className="ripple-7"></div>
              <div className="ripple-7a"></div> */}
            </div>
          </div>
        </div>

        <div
          className={shakeTrigger ? "sendButton sendShakeBtn" : "sendButton"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={notify}
        >
          <img src={button} alt="" />
        </div>
        <div className="detailSection py-10 ">
          <div
            className="bg-image-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={Ellipse1} className="Ellipse1"></img>
            <img src={Ellipse2} className="Ellipse2"></img>
            <img src={Ellipse} className="Ellipse"></img>
            <div className="address1">
              <img
                className=" w-[15%] md:w-[20%] lg:w-[25%] z-10"
                src={location}
                alt=""
              />
              <img
                src={box1}
                alt=""
                className="w-[85%] mt-[-30%] 2xl:w-[75%] "
              />
              <p className="address-1">KOCHI</p>
              <p className="address-2">
                HOUSE NO:32/2517,
                <br /> AADWAITHAM <br />
                PJ ANTONY ROAD,
                <br /> PALARIVATTOM <br /> 682025, ERNAKULAM
              </p>
              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  goToMap(
                    10.005839291899525,
                    76.30648918170482,
                    "UCWB2aL39fWa5puk7"
                  )
                }
              >
                VIEW ON MAP
              </span>
            </div>
            <div className="address1">
              <img
                className=" w-[15%] md:w-[20%] lg:w-[25%] z-[1]"
                src={location}
                alt=""
              />
              <img
                className="w-[85%] mt-[-30%] 2xl:w-[75%] "
                src={box1}
                alt=""
              />
              <p className="address-1">CALICUT</p>
              <p className="address-2">
                FORTUNE
                <br /> BUSINESS PARK <br></br> 2ND FLOORCHEROOTY <br /> NAGAR
                ASOKAPURAM <br></br>CALICUT-673006
              </p>

              <span
                style={{ cursor: "pointer" }}
                onClick={() =>
                  goToMap(
                    11.266042178544302,
                    75.78725737218082,
                    "C182cwgQbpVUp5SA9"
                  )
                }
              >
                VIEW ON MAP
              </span>
            </div>
          </div>

          <div
            className="phone-contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="address1 contact-width ">
              <img className="w-[28%] z-[3] xl:w-[20%] relative top-7 md:static" src={call} alt="" />
              <img
                className="w-full md:mt-[-23%] lg:mt-[-18%] 2xl:w-[80%]"
                src={box2}
                alt=""
              />

              <p className="address-1 mt-[3rem] md:mt-5 2xl:mt-10">CONTACT</p>

              <div className="absolute  text-[0.65rem] md:text-[1.2rem] text-center font-[500] bottom-0 left-0 md:left-[5%] 2xl:left-[10%] flex flex-col justify-center p-4 md:p-[2rem] ">
                <p>KOCHI:</p>
                <a href="tel:+919037833933">+91 9037&nbsp; 833 &nbsp; 933</a>
                <a href="tel:+919020442445">+91 9020&nbsp; 442&nbsp; 445</a>
              </div>
              <div className="absolute text-[0.65rem] md:text-[1.2rem] text-center font-[500] bottom-0 right-0 md:right-[5%] 2xl:right-[10%] flex flex-col justify-center p-4 md:p-[2rem]">
                <a href="tel:+914354353435">
                  {" "}
                  CALICUT:
                  <br /> 0495&nbsp; 460&nbsp; 5549 <br></br> +91 9037&nbsp;
                  833&nbsp; 933 <br />
                </a>
              </div> 
            </div>
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
                Math.random() * (60 - 2 + 1) + 2
              )}s linear forwards`,
            }}
            onAnimationEnd={() => removeStars(index)}
          />
        ))}
      </StarPortal>
    </>
  );
}

export default Contact;
