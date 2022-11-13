import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { RiArrowRightSFill } from 'react-icons/ri';
import NavbarLinkedinLogoImg from "../../images/NavbarLinkedinLogo.svg";
import NavbarMailLogoImg from "../../images/NavbarMailLogo.svg";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Navbar() {
  const [closeMenu, setCloseMenu] = useState(false);

  const notify = () => toast.success('info@elfihomes.com copied to clipboard', {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });


  return (
    <div className={closeMenu ? "main_container_nav_mobile" : "main_container_nav"} >

      <div className="left_container_nav">
        <div>
          <Link className="logo_nav" to="">
            <div className="logo">EL-FI HOMES</div>
            <div className="logo-slogan">ELECTRIFY HOMES</div>
          </Link>
        </div>
      </div>

      <div className="right_container_nav">
        <div className="nav_menu">
          <Link className="nav_menu_links" to="/">
            <div className="nav_home nav-h-ele">Home</div>
          </Link>
          <Link className="nav_menu_links" to="aboutus">
            <div className="nav_aboutUs nav-h-ele">About Us</div>
          </Link>
          <Link className="nav_menu_links" to="ourServices">
            <div className="nav_services nav-h-ele">Our Services</div>
          </Link>
          <Link className="nav_menu_btn" to="contactUs">
            <button className='contact_btn'>Contact Us</button>
          </Link>
        </div>
      </div>

      <div className="navbar-toggle">
        <div onClick={() => setCloseMenu(!closeMenu)}>
          <FiMenu className="dropdown-btn" />
        </div>
      </div>

      <div className={closeMenu ? "empty_sm_mobile" : "empty_sm"}></div>
      <div className={closeMenu ? "main_container_nav_sm_mobile" : "main_container_nav_sm"} id="main_container_nav_sm" >

        <div className='content_sm'>
          <div>
            <Link className="logo_nav_sm" to="top">
              <div className="logo_sm">EL-FI HOMES</div>
              <div className="logo-slogan_sm">ELECTRIFY HOMES</div>
            </Link>
          </div>

          <div className="top_container_nav_sm">
            <div className="nav_menu_sm">
              <Link className="nav_menu_links_sm" to="top" onClick={() => setCloseMenu(!closeMenu)}>
                <div className="nav_home">Home</div>
                <RiArrowRightSFill className="side_menu_icon" />
              </Link>
              <Link className="nav_menu_links_sm" to="aboutus" onClick={() => setCloseMenu(!closeMenu)}>
                <div className="nav_aboutUs">About Us</div>
                <RiArrowRightSFill className="side_menu_icon" />
              </Link>
              <Link className="nav_menu_links_sm" to="ourServices" onClick={() => setCloseMenu(!closeMenu)}>
                <div className="nav_services">Our Services</div>
                <RiArrowRightSFill className="side_menu_icon" />
              </Link>
            </div>
          </div>

          <div className='nav_bottomsection_sm'>
            <div className='connect_wu_sm'>
              <span>Connect With Us</span>
              <div>
                <a href="/" className="socialmedia_linkedin_sm" ><img src={NavbarLinkedinLogoImg} alt="LinkedinLogo" /></a>
              </div >
              {/* <a href="" className="socialmedia_mail_sm_ft"><img src={NavbarMailLogoImg} alt="MailLogo" /></a>  */}
              <div>
                <CopyToClipboard
                  text="info@elfihomes.com"
                  onCopy={notify}
                >
                  <img src={NavbarMailLogoImg} alt="MailLogo" className="socialmedia_mail_sm" />
                </CopyToClipboard>
              </div>
          
            </div>
            <Link className="nav_menu_btn_sm" to="contactUs" onClick={() => setCloseMenu(!closeMenu)}>
              <button className='contact_btn_sm'>Contact Us</button>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;