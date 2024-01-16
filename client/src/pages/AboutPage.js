import React, { useEffect } from "react";
import NavBar from "../Components/Home/NavBar";
import AboutMain from "../Components/About/AboutMain";
import Footer from "../Components/Footer/Footer";
import MobileNavbar from "../Components/Home/MobileNavbar";
import "../Components/About/About.css";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="homeMin" style={{ backgroundColor: "black" }}>
        <MobileNavbar />
        <NavBar />
        <AboutMain />
        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
