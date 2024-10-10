import React, { useEffect } from 'react';

const HubspotTrackingCode = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//js.hs-scripts.com/47551678.js";
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default HubspotTrackingCode;