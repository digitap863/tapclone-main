import React from 'react'
import MobileNavbar from '../Components/Home/MobileNavbar'
import NavBar from '../Components/Home/NavBar'
import AboutMain from '../Components/About/AboutMain'
import Footer from '../Components/Footer/Footer'
import PrivacyContent from '../Components/privacypolicy/PrivacyContent'

const Privacyandpolicy = () => {
    return (
        <>
            <div className="homeMin" style={{ backgroundColor: "black" }}>
                <MobileNavbar />
                <NavBar />
                <PrivacyContent />
                <Footer />
            </div>
        </>
    )
}

export default Privacyandpolicy
