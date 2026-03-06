import "./homeHero.css";
import KeeddonestImage1 from "../../assets/keeddoNestImage01.jpeg";
// import KeeddoNestLogo from "../../assets/KeeddonestLogo.jpeg";

export default function HomeHero() {
  return (
    <section className="home-hero">

      {/* LEFT IMAGE */}
      <div className="hero-image">
        <img
          src={KeeddonestImage1}
          alt="placeholder"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="hero-content">
        <h1 className="introHeading">Welcome to KeeddoNest</h1>

        <h4 className="introSubHeading">A Psychologist-Led Space for Emotional, Learning & Life Skills Development 🪺</h4>

        <p className="introPara">
          KeeddoNest is not just a learning center.
It is a safe developmental space where children, parents, and adults are supported emotionally, socially, physically, and academically — without pressure, judgment, or comparison.
<br/>
We believe that children grow best when they feel emotionally secure first. Learning, confidence, communication, and discipline naturally follow when a child feels understood.
        </p>
      </div>

    </section>
  );
}