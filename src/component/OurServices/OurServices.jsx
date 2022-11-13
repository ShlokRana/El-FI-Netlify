import React from 'react';
import "./OurServices.css";
import OurServicesImg from "../../images/ourServices.svg";
import blueTickIcon from "../../images/blueTickIcon.svg";

function OurServices() {
  return (
    <section className='main_container_services' id="ourServices">
      <div className="services_content">
        <div className="services_text">
          <div className="services_title"><h2 id='services_title'>Our Services</h2></div>
          <div className="services_para">
            <p>We provide electrification packages for single family homeowners. We will add renewable generation and turn your existing
              infrastructure 100% electric and efficient.
            </p>
            <p>We offer design, engineering, installation and maintenance of:
              <div className='services_para_bullets'><img src={blueTickIcon} alt="blueTickIcon" />  Solar Electric Systems, Batteries</div>
              <div className='services_para_bullets'><img src={blueTickIcon} alt="blueTickIcon" />  Electric Heat Pump Water Heater, Dryer and HVAC </div>
              <div className='services_para_bullets'><img src={blueTickIcon} alt="blueTickIcon" />  Electric Stove and EV Chargers</div>
            </p>
            <p>We reduce your energy bill and carbon footprint.</p>
          </div>
        </div>
        <div className="services_image">
          <img id="services_image" src={OurServicesImg} alt="engineer setting up solar panels on roof of home" />
        </div>

      </div>
    </section>
  )
}

export default OurServices