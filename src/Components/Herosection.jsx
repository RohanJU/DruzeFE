import React from "react";
import Customwebsiteimage from "../assets/Images/Customwebsite.png";
import Dataanalyticsimage from "../assets/Images/Dataanalytics.png";
import Robustsoftwareimages from "../assets/Images/Roobustsoftware.png";
function Herosection() {
  return (
    <>
      <div id="Home" className="hero-section">
        <div className="hero-content">
          <h1>
            Transform Your
            <br /> Business with AI Solutions
          </h1>
          <p>Innovative analytics and tailored software for growth.</p>
          <button className="get-started-button">Get Started</button>
        </div>
        <div className="features">
          <div className="feature-card">
            <img src={Dataanalyticsimage} alt="Analytics" />
            <p>Data analytics to enhance your business strategy.</p>
          </div>
          <div className="feature-card">
            <img src={Customwebsiteimage} alt="Custom Websites" />
            <p>Custom websites that elevate user experiences seamlessly.</p>
          </div>
          <div className="feature-card">
            <img src={Robustsoftwareimages} alt="Robust Software Solutions" />
            <p>Robust software solutions for optimized operations.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Herosection;
