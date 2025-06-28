import React, { useEffect } from "react";
import NavBar from "../Components/Home/NavBar";
import AboutMain from "../Components/About/AboutMain";
import Footer from "../Components/Footer/Footer";
import MobileNavbar from "../Components/Home/MobileNavbar";
import "../Components/About/About.css";
import { Helmet } from "react-helmet";

function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Tapclone",
    "url": "https://www.tapclone.in",
    "logo": "https://www.tapclone.in/favicon.png",
    "description": "Get to know Tapclone – a creative agency from Kerala delivering top-notch web development, content creation, and digital marketing that drives real results."
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.tapclone.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://www.tapclone.in/about"
      }
    ]
  };

  const combinedLd = [jsonLd, breadcrumbLd];

  return (
    <>
      <Helmet>
        <title>About Tapclone | Web, Content & Marketing Experts from Kerala</title>
        <meta name="description" content="Get to know Tapclone – a creative agency from Kerala delivering top-notch web development, content creation, and digital marketing that drives real results." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedLd) }}
        />
      </Helmet>
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
