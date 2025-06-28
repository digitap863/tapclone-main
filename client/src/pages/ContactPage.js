import React, { useEffect } from 'react'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import { Helmet } from 'react-helmet'

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Tapclone",
    "url": "https://www.tapclone.in",
    "logo": "https://www.tapclone.in/favicon.png",
    "description": "Contact Tapclone – Kerala's creative agency for web, content, and digital marketing solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kerala",
      "addressRegion": "KL",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+919037833933",
      "contactType": "customer support",
      "availableLanguage": ["English", "Malayalam"]
    }
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
        "name": "Contact",
        "item": "https://www.tapclone.in/contact"
      }
    ]
  };

  const combinedLd = [jsonLd, breadcrumbLd];

  return (
    <>
      <Helmet>
        <title>Contact Tapclone | Get in Touch for Digital Solutions</title>
        <meta name="description" content="Contact Tapclone – Kerala's creative agency for web, content, and digital marketing solutions." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedLd) }}
        />
      </Helmet>
      <div style={{backgroundColor:"black",width:'100%',overflowX:'hiden'}}>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default ContactPage