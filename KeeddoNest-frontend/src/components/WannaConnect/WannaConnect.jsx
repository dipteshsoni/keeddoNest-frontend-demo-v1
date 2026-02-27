import { Link } from "react-router-dom";
import "./WannaConnect.css";

export default function WannaConnect() {
  return (
    <section className="connect-section">

      <div className="connect-wrapper">

        <h2 className="connect-title">Wanna Connect?</h2>

        <div className="connect-cards">

          {/* ONLINE CARD */}
          <div className="connect-card">
            <h3>Online Sessions</h3>
            <p>
              Flexible learning from the comfort of your home. Structured,
              guided and interactive sessions designed to nurture growth
              through meaningful engagement and consistent mentorship.
            </p>
            <Link to="/enrollment?type=online">
              <button>Join Online</button>
            </Link>
          </div>

          {/* OFFLINE CARD */}
          <div className="connect-card">
            <h3>Offline Sessions</h3>
            <p>
              Experience in-person learning in a safe and supportive
              environment. Focused attention, structured programs and
              community-driven development under guided supervision.
            </p>
            <Link to="/enrollment?type=offline">
              <button>Join Offline</button>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
}