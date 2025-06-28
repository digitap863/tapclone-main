import React from 'react'
import StarPortal from '../Components/Shared/StarPortal'
import MobileNavbar from '../Components/Home/MobileNavbar'
import CareerDetailContent from '../Components/Career/CareerDetailContent'
import NavBar from '../Components/Home/NavBar'
import Footer from '../Components/Footer/Footer'

const CareerDetailPage = () => {
  return (

<div className=' bg-black'>
    <MobileNavbar/>
    <NavBar/>
    <CareerDetailContent/>
    <Footer/>

</div>
  )
}

export default CareerDetailPage
