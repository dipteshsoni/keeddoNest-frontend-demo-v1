import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OfferingSection.css";

export default function OfferingSection() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const offers = [
  {
    title: "Early Learning",
    link: "/keeddoNest-frontend-demo-v1/earlyLearning",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7"
  },
  {
    title: "Free Zone",
    link: "/keeddoNest-frontend-demo-v1/freeZone",
    img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7"
  },
  {
    title: "Learning Support",
    link: "/keeddoNest-frontend-demo-v1/learningSupport",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  },
  {
    title: "Skill Development",
    link: "/keeddoNest-frontend-demo-v1/skillDevelopment",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },
  {
    title: "Toddler Program",
    link: "/keeddoNest-frontend-demo-v1/toddlerProgram",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  },
  {
    title: "Counselling Services & Seminar Programs",
    link: "/keeddoNest-frontend-demo-v1/counsellingServices",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];
  // AUTO SLIDE
useEffect(() => {
  const timer = setInterval(() => {
    setIndex((prev) => {
      const isDesktop = window.innerWidth >= 768;
      const maxIndex = isDesktop ? offers.length - 3 : offers.length - 1;

      return prev >= maxIndex ? 0 : prev + 1;
    });
  }, 3500);

  return () => clearInterval(timer);
}, [offers.length]);

const next = () => {
  const isDesktop = window.innerWidth >= 768;
  const maxIndex = isDesktop ? offers.length - 3 : offers.length - 1;

  setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
};

const prev = () => {
  const isDesktop = window.innerWidth >= 768;
  const maxIndex = isDesktop ? offers.length - 3 : offers.length - 1;

  setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
};

  return (
    <section className="offers-section">

      <h2 className="offers-title">What We Offer</h2>

      <div className="offers-wrapper">

  <button className="nav-btn left" onClick={prev}>◀</button>

  <div className="carousel-viewport">
    <div
      className="offers-carousel"
      style={{
        transform: `translateX(-${
          index * (window.innerWidth >= 768 ? 33.3333 : 100)
        }%)`
      }}
    >
      {offers.map((item, i) => (
        <div
          className="offer-card"
          key={i}
          onClick={() => navigate(item.link)}
        >
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  </div>

  <button className="nav-btn right" onClick={next}>▶</button>

</div>
    </section>
  );
}