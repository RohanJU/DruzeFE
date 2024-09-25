import analyticsimages from "../assets/Images/vecteezy_3d-character-person-doing-online-store-digital-marketing_11665514.png";

function ContactForm() {
  return (
    <div id="contact" className="contact-container">
      <h1 className="contact-heading">Get in Touch with Us</h1>
      <p className="contact-subheading">
        Reach out for innovative AI-driven solutions tailored to your needs.
      </p>
      <div className="contact-content">
        {/* Contact Form Section */}
        <div className="contact-form">
          <label htmlFor="name" className="form-label">
            Your First Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            placeholder="Enter your first name"
          />

          <label htmlFor="email" className="form-label">
            Your Email Address*
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email address"
          />

          <label htmlFor="message" className="form-label">
            Your Message*
          </label>
          <textarea
            id="message"
            className="form-textarea"
            placeholder="Type your message here"
          ></textarea>

          <button type="submit" className="submit-button">
            Submit Your Inquiry
          </button>
        </div>

        {/* Contact Image Section */}
        <div className="contact-image">
          <img
            src={analyticsimages}
            alt="3D Character Person Doing Online Store Digital Marketing"
            className="image"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
