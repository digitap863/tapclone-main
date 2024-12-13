import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import aboutHeading from "../../assets/about/About.png";
import bubPlanet from "../../assets/bubblePlanet.svg";
import curvPath from "../../assets/headCurvPath.png";
import tailPlanet from "../../assets/navbar_planet.png";
import "../About/About.css";

const PrivacyContent = () => {
    const [stars, setStars] = useState([]);
    const navigate = useNavigate();
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
            {/* <img src={logoText} /> */}
          </div>
        </div>
        <div className="aboutMain ">
            <div>

            <h1 className="text-center text-2xl font-bold text-white">Privacy and Policy</h1>
            <div className="privacyContent max-w-screen-lg mx-auto leading-8 text-white p-8">
                {/* Summary Section */}
                <div className="summary mb-8">
                    <h2 className="text-xl font-bold mb-4">SUMMARY OF KEY POINTS</h2>
                    <p className="mb-4">This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</li>
                        <li>Do we process any sensitive personal information? Some of the information may be considered 'special' or 'sensitive' in certain jurisdictions. We do not process sensitive personal information.</li>
                        <li>Do we collect any information from third parties? We do not collect any information from third parties.</li>
                        <li>How do we process your information? We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</li>
                        <li>In what situations and with which types of parties do we share personal information? We may share information in specific situations and with specific categories of third parties.</li>
                        <li>How do we keep your information safe? We have adequate organisational and technical processes and procedures in place to protect your personal information.</li>
                        <li>What are your rights? Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</li>
                        <li>How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us.</li>
                    </ul>
                </div>

                {/* Table of Contents */}
                <div className="toc mb-8">
                    <h2 className="text-xl font-bold mb-4">TABLE OF CONTENTS</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        <li>WHAT INFORMATION DO WE COLLECT?</li>
                        <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
                        <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
                        <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
                        <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
                        <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
                        <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
                        <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
                        <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
                        <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
                        <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
                        <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
                    </ol>
                </div>

                {/* Main Content Sections */}
                <div className="sections space-y-12">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-bold mb-4">1. WHAT INFORMATION DO WE COLLECT?</h2>
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Personal information you disclose to us</h3>
                            <p className="mb-4"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                            <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
                            <p className="mb-4">Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                            <ul className="list-disc pl-6 mb-4">
                                <li>names</li>
                                <li>phone numbers</li>
                                <li>email addresses</li>
                                <li>job titles</li>
                            </ul>
                            <p className="mb-4">Sensitive Information. We do not process sensitive information.</p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Information automatically collected</h3>
                            <p className="mb-4"><strong>In Short:</strong> Some information—such as your Internet Protocol (IP) address and/or browser and device characteristics—is collected automatically when you visit our Services.</p>
                            <p className="mb-4">We automatically collect certain information when you visit, use, or navigate the Services. This information includes:</p>
                            <ul className="list-disc pl-6">
                                <li>Log and Usage Data</li>
                                <li>Device Data</li>
                                <li>Location Data</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-bold mb-4">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                        <p className="mb-4"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>
                        <p className="mb-4">We process your personal information for a variety of reasons, including:</p>
                        <ul className="list-disc pl-6">
                            <li>To deliver and facilitate delivery of services to the user</li>
                            <li>To enable user-to-user communications</li>
                            <li>To deliver targeted advertising to you</li>
                            <li>To identify usage trends</li>
                            <li>To determine the effectiveness of our marketing and promotional campaigns</li>
                            <li>To comply with our legal obligations</li>
                        </ul>
                    </section>

                    {/* Continue with remaining sections... */}

                    {/* Contact Section */}
                    <section>
                        <h2 className="text-xl font-bold mb-4">11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                        <p className="mb-4">If you have questions or comments about this notice, you may email us at info@tapclone.in or contact us by post at:</p>
                        <div className="mb-4">
                            <p>Tapclone</p>
                            <p>Tapclone House No: 32, Adwaitham, 2517A,</p>
                            <p>PJ Antony Rd, Sonia Nagar, Palarivattom,</p>
                            <p>Kochi, Kerala 682025</p>
                            <p>India</p>
                        </div>
                    </section>

                    {/* Final Section */}
                    <section>
                        <h2 className="text-xl font-bold mb-4">12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
                        <p className="mb-4">Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
                    </section>
                </div>
            </div>
            </div>
       
         
        </div>

        {/* <div className="service-team-btn ">
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
        </div> */}

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
    )
}

export default PrivacyContent
