import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';

function Thankyou() {
  const [stars, setStars] = useState([]);
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
    <div className='bg-black h-screen flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-7xl text-pink-500 font-bold font-poppins  animate-pulse'>Thank You</h1>
      <div className='flex text-white text-3xl gap-2'>
      <a href='https://www.facebook.com/Tapclone' target='_blank'><ion-icon name="logo-facebook"></ion-icon></a>
      <a href='https://www.instagram.com/tapclone_official/' target='_blank'><ion-icon name="logo-instagram"></ion-icon></a>
      <a href='https://www.instagram.com/tapclone_official/' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
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
                            setStars((prevStars) => prevStars.filter((_, i) => i !== index));
                        }}
                    />
                ))}
            </StarPortal>
    </div>
  )
}

export default Thankyou