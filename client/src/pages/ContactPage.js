import React, { useEffect } from 'react'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div style={{backgroundColor:"black",width:'100%',overflowX:'hiden'}}>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default ContactPage