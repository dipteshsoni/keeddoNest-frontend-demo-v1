import "./contact.css";
import { useState } from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  const [formStartTime] = useState(Date.now());
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdL_zk4518hsFbr5_yPjSkk8BhNfrkeVZBB26D9PP26_6MhMg/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: data,
      },
    );

    
  const honeypot = form.company?.value;
  const timeTaken = Date.now() - formStartTime;

  if (honeypot) {
    e.preventDefault();
    return;
  }

  if (timeTaken < 3000) {
    e.preventDefault();
    alert("Please take a moment to fill the form properly.");
    return;
  }
    setTimeout(() => {
    setSubmitted(true);
  }, 800);

    form.reset();
    setShowModal(true);
  };
  return (
    <section className="contact-section">
      <h1 className="contact-title">Wanna Connect !!</h1>
      <p className="contact-subtitle">
        Any doubt or query? Feel free to reach out to us. We are here to help
        you and your child on this wonderful learning journey.
      </p>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <FaPhone />
            <span>+91 94246 95252</span>
          </div>
          <div className="info-item">
            <FaPhone />
            <span>+91 62659 59841</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>keeddonest@gmail.com</span>
          </div>

          <div className="info-item">
            <FaInstagram />
            <span>@keeddonest</span>
            {/* <FaFacebook />
            <FaLinkedin /> */}
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>
              Main Office : 1st Floor, Samdariya Gold <br />
              Rewa, Madhya Pradesh <br />
              India
            </span>
          </div>

          {/* <div className="social-icons">
            <FaInstagram />
            <span>
              @keeddonest
            </span>
            {/* <FaFacebook />
            <FaLinkedin /> *
          </div>
        </div> */}
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                name="entry.210529627"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                name="entry.1744770078"
                type="tel"
                placeholder="Contact Number"
                pattern="[6-9]{1}[0-9]{9}"
                maxLength="10"
                required
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Please enter a valid 10-digit mobile number",
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                name="entry.1298067567"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="entry.1870460633"
                rows="4"
                placeholder="Write your message..."
                required
              />
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}

      {showModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <h2>Message Sent Successfully 🎉</h2>

            <p>
              Thank you for reaching out to Keeddonest. Our team will contact
              you soon.
            </p>

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
