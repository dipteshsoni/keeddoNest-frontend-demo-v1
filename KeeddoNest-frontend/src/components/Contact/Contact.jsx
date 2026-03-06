import "./contact.css";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Any question or remarks? Just write us a message.
      </p>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <FaPhone />
            <span>+91 98765 43210</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>info@keeddonest.in</span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>
              Keeddonest Learning Centre <br />
              Pune, Maharashtra <br />
              India
            </span>
          </div>

          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form
            action="https://docs.google.com/forms/d/e/FORM_ID/formResponse"
            method="POST"
            target="_blank"
          >
            <div className="form-group">
              <label>Name</label>
              <input
                name="entry.111111"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                name="entry.222222"
                type="tel"
                placeholder="+91"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="entry.333333"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="entry.444444"
                rows="4"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
