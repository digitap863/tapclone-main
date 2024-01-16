import React from "react";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import logo from "../../assets/logomain.png";
import footerlogo from "../../assets/footerlogo.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="py-6">
      <div className="footerMain">
        <div className="logoDiv">
          <img src={footerlogo} alt="logo" />
        </div>
        <div>
          <h4 className="text-[1.125rem] font-[500]">KOCHI</h4>
          <ul className="mt-8 text-[0.875rem] text-[#dbdada] space-y-1">
            <li>Tapclone, House no: 32/2517A</li>
            <li>PJ Antony Rd, Sonia Nagar</li>
            <li>Palarivattom, Kochi, Ernakulam</li>
            <li>Kerala - 682025</li>
            <li>Ph: +0484 796 5300</li>
            <li>Mob: +91 9037 833 933</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.125rem] font-[500]">CALICUT</h4>
          <ul className="mt-8 text-[0.875rem] text-[#dbdada] space-y-1">
            <li>Tapclone, Fortune Business Park</li>
            <li>2nd Floor, Cherooty Nagar</li>
            <li>Asokapuram, </li>
            <li>Calicut-673006</li>
            <li>Ph : 0495 460 5549</li>
            <li>Mob: +91 9037 833 933</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[1.125rem] font-[500]">LETS&nbsp; CONNECT</h4>
          <ul className="mt-8 flex gap-5">
            <li>
              <a
                href="https://www.facebook.com/Tapclone"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.5001 0C6.93972 0 0 6.96873 0 15.5649C0 23.2746 5.58809 29.6596 12.915 30.896V18.8122H9.17591V14.4637H12.915V11.2572C12.915 7.53689 15.1778 5.50951 18.4833 5.50951C20.0664 5.50951 21.4269 5.62797 21.8219 5.68015V9.56891L19.5293 9.57003C17.732 9.57003 17.3855 10.4275 17.3855 11.6862V14.4614H21.6739L21.1146 18.8099H17.3855V31C25.0545 30.0627 31 23.5151 31 15.5604C31 6.96873 24.0603 0 15.5001 0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/tapclone_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M21.8012 15.4975C21.8012 18.9782 18.9796 21.7997 15.499 21.7997C12.0183 21.7997 9.19678 18.9782 9.19678 15.4975C9.19678 12.0168 12.0183 9.19531 15.499 9.19531C18.9796 9.19531 21.8012 12.0168 21.8012 15.4975Z"
                    fill="white"
                  />
                  <path
                    d="M30.2389 4.34933C29.9359 3.5284 29.4526 2.78534 28.8246 2.17542C28.2147 1.54741 27.4721 1.0641 26.6507 0.761146C25.9845 0.502407 24.9837 0.194431 23.1403 0.110529C21.1463 0.0195939 20.5484 0 15.5003 0C10.4516 0 9.8537 0.0190915 7.86015 0.110027C6.01682 0.194431 5.01553 0.502407 4.34984 0.761146C3.5284 1.0641 2.78534 1.54741 2.17592 2.17542C1.54791 2.78534 1.0646 3.5279 0.761146 4.34933C0.502407 5.01553 0.194431 6.01682 0.110529 7.86015C0.0195939 9.8537 0 10.4516 0 15.5003C0 20.5484 0.0195939 21.1463 0.110529 23.1403C0.194431 24.9837 0.502407 25.9845 0.761146 26.6507C1.0646 27.4721 1.54741 28.2147 2.17542 28.8246C2.78534 29.4526 3.5279 29.9359 4.34933 30.2389C5.01553 30.4981 6.01682 30.8061 7.86015 30.89C9.8537 30.9809 10.4511 31 15.4997 31C20.5489 31 21.1468 30.9809 23.1398 30.89C24.9832 30.8061 25.9845 30.4981 26.6507 30.2389C28.2996 29.6028 29.6028 28.2996 30.2389 26.6507C30.4976 25.9845 30.8056 24.9837 30.89 23.1403C30.9809 21.1463 31 20.5484 31 15.5003C31 10.4516 30.9809 9.8537 30.89 7.86015C30.8061 6.01682 30.4981 5.01553 30.2389 4.34933ZM15.5003 25.2083C10.1381 25.2083 5.79124 20.8619 5.79124 15.4997C5.79124 10.1376 10.1381 5.79124 15.5003 5.79124C20.8619 5.79124 25.2088 10.1376 25.2088 15.4997C25.2088 20.8619 20.8619 25.2083 15.5003 25.2083ZM25.5926 7.67627C24.3396 7.67627 23.3237 6.66041 23.3237 5.4074C23.3237 4.1544 24.3396 3.13853 25.5926 3.13853C26.8456 3.13853 27.8615 4.1544 27.8615 5.4074C27.861 6.66041 26.8456 7.67627 25.5926 7.67627Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/82332328/admin/feed/posts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <path
                    d="M15.5 0C6.9409 0 0 6.9409 0 15.5C0 24.0591 6.9409 31 15.5 31C24.0591 31 31 24.0591 31 15.5C31 6.9409 24.0591 0 15.5 0ZM10.9959 23.4316H7.22092V12.0746H10.9959V23.4316ZM9.10852 10.5238H9.08392C7.81717 10.5238 6.99789 9.65179 6.99789 8.56194C6.99789 7.4475 7.84224 6.59961 9.13359 6.59961C10.4249 6.59961 11.2196 7.4475 11.2442 8.56194C11.2442 9.65179 10.4249 10.5238 9.10852 10.5238ZM24.6076 23.4316H20.8331V17.3559C20.8331 15.829 20.2865 14.7876 18.9207 14.7876C17.8779 14.7876 17.2568 15.4901 16.9839 16.1681C16.8841 16.4108 16.8597 16.75 16.8597 17.0894V23.4316H13.085C13.085 23.4316 13.1344 13.1401 13.085 12.0746H16.8597V13.6826C17.3613 12.9088 18.2589 11.8081 20.2617 11.8081C22.7453 11.8081 24.6076 13.4312 24.6076 16.9195V23.4316Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
        <h2 className="text-center text-[1rem] ml-12 pt-8 text-[#dbdada] ">© 2022 | Tapclone | All Rights Reserved</h2>

      {/* <div className="addressDiv">
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
                <p>CAREER</p>
                <p>BLOG</p>
                <a href='/contact'>CONTACT</a>
            </div>
            <div className="socialLinks">
                <a href='https://www.instagram.com/tapclone_official/' target="_blank"><IoLogoInstagram size={25}/></a>
                <p>Twitter</p>
                <a href='https://www.linkedin.com/company/82332328/admin/feed/posts/' target="_blank"><LiaLinkedin size={32}/></a>
                <a href='https://www.facebook.com/Tapclone' target="_blank"><LiaFacebook size={32}/></a>

            </div> */}
    </div>
  );
}

export default Footer;
