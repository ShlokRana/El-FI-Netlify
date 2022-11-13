import React from 'react';
import "./ElectrifyNeed.css";
import  ElectrifyImg from "../../images/electrify.svg";

function ElectrifyNeed() {
  return (
      <div className='main_container_electrify'>
      <div className="electrify_content">
        <div className="electrify_image">
          <img id="electrify_image" src={ElectrifyImg} alt="solar power equipped engineer" />
        </div>
        <div className="electrify_text">
          <div className="electrify_title"><h2>Why Home Electrification And Why Now? </h2></div>
          <div className="electrify_para">
            <p>Our society faces many challenges like higher energy cost with depleting energy resources, increased carbon emissions and
               climate change. 
            </p>
            <p>Electrify Homes takes an innovative approach to solve the energy challengeby providing onsite renewable energy generation,
               storage and efficient electric appliances. EL-FI will reduce your carbon footprint and offer energy savings.
            </p>
            <p>Electrify Homes can unlock different monetary benefits available for its customers from federal, state and or your local
               utility.The benefits can range from selling electricity, tax rebates, cash backs and participating in programs with local utility. 
            </p>
            <p>You will be a part of society making a push for cleaner energy and to create a circular economy. You will secure our future
                generations and pass a greener-cleaner environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectrifyNeed