import { useState } from "react";
import "./Enrollment.css";

export default function Enrollment() {

  const [submitted, setSubmitted] = useState(false);
  const [formStartTime] = useState(Date.now());

  const handleSubmit = (e) => {

    const form = e.target;
    const honeypot = form.company.value;
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
    }, 700);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
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

        </div>


        {/* RIGHT FORM */}

        <div className="enroll-right">

          <h2>Program Enrollment Form</h2>

          <p className="form-time">
            ⏱ Takes less than 30 seconds to complete
          </p>

          <iframe
            name="hidden_iframe"
            style={{ display: "none" }}
            title="hidden_iframe"
          ></iframe>


          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLSea0f7NBtf6tW_22ibo1hv11k7S4wQOUVpOFQnzLUq-UFae5A/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >

            {/* Honeypot */}

            <input
              type="text"
              name="company"
              style={{ display: "none" }}
              tabIndex="-1"
              autoComplete="off"
            />

            {/* Parent Name */}

            <input
              name="entry.723751582"
              type="text"
              placeholder="Parent / Participant Name"
              required
            />

            {/* Mobile */}

            <input
              name="entry.1781759453"
              type="tel"
              placeholder="Mobile Number"
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              required
            />

            {/* Email */}

            <input
              name="entry.1807633120"
              type="email"
              placeholder="Email Address"
              required
            />

            {/* City */}

            <input
              name="entry.340482430"
              type="text"
              placeholder="City"
              required
            />

            {/* Who is program for */}

            <select name="entry.127511018" defaultValue="" required>

              <option value="" disabled>
                Who is the program for?
              </option>

              <option value="Toddler (2-4 years)">
                Toddler (2-4 years)
              </option>

              <option value="Child (5-12 years)">
                Child (5-12 years)
              </option>

              <option value="Teenager (13-17 years)">
                Teenager (13-17 years)
              </option>

              <option value="Parent">
                Parent
              </option>

            </select>


            {/* Program */}

            <select name="entry.1485140938" defaultValue="" required>

              <option value="" disabled>
                Which program are you interested in?
              </option>

              <option value="Early Learning & Literacy">
                Early Learning & Literacy
              </option>

              <option value="Skill Development Program">
                Skill Development Program
              </option>

              <option value="School Support (Stress-Free Academics)">
                School Support (Stress-Free Academics)
              </option>

              <option value="Free Zone – Dance & Creative Expression">
                Free Zone – Dance & Creative Expression
              </option>

              <option value="Counselling Services">
                Counselling Services
              </option>

              <option value="Parenting Support / Workshops">
                Parenting Support / Workshops
              </option>

              <option value="Combo Programs">
                Combo Programs
              </option>

              <option value="Not Sure – Need Guidance">
                Not Sure – Need Guidance
              </option>

            </select>


            {/* Mode */}

            <select name="entry.1573856039" defaultValue="" required>

              <option value="" disabled>
                Preferred Mode of Learning
              </option>

              <option value="Online">Online</option>

              <option value="Offline">Offline</option>

              <option value="Either is fine">Either is fine</option>

              <option value="Not sure yet">Not sure yet</option>

            </select>


            {/* Support */}

            <textarea
              name="entry.628308853"
              rows="4"
              placeholder="What kind of support are you looking for?"
              required
            ></textarea>


            <button type="submit">
              Submit Enrollment Request
            </button>

          </form>

        </div>

      </div>


      {/* SUCCESS MODAL */}

      {submitted && (

        <div className="success-overlay">

          <div className="success-box">

            <h2>Thank You!</h2>

            <p>
              Thank you for your interest in Keeddonest.
            </p>

            <p>
              Our team will review your response and contact you soon with
              program details and next steps.
            </p>

            <button onClick={() => setSubmitted(false)}>
              Close
            </button>

          </div>

        </div>

      )}

    </section>

  );
}