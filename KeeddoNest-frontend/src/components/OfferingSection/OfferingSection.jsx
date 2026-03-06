import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./OfferingSection.css";

import EarlyLearning from "../../assets/EarlyLearning.jpeg";
import FreeZone from "../../assets/FreeZone.jpeg";
import LearningSupport from "../../assets/SchoolSupport.jpeg";
import SkillDevelopment from "../../assets/SkillDevelopment.jpeg";
import ToddlerProgram from "../../assets/ToddlerProgram.jpeg";
import CounsellingServices from "../../assets/CounsellingServices.jpeg";

export default function OfferingSection() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  const offers = [
    {
      title: "Toddler Program",
      link: "/toddlerProgram",
      img: ToddlerProgram,
    },
    {
      title: "Early Learning",
      link: "/earlyLearning",
      img: EarlyLearning,
    },
    {
      title: "Skill Development",
      link: "/skillDevelopment",
      img: SkillDevelopment,
    },
    {
      title: "Learning Support",
      link: "/learningSupport",
      img: LearningSupport,
    },
    {
      title: "Free Zone",
      link: "/freeZone",
      img: FreeZone,
    },
    {
      title: "Counselling Services & Seminar Programs",
      link: "/counsellingServices",
      img: CounsellingServices,
    },
  ];

  /* Detect screen resize */
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      setIndex(0); // reset slider when layout changes
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const visibleCards = isDesktop ? 3 : 1;
        const maxIndex = offers.length - visibleCards;

        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isDesktop, offers.length]);

  const next = () => {
    const visibleCards = isDesktop ? 3 : 1;
    const maxIndex = offers.length - visibleCards;

    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    const visibleCards = isDesktop ? 3 : 1;
    const maxIndex = offers.length - visibleCards;

    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const translateValue = isDesktop ? index * 33.3333 : index * 100;

  return (
    <section className="offers-section">
      <h2 className="offers-title">What We Offer</h2>

      <div className="offers-wrapper">
        <button className="nav-btn left" onClick={prev}>
          ◀
        </button>

        <div className="carousel-viewport">
          <div
            className="offers-carousel"
            style={{
              transform: `translateX(-${translateValue}%)`,
            }}
          >
            {offers.map((item, i) => (
              <div
                className="offer-card"
                key={i}
                onClick={() => navigate(item.link)}
              >
                <div className="offer-image">
                  <img src={item.img} alt={item.title} />
                </div>

                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <button className="nav-btn right" onClick={next}>
          ▶
        </button>
      </div>
    </section>
  );
}