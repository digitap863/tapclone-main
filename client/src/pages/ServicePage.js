import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import ServicesMain from '../Components/Services/ServicesMain'

function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{backgroundColor:"black"}}>
      {/* <NavBar></NavBar> */}
      <ServicesMain></ServicesMain>
      <Footer></Footer>
    </div>
  )
}

export default ServicePage