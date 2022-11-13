import React from 'react';
import "./AboutUs.css";
import AboutImg from "../../images/about.svg";


function About() {
  return (
    <section className='main_container_about' id="aboutus">
      <div className="about_content">
        <div className="about_image">
          <img id="about_image"src={AboutImg} alt="solar power equipped city " />
        </div>
        <div className="about_text">
          <div className="about_title"><h2>Who We Are</h2></div>
          <div className="about_para">
            <p>We are a tech-enabled electrical contractor for your home electrification,   providing quality engineering services, selecting
              the best product for your needs and transferring cost-efficient service to our customers. We listen to our customers, offer
              transparent sales and carry passion for decarbonizing single family homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About