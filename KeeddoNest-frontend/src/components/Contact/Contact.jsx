import { useState } from "react";
import "./Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔹 DUMMY GOOGLE FORM ENDPOINT
    const formURL =
      "https://docs.google.com/forms/d/e/DUMMY_FORM_ID/formResponse";

    const data = new FormData();

    // 🔹 Dummy entry IDs (replace later)
    data.append("entry.1111111111", formData.name);
    data.append("entry.2222222222", formData.phone);
    data.append("entry.3333333333", formData.email);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    });

    setSubmitted(true);
  };

  return (
    <section className="contact-page">

      <div className="contact-wrapper">

        {/* LEFT SECTION */}
        <div className="contact-left">
          <h1>
            Connect with Our <span>Team</span>
          </h1>

          <p>
            Reach out to Keeddonest for guidance, support, and structured
            learning opportunities in a safe and nurturing environment.
          </p>

          <div className="contact-info">
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@keeddonest.com</p>
            <p>
              <strong>Address:</strong><br />
              Keeddonest Learning Centre,<br />
              Chinchwad, Pune,<br />
              Maharashtra, India
            </p>
          </div>
        </div>

        {/* RIGHT SECTION (FORM CARD) */}
        <div className="contact-form-card">

          <h2>Get In Touch</h2>

          {submitted ? (
            <p className="success-msg">
              Thank you! We will get back to you shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
              />

              <button type="submit">Submit</button>

            </form>
          )}

        </div>

      </div>

    </section>
  );
}