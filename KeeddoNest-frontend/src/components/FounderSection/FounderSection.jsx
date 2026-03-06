import "./founderSection.css";

export default function FounderSection() {
  return (
    <section className="founder-section">

      <div className="founder-wrapper">

        <h2 className="founder-title">Meet Our Founder</h2>

        <div className="founder-grid">

          {/* CARD 1 */}
          <div className="founder-card">
            <div className="founder-image">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Founder"
              />
            </div>

            <div className="founder-content">
              <h1>Founder Name</h1>
              <h2>Designation</h2>

              <p>
                A passionate mentor dedicated to creating a safe and meaningful
                learning environment. With a strong belief in balanced growth,
                the founder focuses on guiding individuals toward clarity,
                confidence and long-term personal development.
              </p>

              <div className="founder-contact">
                Contact: +91 98765 43210
              </div>
            </div>
          </div>


          {/* CARD 2 */}
          <div className="founder-card">
            <div className="founder-image">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                alt="Founder"
              />
            </div>

            <div className="founder-content">
              <h1>Founder Vision</h1>
              <h2>Guiding Philosophy</h2>

              <p>
                Built on the idea of one centre and one philosophy, this journey
                is about nurturing individuals through compassion, structure and
                mindful transformation while maintaining a strong sense of
                community and emotional safety.
              </p>

              <div className="founder-contact">
                Contact: info@keeddonest.in
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}