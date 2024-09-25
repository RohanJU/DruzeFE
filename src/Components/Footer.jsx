import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div id="about" className="footer-container">
        <section className="footer-section">
          <div className="footer-grid">
            <div className="footer-branding">
              <h1>Druze Analytics</h1>
              <p>
                Druze Analytics is a cutting-edge technology company dedicated
                to transforming businesses through innovative AI-driven
                solutions. We specialize in creating tailored websites and
                software that leverage the power of artificial intelligence to
                enhance user experiences, optimize operations, and drive growth.
                At Druze Analytics, we combine our technical expertise with a
                creative approach to deliver scalable, robust solutions that
                meet the unique needs of each client. Our goal is to empower
                businesses to embrace the future by integrating AI seamlessly
                into their strategies, enabling them to stay ahead in the
                competitive digital landscape.
              </p>
              <br />
            </div>
            <div className="footer-links-grid">
              <div className="footer-links">
                <h1 className="footer-title">Important Links</h1>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Login</li>
                </ul>
              </div>
              <div className="footer-links">
                <h1 className="footer-title">ContactUs</h1>
                <div className="contact-info">
                  <CiLocationOn />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="contact-info">
                  <FaFacebook />
                  <p>+917204309993</p>
                </div>
              </div>
              <div className="footer-links">
                <h1 className="footer-title">Links</h1>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Services</li>
                  <li>About us</li>
                </ul>
              </div>
              <div className="social-links-section">
                <h1 className="footer-title">Social Links</h1>
                <div className="flex flex-col gap-3">
                  <h1>Subscribe to our newsletter</h1>
                  <input
                    className="subscribe-input"
                    type="text"
                    placeholder="Email"
                  />
                  <div className="social-icons">
                    <a href="#">
                      <FaFacebook className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaInstagram className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaLinkedin className="text-3xl" />
                    </a>
                    <a href="#">
                      <FaGoogle className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">©️ 2024 DruzeAnalytics || Rohan</div>
        </section>
      </div>
    </>
  );
}

export default Footer;
