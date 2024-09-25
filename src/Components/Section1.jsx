import React from "react";
import Robotimages from "../assets/Images/vecteezy_ai-conversations-dynamic-interactions-of-two-robots-created_23841798.png";
import Robotimage from "../assets/Images/vecteezy_modern-technology-workspace-cartoon-clip-art_48970815.png";
function Section1() {
  return (
    <>
      <section id="services" className="Empowering-Businesses">
        <div className="Empowering-Businesses-header">
          <h2>Empowering Businesses with AI Solutions</h2>
        </div>
        <div className="Empowering-Businesses-content">
          <div className="Empowering-Businesses-content-block">
            <h3>Transforming Business with Technology</h3>
            <p>
              At Druze Analytics, we specialize in innovative AI-driven
              solutions, data analytics, and tailored software, empowering
              businesses to optimize operations and enhance user experiences in
              a competitive digital landscape.
            </p>
          </div>
          <div className="Empowering-Businesses-content-block">
            <h3>Innovative AI-Driven Solutions</h3>
            <p>
              Our mission is to seamlessly integrate AI into business
              strategies, helping clients stay ahead in the digital landscape
              with scalable and robust solutions tailored to their unique needs.
            </p>
          </div>
        </div>
        <div className="Empowering-Businesses-vid">
          {/* Embedded YouTube Video */}
          <div className="contact-video">
            <iframe
              width="1000"
              height="500"
              src="https://www.youtube.com/embed/hLYEO2UfacI?si=uCgF8YukT6PwJ8XJ"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="Innovative-AI-Solutions">
        <div className="Innovative-AI-Solutions-header">
          <h2>Innovative AI Solutions</h2>
          <p>
            Transform your business with our cutting-edge AI-driven data
            analytics and tailored software solutions.
          </p>
        </div>
        <div className="Innovative-AI-Solution-content">
          <div className="Innovative-AI-Solution-content-card">
            <div className="Innovative-AI-Solution-content-card-header">
              <h4>Tailored Software Development</h4>
              <p>
                Custom software solutions designed to meet your unique business
                needs and drive operational efficiency.
              </p>
            </div>

            <div className="Innovative-AI-Solution-content-card-images">
              <img src={Robotimages} alt="image" />
            </div>
          </div>
          <div className="Innovative-AI-Solution-content-card">
            <div className="Innovative-AI-Solution-content-card-header">
              <h4>Data Analytics Solutions</h4>
              <p>
                Leverage data insights to optimize operations and enhance user
                experiences for sustainable growth.
              </p>
            </div>
            <div className="Innovative-AI-Solution-content-card-images">
              <img src={Robotimage} alt="image" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
