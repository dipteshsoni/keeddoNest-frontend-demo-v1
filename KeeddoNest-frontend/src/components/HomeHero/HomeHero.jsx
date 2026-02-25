import "./homeHero.css";

export default function HomeHero() {
  return (
    <section className="home-hero">

      {/* LEFT IMAGE */}
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
          alt="placeholder"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="hero-content">
        <h1>Welcome to Keeddonest</h1>

        <h2>Brief intro this is Keeddonest</h2>

        <p>
          Keeddonest is a space built to nurture growth, learning and mindful
          development. Through structured programs and a strong philosophy, it
          aims to create meaningful transformation while keeping education
          engaging, balanced and purposeful for every learner.
        </p>
      </div>

    </section>
  );
}