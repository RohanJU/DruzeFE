import React from "react";
import shitalimage from "../assets/Images/Shitalbg.png";

function Clintfeedback() {
  return (
    <>
      <div className="client-feedback">
        <div className="feedback-header">
          <h2>Client Feedback</h2>
          <p>
            Discover how our solutions have transformed businesses and enhanced
            growth.
          </p>
        </div>

        <div className="feedback-content">
          <div className="feedback-card">
            <p className="feedback-stars">★★★★★</p>
            <p className="feedback-text">
              The tailored AI solutions provided by Druze Analytics
              significantly improved our user experience and operational
              efficiency.
            </p>
            <div className="client-info">
              <img src={shitalimage} alt="#" className="client-image" />
              <div className="client-details">
                <p className="client-name">Shital Verma</p>
                <p className="client-location">Banglore</p>
              </div>
            </div>
          </div>

          <div className="feedback-card">
            <p className="feedback-stars">★★★★★</p>
            <p className="feedback-text">
              Druze Analytics revolutionized our operations, making data-driven
              decisions easier and faster,driving our business growth to new
              heights.
            </p>
            <div className="client-info">
              <img src=" " alt="#" className="client-image" />
              <div className="client-details">
                <p className="client-name">Sumit Kumar</p>
                <p className="client-location">New Delhi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clintfeedback;
