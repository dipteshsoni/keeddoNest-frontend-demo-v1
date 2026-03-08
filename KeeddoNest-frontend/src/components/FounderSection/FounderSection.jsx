import "./founderSection.css";
import ashuti from "../../assets/Ashuti.png";
import somya from "../../assets/Somya.jpeg";

export default function FounderSection() {
  return (
    <section className="founder-section">

      <div className="founder-wrapper">

        <h2 className="founder-title">Meet Our Founder</h2>

        <div className="founder-grid">
          {/* CARD 2 */}
          <div className="founder-card">
            <div className="founder-image">
              <img
                src={ashuti}
                alt="Founder"
              />
            </div>

            <div className="founder-content">
              <h1>Ashuti Dwivedi</h1>
              <h2>Founder</h2>
              <div className="founder-contact">
                Pyschologist & Early childhood educator.
              </div>

              <p>
                Built on the idea of one centre and one philosophy, this journey
                is about nurturing individuals through compassion, structure and
                mindful transformation while maintaining a strong sense of
                community and emotional safety.
              </p>

              
            </div>
          </div>

          {/* CARD 1 */}
          <div className="founder-card">
            <div className="founder-image">
              <img
                src={somya}
                alt="Founder"
              />
            </div>

            <div className="founder-content">
              <h1>Somyaa Lalwani (Priyanka)</h1>
              <h2>Founder</h2>
              <div className="founder-contact">
                Director of People & Brand Strategy and Caregiver.
              </div>

              <p>
                A passionate mentor dedicated to creating a safe and meaningful
                learning environment. With a strong belief in balanced growth,
                the founder focuses on guiding individuals toward clarity,
                confidence and long-term personal development.
              </p>

              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}