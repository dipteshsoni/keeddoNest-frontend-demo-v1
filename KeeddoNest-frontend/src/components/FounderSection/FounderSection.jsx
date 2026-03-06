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
              <h1>Soumya</h1>
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


          {/* CARD 2 */}
          <div className="founder-card">
            <div className="founder-image">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
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

        </div>

      </div>
    </section>
  );
}