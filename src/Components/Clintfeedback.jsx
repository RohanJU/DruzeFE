import React from "react";

function Clintfeedback() {
  return (
    <>
     <div className="client-feedback">
      <div className="feedback-header">
        <h2>Client Feedback</h2>
        <p>Discover how our solutions have transformed businesses and enhanced growth.</p>
      </div>

      <div className="feedback-content">
        <div className="feedback-card">
          <p className="feedback-stars">★★★★★</p>
          <p className="feedback-text">
            The tailored AI solutions provided by Druze Analytics significantly improved our user experience and operational efficiency, driving our business growth to new heights.
          </p>
          <div className="client-info">
            <img src=" " alt="Client 1" className="client-image" />
            <div className="client-details">
              <p className="client-name">Maria Smith</p>
              <p className="client-location">Los Angeles</p>
            </div>
          </div>
        </div>

        <div className="feedback-card">
          <p className="feedback-stars">★★★★★</p>
          <p className="feedback-text">
            Druze Analytics revolutionized our operations, making data-driven decisions easier and faster.
          </p>
          <div className="client-info">
            <img src=" " alt="Client 2" className="client-image" />
            <div className="client-details">
              <p className="client-name">Alex Johnson</p>
              <p className="client-location">New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Clintfeedback;
