import { useState } from "react";
import "./Enrollment.css";

export default function Enrollment() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    alert("This feature is not working right now, It will be available soon!! Please try contact us page to contact for any query right now !");
    // setSubmitted(true);

    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
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

            <div className="highlight-card offline-card">
              <span>🧸</span>
              <div>
                <h4>Early Learning</h4>
                <p>Available in offline mode.</p>
              </div>
            </div>

            <div className="highlight-card offline-card">
              <span>🧠</span>
              <div>
                <h4>Skill Development</h4>
                <p>Available in offline mode.</p>
              </div>
            </div>

            <div className="highlight-card offline-card">
              <span>📚</span>
              <div>
                <h4>Learning Support</h4>
                <p>Available in offline mode.</p>
              </div>
            </div>

            <div className="highlight-card offline-card">
              <span>👶</span>
              <div>
                <h4>Toddler Program</h4>
                <p>Available in offline mode.</p>
              </div>
            </div>

            <div className="highlight-card offline-card">
              <span>🎨</span>
              <div>
                <h4>Free Zone – Creative Expression</h4>
                <p>Available in offline mode.</p>
              </div>
            </div>

            <div className="highlight-card offline-online-card">
              <span>💛</span>
              <div>
                <h4>Counselling & Parenting Guidance</h4>
                <p>Available in both online and offline modes.</p>
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


          {/* Hidden iframe prevents page redirect */}
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

            <input
              name="entry.723751582"
              type="text"
              placeholder="Parent / Participant Name"
              required
            />

            <input
              name="entry.1781759453"
              type="tel"
              placeholder="Contact Number"
              required
            />

            <input
              name="entry.1807633120"
              type="email"
              placeholder="Email Address (Optional)"
            />

            <input
              name="entry.340482430"
              type="text"
              placeholder="City (Optional)"
            />

            <select
              name="entry.127511018"
              defaultValue=""
  required
            >
              <option value="" disabled selected>
                Who is the program for?
              </option>

              <option value="Toddler (2–4 years)">
                Toddler (2–4 years)
              </option>

              <option value="Child (5–12 years)">
                Child (5–12 years)
              </option>

              <option value="Teenager (13–17 years)">
                Teenager (13–17 years)
              </option>

              <option value="Parent / Adult">
                Parent / Adult
              </option>

            </select>


            <select
              name="entry.1485140938"
              defaultValue=""
  required
            >

              <option value="" disabled selected>
                Which program are you interested in?
              </option>

              <option value="Early Learning & Literacy">
                Early Learning & Literacy
              </option>

              <option value="Skill Development Program">
                Skill Development Program
              </option>

              <option value="School Support">
                School Support (Stress-Free Academics)
              </option>

              <option value="Free Zone – Creative Expression">
                Free Zone – Dance & Creative Expression
              </option>

              <option value="Counselling Services">
                Counselling Services
              </option>

              <option value="Parenting Support">
                Parenting Support / Workshops
              </option>

              <option value="Combo Programs">
                Combo Programs
              </option>

              <option value="Need Guidance">
                Not Sure – Need Guidance
              </option>

            </select>


            <select
              name="entry.1573856039"
              defaultValue=""
              required
            >

              <option value="" disabled selected>
                Preferred Mode of Learning
              </option>

              <option value="Online">Online</option>

              <option value="Offline">Offline</option>

              <option value="Either">Either is fine</option>

              <option value="Not sure">Not sure yet</option>

            </select>


            <textarea
              name="entry.628308853"
              rows="4"
              placeholder="What kind of support are you looking for?"
            ></textarea>


            <button type="submit" >
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