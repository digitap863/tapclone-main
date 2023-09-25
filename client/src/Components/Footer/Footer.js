import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footerMain '>
            <div className="logoDiv">
                <p>LOGO</p>
            </div>
            <div className="addressDiv">
                <h2>COMPANY NAME</h2>
                <p>House No 32/2517A Adwaitham <br />
                    PJ Antony Rd, Palarivattom <br />
                    Kerala 682025</p>
            </div>
            <div className="contactDiv">
                <h2>BUSINESS</h2>
                <p>INFO@TAPCLONE.IN <br />
                    4308230340932</p>

            </div>
            <div className="navLinksDiv">
                <p>HOME</p>
                <p>SERVICES</p>
                <p>WORK</p>
                <p>CAREER</p>
                <p>BLOG</p>
                <p>CONTACT</p>
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

export default Footer