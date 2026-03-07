import { useState, useEffect } from "react";
import "./ideologySection.css";

export default function IdeologySection() {

  const [index, setIndex] = useState(0);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const cards = [
    {
      title: "🪺 Our Ideology",
      points: [
        "Every child deserves:",
        "> to feel safe before they learn",
        "> to be understood before they are corrected",
        "> to grow at their own pace",
        "At KeeddoNest, emotional well-being comes first. Learning, confidence, and skills naturally follow when a child feels secure and valued.",
      ],
    },
    {
      title: "💛 Our Philosophy",
      points: [
        "> Children learn best through play, stories, movement, and connection.",
        "> Behavior is communication, not misbehavior",
        "> Pressure blocks growth; gentle guidance builds it",
        "> Parents don’t need perfection — they need support",
        "So we combine psychology, education, and care under one roof.",
      ],
    },
    {
      title: "🌈 Our Vision",
      points: [
        "To create a generation of children who are:",
        "> Emotionally strong",
        "> Confident communicators",
        "> Curious learners",
        "> Physically active",
        "> Secure in who they are",
        "And to build a community where parents feel heard, guided, and supported — not judged.",
      ],
    },
  ];

  /* AUTO SLIDE */

  useEffect(() => {

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 4000);

    return () => clearInterval(timer);

  }, [cards.length]);


  /* SWIPE HANDLERS */

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {

    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setIndex((prev) => (prev + 1) % cards.length);
    }

    if (isRightSwipe) {
      setIndex((prev) =>
        prev === 0 ? cards.length - 1 : prev - 1
      );
    }

  };


  return (

   
      <section id="about" className="ideology-section">

      <div className="ideology-wrapper">

        <h2 className="ideology-heading">Our Core Values</h2>

        {/* MOBILE CAROUSEL */}

        <div
          className="carousel"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          {cards.map((card, i) => (

            <div className="slide" key={i}>

              <div className="ideology-card">

                <h3>{card.title}</h3>

                <ul>
                  {card.points.map((point, p) => (
                    <li key={p}>{point}</li>
                  ))}
                </ul>

              </div>

            </div>

          ))}

        </div>


        {/* DESKTOP GRID */}

        <div className="desktop-grid">

          {cards.map((card, i) => (

            <div className="ideology-card grid-card" key={i}>

              <h3>{card.title}</h3>

              <ul>
                {card.points.map((point, p) => (
                  <li key={p}>{point}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}