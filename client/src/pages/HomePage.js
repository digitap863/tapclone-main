import React, { Suspense, useEffect, useState } from "react";
import HomeMain from "../Components/Home/HomeMain";
import PreLoader from "./PreLoader";
import { Helmet } from 'react-helmet';
function HomePage() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "name": "Tapclone",
    "url": "https://www.tapclone.in",
    "logo": "https://www.tapclone.in/favicon.png",
    "image": "https://www.tapclone.in/favicon.png",
    "description": "Tapclone is a Kerala-based agency offering ROI-driven digital marketing, engaging content production, and custom website development for brands that want to grow.",
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
    },
    "sameAs": [
      "https://www.linkedin.com/company/tapclone/",
      "https://www.instagram.com/tapclone_official/",
      "https://www.facebook.com/Tapclone"
    ]
  };


  return (
    <div>
      <Helmet>
        <title>Tapclone | Digital Marketing, Content & Web Development in Kerala</title>
        <meta
          name="description"
          content="Tapclone is a Kerala-based agency offering ROI-driven digital marketing, engaging content production, and custom website development for brands that want to grow."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.tapclone.in"
                }
              ]
            })
          }}
        />
      </Helmet>
      <HomeMain />
    </div>
  );
}

export default HomePage;
