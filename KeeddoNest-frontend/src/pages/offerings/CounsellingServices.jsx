import { useState } from "react";
import "./CounsellingServices.css";

export default function CounsellingServices() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const counsellingSections = [
    {
      title: "Philosophy",
      desc: "Our counselling approach is rooted in empathy, confidentiality and structured emotional guidance for balanced personal development."
    },
    {
      title: "Who We Support",
      desc: "Children, adolescents, parents, young adults and families seeking structured emotional and behavioural guidance."
    },
    {
      title: "Counselling Areas Covered",
      desc: "Academic stress, emotional regulation, behavioural challenges, confidence building and parent-child communication."
    },
    {
      title: "Our Approach",
      desc: "Personalised sessions, goal-based strategies, safe confidential space and consistent progress monitoring."
    }
  ];

  const seminarSections = [
    {
      title: "Parent Focused Topics",
      desc: "Understanding child psychology, effective parenting strategies, emotional connection building and academic pressure management."
    },
    {
      title: "Adult Well-Being",
      desc: "Stress management techniques, emotional resilience, work-life balance strategies and mindful living practices."
    },
    {
      title: "School & Teacher Programs",
      desc: "Classroom engagement methods, behavioural understanding, communication skills and structured student support systems."
    }
  ];

  return (
    <section className="counselling-page">

      <div className="counselling-wrapper">

        {/* CARD 1 */}
        <div className="counselling-card">
          <h2>Counselling Services</h2>

          {counsellingSections.map((item, index) => (
            <div key={index} className="dropdown-item">

              <div
                className="dropdown-header"
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </div>

              {openIndex === index && (
                <div className="dropdown-content">
                  <p>{item.desc}</p>
                </div>
              )}

            </div>
          ))}

        </div>

        {/* CARD 2 */}
        <div className="counselling-card">
          <h2>Seminars & Workshops</h2>

          {seminarSections.map((item, index) => (
            <div key={index + 10} className="dropdown-item">

              <div
                className="dropdown-header"
                onClick={() => toggle(index + 10)}
              >
                <span>{item.title}</span>
                <span>{openIndex === index + 10 ? "−" : "+"}</span>
              </div>

              {openIndex === index + 10 && (
                <div className="dropdown-content">
                  <p>{item.desc}</p>
                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}