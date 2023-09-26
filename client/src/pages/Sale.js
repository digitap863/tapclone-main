import React, { useEffect } from 'react'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/Home/NavBar'
import Projects from '../Components/Projects/Projects'
import SalesMain from '../Components/Sales/SalesMain';
import FooterSales from '../Components/Footer/FooterSales';

function Sales() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='bg-black'>
        {/* <NavBar></NavBar> */}
        <SalesMain/>
        <FooterSales/>
    </div>
  )
}

export default Sales