import { useState, useEffect } from "react";
import "./ideologySection.css";

export default function IdeologySection() {
  const [index, setIndex] = useState(0);

  const images = [
    {
      title: "Ideology",
      src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      title: "Philosophy",
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    },
    {
      title: "Vision",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  // AUTO SLIDE ONLY FOR MOBILE
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="ideology-section">
      {/* MOBILE CAROUSEL */}
      <div className="ideology-wrapper">
      <div
        className="carousel"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((item, i) => (
          <div className="slide" key={i}>
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="desktop-grid">
        {images.map((item, i) => (
          <div className="grid-card" key={i}>
            <img src={item.src} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}