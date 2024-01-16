import React, { useEffect, useRef, useState } from "react";
import ProjectSlider2 from "./ProjectSlider2";
import ProjectSlider from "./ProjectsSlider";
import orangePlanet from "../../assets/svg/globe 7.svg";
import violetCircle from "../../assets/svg/globe 6.svg";
import rocket from "../../assets/svg/rocket.svg";
import planet7 from "../../assets/svg/globe.svg";
import astroHi from "../../assets/svg/astroHi.svg";
import astroHiPath from "../../assets/svg/astroHiPath.svg";
import button2 from "../../assets/svg/right arrow 2.svg";
import gsap from "gsap";
import "./ProjectSection.css";

function ProjectSection() {
  const [loaded, setLoaded] = useState(false);
  const myRefLong = useRef();
  const astroHiRef = useRef(null);

  useEffect(() => {
    const motion4 = (astroHi, path) => {
      gsap
        .timeline()
        // .fromTo(
        //   astroHi,
        //   { opacity: 0 },
        //   { opacity: 1, delay: 0.3, duration: 0.3 }
        // )
        // .to(path, { opacity: 0.25, duration: 8 })
        // .fromTo(path, { opacity: 0 }, { opacity: 0.5 }, 8)
        .to(
          astroHi,
          {
            motionPath: {
              path: path,
              align: path,
              alignOrigin: [0.5, 0.5],
              // autoRotate: true,
            },
            duration: 6,
            // delay: 0.8,
            repeat: 0,
            ease: "power1.easeOut",
          }
          // 0
        )
        .to(astroHi, {
          x: "-=40",
          y: "-=40",
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
          duration: 4,
        });
    };

    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      const entry = entries[0];
      if (entry.isIntersecting) {
        const astroHi = astroHiRef.current;
        const astroHiPath = document.querySelector("#astroHiPath");
        motion4(astroHi, astroHiPath);
        observer.unobserve(myRefLong.current);
        //       const rocket = document.querySelector(".rocket4");
        //       const path = document.querySelector("#pathWhite4");
        //       motion4(rocket, path);
        //       observer.unobserve(myRefLong.current)
      }
    });
    observer.observe(myRefLong.current);
  }, [loaded]);

  return (
    <section className="projectSection ">
      <div
        onLoad={() => setLoaded(true)}
        ref={myRefLong}
        className="brandSectionLayer "
      >
        <img ref={astroHiRef} className="astroHi " src={astroHi} alt="" />
        <svg
          id="eT28IepvEXN1"
          className="astroHiPath"
          xmlns="http://www.w3.org/2000/svg"
          width="1132"
          height="244"
          viewBox="0 0 1132 244"
          fill="none"
        >
          <path
            id="astroHiPath"
            d="M1969 1.85742C1878.33 103.191 1570.6 264.257 1065 97.8574C559.4 -68.5426 145 124.524 1 241.857"
            stroke="white"
            stroke-width="3"
            stroke-dasharray="19 19"
          />
        </svg>
        {/* <svg
          id="eT28IepvEXN1"
          className="astroHiPath"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          shape-rendering="geometricPrecision"
          text-rendering="geometricPrecision"
        >
          <path
            id="astroHiPath"
            d="M794.6061,383.40486c-19.121991-7.68102-32.166475-22.51972-51.286086-30.51979-28.518842-11.93292-48.82174-22.818437-78.505097-28.780117-20.61983-4.14134-93.352304-25.472832-113.5936-31.570792-83.879871-25.26997-185.771915-28.156521-271.375524-8.318611-35.228277,8.16385-66.742002,25.04196-100.672685,34.33476-37.49179,10.26811-119.042367,64.680413-143.348497,97.225123"
            transform="matrix(1.00489 0.069927 0.069927 1-24.634911-27.245706)"
            fill="none"
            stroke="#BFBFBF"
            stroke-width="2.6"
          />
        </svg> */}
      </div>
      <img className="orangePlanet" src={orangePlanet} alt="" />
      {/* <img className='violetCircle' src={violetCircle} alt="" /> */}
      {/* <div className='violetSmallCircle' style={{ background: '#b291e8' }}></div> */}
      {/* <svg className='rocketPath4' style={{ position: 'absolute', width: '100%' }} viewBox="0 300 1440 2311" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id='pathWhite4' d="M-132 0C-132 250 64.4999 514.501 543 505.001C1086.5 487.001 1283 622.001 1283 986.501C1283 1351 868.5 1433 543 1433C293 1433 189.5 1619 189.5 1822.5C189.5 2090.5 378.167 2190.83 543 2205C803.833 2220.67 1346.5 2240 1532.5 2610" strokeWidth='1' />
        <path id='pathBlack4' d="M-132 0C-132 250 64.4999 514.501 543 505.001C1086.5 487.001 1283 622.001 1283 986.501C1283 1351 868.5 1433 543 1433C293 1433 189.5 1619 189.5 1822.5C189.5 2090.5 378.167 2190.83 543 2205C803.833 2220.67 1346.5 2240 1532.5 2610" stroke="black" strokeWidth='1' />
      </svg> */}
      {/* <img className='rocket4' src={rocket} alt="" />
       */}

      <h1>
        LATEST <br />
        <span style={{ color: "#ae46de" }}>PROJECTS</span>
      </h1>
      <div
        className="latestProjs-wrap "
        style={{
          width: "99%",
          // aspectRatio: "1/0.3",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "4%",
          // paddingLeft: "10%",
        }}
      >
        <ProjectSlider />
      </div>

      <div
        className="projects-prevSlid "
        style={{
          width: "99%",
          display: "flex",
          alignItems: "center",
          marginTop: "5%",
          justifyContent: "center",
        }}
      >
        <ProjectSlider2 />
      </div>

      <div
        style={{
          // aspectRatio: "1/0.6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
          position: "relative",
        }}
      >
        <img className="planet7" src={planet7} alt="" />
      </div>
    </section>
  );
}

export default ProjectSection;
