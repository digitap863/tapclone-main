import React from 'react'
import MobileNavbar from '../Components/Home/MobileNavbar'
import NavBar from '../Components/Home/NavBar'
import Footer from '../Components/Footer/Footer'
import GalleryContent from '../Components/Gallery/GalleryContent'

const GalleryPage = () => {
  return (
    <div className='bg-black'>
        <MobileNavbar/>
        <NavBar/>
        <GalleryContent/>
        <Footer/>
    </div>
  )
}

export default GalleryPage