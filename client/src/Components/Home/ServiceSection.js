import gsap from "gsap";
import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import servicePlanet from "../../assets/Asset 5@30 1.png";
import arrowSvg from "../../assets/svg/arrowSvg.svg";
import planet from "../../assets/svg/planet.svg";
import textRotateSvg from "../../assets/svg/textRotateSvg.svg";
import "./Animation.css";

function ServiceSection() {
  const [serviceState, setServiceState] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);
  const myRef2 = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // document.querySelector(".div1").style.opacity = "1";
          // document.querySelector(".div2").style.opacity = "1";
          document.querySelector(".front").style.animation =
            "div3 0.3s ease 0.3s  forwards, shake 0.82s cubic-bezier(.36,.07,.19,.97) 2s both";
          // document.querySelector(".back").style.animation =
            // "div3 0.3s ease 0.3s  forwards";
          // document.querySelector(".div3").querySelector("h1").style.transform =
          // "translateY(0)";
          // document.querySelector(".div3").querySelector("h1").style.opacity =
          // "1";

          observer.unobserve(myRef2.current);
        }
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(myRef2.current);

    const container = containerRef.current;
    const updateArrowPosition = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const containerRect = container.getBoundingClientRect();
      const containerCenterX = containerRect.left + containerRect.width / 2;
      const containerCenterY = containerRect.top + containerRect.height / 2;

      const angle =
        Math.atan2(mouseY - containerCenterY, mouseX - containerCenterX) *
        (180 / Math.PI);

      gsap.to(container, {
        rotation: angle,
        duration: 0.15,
        // ease: "power1.out",
        ease: "physics2D",
        // velocity: 1,
        delay: 0.15,
      });
    };

    window.addEventListener("mousemove", updateArrowPosition);

    return () => {
      window.removeEventListener("mousemove", updateArrowPosition);
    };
  }, [loaded]);

  return (
    <section
      className="servicesSection "
      onLoad={() => setLoaded(true)}
      ref={myRef2}
    >
      <div className="div0">
        <div className="planet">
          <img src={planet} alt="planet" />
        </div>
      </div>
      <div className="div1">
        <div className="circle1"></div>
      </div>
      <div className="div2">
        <div className="circle2"></div>
      </div>
      <div
        className="div3 "
        // onClick={() => setServiceState(!serviceState)}
        // style={{ tran sform: serviceState ? "rotateY(180deg)" : "rotateY(0)" }}
      >
        <img className="rotateText" src={textRotateSvg} alt="" />
        <div
          ref={containerRef}
          className="front"
          onClick={() => navigate("/services")}
        >
          <img src={arrowSvg} onClick={() => navigate("/services")} />
        </div>

        {/* <div className="front ">
          <h1 className="frontH1 ">
            <span style={{ color: "#6287e4" }}>COME </span>FULL <br />
            CIRCLE, <span style={{ color: "#ea1717" }}>GO</span> <br />
            <span style={{ color: "#93ed21" }}>
              {" "}
              THE <br /> DISTANCE
            </span>
          </h1>
        </div>
        <div className="back">
          <h2 style={{ color: "white !important" }}>Services</h2>
        </div> */}
      </div>
      <div className="servicePlanet ">
        <img src={servicePlanet} alt="" />
      </div>
    </section>
  );
}

export default ServiceSection;
