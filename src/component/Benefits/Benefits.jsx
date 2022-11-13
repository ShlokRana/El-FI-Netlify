import React from 'react';
import "./Benefits.css";
import BenefitsImg from "../../images/benefit.svg";
import blueTickIcon from "../../images/blueTickIcon.svg";

function Benefits() {
  return (
        <div className='main_container_benefits'>
          <div className="benefits_content">
          <div className="benefits_text">
          <div className="benefits_title"><h2 id='benefits_title'>Whole Home Electrification Benefits</h2></div>
          <div className="benefits_para">
            <div className='benefits_para_bullets'>
              <img src={blueTickIcon} alt="blueTickIcon" />
              <span><span className='benefits_para_title'> Avail Net Metering</span> - Net metering allows you to receive credits for selling excess solar electricity generation to your local utility.</span>
            </div>  
            <div className='benefits_para_bullets'>
              <img src={blueTickIcon} alt="blueTickIcon" />
              <span><span className='benefits_para_title'>Earn Investment Tax Credits (ITC)</span> - Solar and energy efficient appliances allow you to claim up to 30% Federal ITC.</span>                  
            </div>
            <div className='benefits_para_bullets'>
              <img src={blueTickIcon} alt="blueTickIcon" />
              <span><span className='benefits_para_title'>Realize State Credits</span> - Your state offers incentives for installing solar, batteries or energy efficient appliances.</span>
            </div>              
            <div className='benefits_para_bullets'>
              <img src={blueTickIcon} alt="blueTickIcon" />
             <span><span className='benefits_para_title'>Lower Carbon </span>- Reduced carbon footprint and improved home value.</span>
            </div>              
          </div>
        </div>
        <div className="benefits_image">
          <img  id="benefits_image"src={BenefitsImg} alt="couple saving their money in a jar" />
        </div>

      </div>
    </div>
  )
}

export default Benefits