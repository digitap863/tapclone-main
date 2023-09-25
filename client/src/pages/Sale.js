import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import Projects from '../Components/Projects/Projects'
import SalesMain from '../Components/Sales/SalesMain';

function Sales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-black'>
        {/* <NavBar></NavBar> */}
        <SalesMain/>
        <Footer></Footer>
    </div>
  )
}

export default Sales