import { useState } from "react";
import "./Footer.css";

export default function Footer() {

  const year = new Date().getFullYear();

  const [modalType, setModalType] = useState(null);

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <footer className="footer">

        <div className="footer-container">


        <p>
        © {new Date().getFullYear()} Keeddonest. All rights reserved.
      </p>

      <div className="footer-links">

        <span onClick={() => setModalType("terms")}>
          Terms & Conditions
        </span>

        <span onClick={() => setModalType("privacy")}>
          Privacy Policy
        </span>

      </div>

      </div>


      {/* MODAL */}

      {modalType && (

        <div className="policy-overlay">

          <div className="policy-modal">

            <button className="policy-close" onClick={closeModal}>
              ✕
            </button>

            {modalType === "terms" && (
              <>
                <h2>Terms & Conditions</h2>

                <p>
                  By using the Keeddonest website and enrolling in our programs,
                  you agree to participate respectfully in all activities.
                </p>

                <p>
                  Keeddonest provides educational, developmental, and
                  counseling services intended for learning and well-being.
                </p>

                <p>
                  Program schedules, formats, and availability may change
                  depending on operational needs.
                </p>

                <p>
                  Parents and participants are responsible for providing
                  accurate information during enrollment.
                </p>

                <p>
                  Keeddonest reserves the right to modify programs, policies,
                  or website content at any time.
                </p>

              </>
            )}

            {modalType === "privacy" && (
              <>
                <h2>Privacy Policy</h2>

                <p>
                  Keeddonest respects your privacy and is committed to
                  protecting your personal information.
                </p>

                <p>
                  Information submitted through forms (name, contact number,
                  email, and other details) is used only for communication
                  regarding programs and services.
                </p>

                <p>
                  We do not sell, share, or distribute personal information
                  to third parties.
                </p>

                <p>
                  Data collected is used solely for program communication,
                  guidance, and support.
                </p>

                <p>
                  By submitting information on this website, you consent to
                  the use of your information for communication purposes.
                </p>

              </>
            )}

          </div>

        </div>

      )}

    </footer>
  );
}