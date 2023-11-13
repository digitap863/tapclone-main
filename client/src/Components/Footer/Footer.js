
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
                <p>House No 32/2517A Adwaitham <br />
                    PJ Antony Rd, Palarivattom <br />
                    Kerala 682025</p>
            </div>
            <div className="contactDiv">
                <h2>BUSINESS</h2>
                <p>INFO@TAPCLONE.IN</p>
                <a href='tel:+91 9037833933'>+91 9037 833 933</a>

            </div>
            <div className="navLinksDiv">
                <a href='/'>HOME</a>
                <a href='/services'>SERVICES</a>
                {/* <p>CAREER</p> */}
                {/* <p>BLOG</p> */}
                <a href='/contact'>CONTACT</a>
            </div>
            <div className="socialLinks">
                <a href='https://www.instagram.com/tapclone_official/' target="_blank">Instagram</a>
                {/* <p>Twitter</p> */}
                <a href='https://www.linkedin.com/company/82332328/admin/feed/posts/' target="_blank">Linkedin</a>
                <a href='https://www.facebook.com/Tapclone' target="_blank">Facebook</a>

            </div>
        </div>
    )
}

export default Footer