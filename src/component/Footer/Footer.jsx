import React  from 'react';
import "./Footer.css";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BiCopyright } from 'react-icons/bi';
import footerLinkedinLogoImg from "../../images/footerLinkedinLogo.svg";
import footerMailLogoImg from "../../images/footerMailLogo.svg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Footer() {

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
    <section className='main_container_footer' id="contactUs">
      <h2 className="footer_title">Contact Us</h2>
      <div className='second_container_footer'>
        <div className="social_links_footer">
          <div><a href="/" className="socialmedia_linkedin_sm_ft"><img src={footerLinkedinLogoImg} alt="LinkedinLogo" /></a>
          </div >
          {/* <a href="mailto:info@elfihomes.com" className="socialmedia_mail_sm_ft"><img src={footerMailLogoImg} alt="MailLogo" /></a>  */}
          <div >
            <CopyToClipboard
              text="info@elfihomes.com"
              onCopy={notify}
            >
              <img src={footerMailLogoImg} alt="MailLogo" className="socialmedia_mail_sm_ft" />
            </CopyToClipboard>
          </div>
        </div>
        <div className='address'>
          <p>273 Santa Barbara Irvine CA 92606,USA</p>
        </div>
      </div>
      <div className="copyright_footer">
        <p>Copyright<span><BiCopyright /></span>2022 EL-FI HOMES. All Rights Reserved.</p>
      </div>


    </section>
  )
}

export default Footer 