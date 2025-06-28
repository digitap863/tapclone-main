import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import ServicesMain from '../Components/Services/ServicesMain'
import { Helmet } from 'react-helmet'

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Full-Stack Digital Services",
    "provider": {
      "@type": "Organization",
      "name": "Tapclone"
    },
    "description": "Discover full-stack digital services – from web development to branding and performance marketing – all under one roof."
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
        "name": "Services",
        "item": "https://www.tapclone.in/services"
      }
    ]
  };

  const combinedLd = [jsonLd, breadcrumbLd];

  return (

    <>
      <Helmet>
        <title>Tapclone Services | Web, Marketing & Content Solutions</title>
        <meta name="description" content="Discover full-stack digital services – from web development to branding and performance marketing – all under one roof." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedLd) }}
        />
      </Helmet>
      <div style={{ backgroundColor: "black" }}>
        <ServicesMain />
        <Footer />
      </div>
    </>
  )
}

export default ServicePage