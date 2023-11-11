
import React from 'react'
import logo from '../../assets/logomain.png'
import './Footer.css'
function Footer() {
    return (
        <div className='footerMain '>
            <div className="logoDiv">
                <img src={logo} alt='logo'/>
            </div>
            <div className="addressDiv">
                <h2>COMPANY NAME</h2>
                <p>House No 32/2517A Adwaitham <br />
                    PJ Antony Rd, Palarivattom <br />
                    Kerala 682025</p>
            </div>
            <div className="contactDiv">
                <h2>BUSINESS</h2>
                <p>INFO@TAPCLONE.IN</p>
                <p>+91 9605130922</p>

            </div>
            <div className="navLinksDiv">
                <a href='/'>HOME</a>
                <a href='/services'>SERVICES</a>
                {/* <p>CAREER</p> */}
                {/* <p>BLOG</p> */}
                <a href='/contact'>CONTACT</a>
            </div>
            <div className="socialLinks">
                <a href='https://www.instagram.com/tapclone_official/'>Instagram</a>
                {/* <p>Twitter</p> */}
                <a href='https://www.linkedin.com/company/82332328/admin/feed/posts/'>Linkedin</a>
                <a href='https://www.facebook.com/Tapclone'>Facebook</a>

            </div>
        </div>
    )
}

export default Footer