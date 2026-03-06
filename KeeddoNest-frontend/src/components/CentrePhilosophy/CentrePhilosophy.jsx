import { useState, useEffect } from "react";
import "./centrePhilosophy.css";

export default function CentrePhilosophy() {

  const slides = [
    "One trusted space for children and parents. Psychologist-led, child-centered, family-focused. A safe nest where growing minds feel understood and supported.",
    
    "At KeeddoNest emotional safety comes first and learning follows naturally. Every child is respected and every parent is supported without judgment.",
    
    "We nurture confident children, emotionally aware families and joyful learning spaces — all under one roof."
  ];

  const [index, setIndex] = useState(0);

  // auto slide for mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="philosophy-section">

      <div className="philosophy-wrapper">

        {/* LEFT SIDE */}
        <div className="philosophy-left">
          <h1>
            One Centre <br />
            One Philosophy <br />
            One Safe Nest
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="philosophy-right">

          {/* DESKTOP TEXT */}
          <div className="philosophy-text">
            {slides.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          {/* MOBILE CAROUSEL */}
          <div className="philosophy-carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((text, i) => (
                <div className="carousel-slide" key={i}>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}