import React from 'react'
import './Footer.css'
import logo from '../../assets/Shared/fulllogo.jpg'
function FooterSales() {
    return (
        <div className='footerMain '>
            <div className="logoDiv">
               <img src={logo} className='w-[60%] h-auto object-contain' alt='logo'/>
            </div>
            <div className="addressDiv">
                <h2>COMPANY NAME</h2>
                <p>House No 32/2517A Adwaitham <br />
                    PJ Antony Rd, Palarivattom <br />
                    Kerala 682025</p>
            </div>
            <div className="contactDiv">
                <h2>BUSINESS</h2>
                {/* <p>INFO@TAPCLONE.IN</p>
                <p>+91 9605130922</p> */}
                <a href='mailto:info@tapclone.in' className='text-purple-100 text-sm'>info@tapclone.in</a>
                <a href='tel:+91 9037833933' className='text-purple-100 text-sm mt-3' >+91 9037 833 933</a>

            </div>
            <div className="socialLinks">
                <p>Instagram</p>
                <p>Twitter</p>
                <p>Linkedin</p>
                <p>Facebook</p>
            </div>
        </div>
    )
}

export default FooterSales