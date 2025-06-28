import React from 'react'
import MobileNavbar from '../Components/Home/MobileNavbar'
import NavBar from '../Components/Home/NavBar'
import Footer from '../Components/Footer/Footer'
import CarrerContent from '../Components/Career/CarrerContent'

const CareerPage = () => {
  return (
    <div className="homeMin" style={{ backgroundColor: "black" }}>
        <MobileNavbar/>
        <NavBar/>
        <CarrerContent/>
        <Footer/>
    </div>
  )
}

export default CareerPage
