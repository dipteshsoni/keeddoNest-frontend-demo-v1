import { useState } from "react";
import "./Enrollment.css";

export default function Enrollment() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    participantType: "",
    programInterest: "",
    mode: "",
    support: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const formURL =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

  const data = new FormData();

  data.append("entry.111", formData.name);
  data.append("entry.222", formData.phone);
  data.append("entry.333", formData.email);
  data.append("entry.444", formData.city);
  data.append("entry.555", formData.participantType);
  data.append("entry.666", formData.programInterest);
  data.append("entry.777", formData.mode);
  data.append("entry.888", formData.support);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: data
  });

  setSubmitted(true);

  // reset form
  setFormData({
    name: "",
    phone: "",
    email: "",
    city: "",
    participantType: "",
    programInterest: "",
    mode: "",
    support: ""
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
};

  return (
    <section className="enroll-page">
      <div className="enroll-container">
        {/* LEFT SIDE */}
        <div className="enroll-left">
          <h1>Start Your Learning Journey</h1>

          <p className="intro">
            Keeddonest is a nurturing space where learning meets emotional
            well-being. Our programs help children grow with confidence,
            creativity, and strong emotional foundations.
          </p>

          <div className="program-highlights">
            <div className="highlight-card">
              <span>🧸</span>
              <div>
                <h4>Early Learning</h4>
                <p>Strong emotional and cognitive foundations.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span>🧠</span>
              <div>
                <h4>Skill Development</h4>
                <p>Communication, confidence and leadership.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span>📚</span>
              <div>
                <h4>Stress-Free Academics</h4>
                <p>Concept clarity without pressure.</p>
              </div>
            </div>

            <div className="highlight-card">
              <span>💛</span>
              <div>
                <h4>Parent Support</h4>
                <p>Counselling and parenting guidance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="enroll-right">
          <h2>Program Enrollment Form</h2>
          <p className="form-time">
⏱ Takes less than 30 seconds to complete
</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Parent / Participant Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address (Optional)"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="text"
              name="city"
              placeholder="City (Optional)"
              value={formData.city}
              onChange={handleChange}
            />

            <select
              name="participantType"
              value={formData.participantType}
              onChange={handleChange}
              required
            >
              <option value="">Who is the program for?</option>
              <option>Toddler (2–4 years)</option>
              <option>Child (5–12 years)</option>
              <option>Teenager (13–17 years)</option>
              <option>Parent / Adult</option>
            </select>

            <select
              name="programInterest"
              value={formData.programInterest}
              onChange={handleChange}
              required
            >
              <option value="">Program Interest</option>
              <option>Early Learning & Literacy</option>
              <option>Skill Development Program</option>
              <option>School Support (Stress-Free Academics)</option>
              <option>Free Zone – Dance & Creative Expression</option>
              <option>Counselling Services</option>
              <option>Parenting Support / Workshops</option>
              <option>Combo Programs</option>
              <option>Not Sure – Need Guidance</option>
            </select>

            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Mode</option>
              <option>Online</option>
              <option>Offline</option>
              <option>Either is fine</option>
              <option>Not sure yet</option>
            </select>

            <textarea
              name="support"
              rows="4"
              placeholder="What kind of support are you looking for?"
              value={formData.support}
              onChange={handleChange}
            />

            <button type="submit">Submit Enrollment Request</button>
          </form>
        </div>
      </div>

      {/* SUCCESS MODAL */}

      {submitted && (
        <div className="success-overlay">
          <div className="success-box">
            <h2>Thank You!</h2>

            <p>Thank you for your interest in Keeddonest.</p>

            <p>
              Our team will review your response and contact you soon with
              program details and next steps.
            </p>

            <button onClick={() => setSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}
