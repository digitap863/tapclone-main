import React, { useState } from 'react'
import StarPortal from '../Shared/StarPortal'
import { imgArr1, imgArr2 } from '../../assets/posters'

const GalleryContent = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  
  // Combine all images into one array
  const allImages = [...imgArr1, ...imgArr2]
  
  // Add some variety to image heights for masonry effect
  const getRandomHeight = () => {
    const heights = ['h-64', 'h-80', 'h-96', 'h-72', 'h-88']
    return heights[Math.floor(Math.random() * heights.length)]
  }

  return (
    <StarPortal>
      <div className="w-full relative min-h-screen bg-black">
        <div className="container mx-auto p-4 md:p-8 lg:p-20">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center min-h-[30vh] relative">
            <h2 className="text-[#D8FC00] text-6xl md:text-8xl lg:text-9xl font-poppins font-extrabold leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-8 text-center">
              Gallery
            </h2>
            <p className="text-white/70 text-lg md:text-xl text-center max-w-2xl mb-12">
              Explore our creative portfolio showcasing innovative designs and stunning visuals
            </p>
          </div>
          
          {/* Pinterest-style Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 md:gap-6 pb-20">
            {allImages.map((item, index) => (
              <div 
                key={index}
                className={`break-inside-avoid mb-4 md:mb-6 group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 relative`}
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-800">
                  <img 
                    src={item.image1} 
                    alt={item.text}
                    className={`w-full object-cover ${getRandomHeight()} transition-transform duration-500 group-hover:scale-110`}
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-2">{item.text}</h3>
                      <p className="text-white/80 text-sm">Click to view</p>
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className="absolute inset-0 border-2 border-[#D8FC00] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for full-size image view */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <button 
                className="absolute -top-12 right-0 text-white text-2xl hover:text-[#D8FC00] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img 
                src={selectedImage.image1} 
                alt={selectedImage.text}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white text-xl font-semibold">{selectedImage.text}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </StarPortal>
  )
}

export default GalleryContent