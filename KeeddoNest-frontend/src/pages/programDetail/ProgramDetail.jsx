import { useState } from "react";
import "./ProgramDetail.css";

export default function ProgramDetail({ title, sections }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="program-page">

      <div className="program-wrapper">

        <h1 className="program-title">{title}</h1>

        {sections.map((section, sIndex) => (
          <div key={sIndex} className="program-card">

            <h2>{section.heading}</h2>

            {/* TEXT SECTION */}
            {section.type === "text" && (
              <p>{section.content}</p>
            )}

            {/* SIMPLE LIST */}
            {section.type === "list" && (
              <ul>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* ADVANCED SYLLABUS (NESTED) */}
            {section.type === "advancedDropdown" &&
              section.content.map((item, index) => {

                const globalIndex = `${sIndex}-${index}`;

                return (
                  <div key={index} className="syllabus-item">

                    <div
                      className="syllabus-header"
                      onClick={() => toggle(globalIndex)}
                    >
                      <span>{item.topic}</span>
                      <span>{openIndex === globalIndex ? "−" : "+"}</span>
                    </div>

                    {openIndex === globalIndex && (
                      <div className="syllabus-content">

                        {item.subsections.map((sub, i) => (
                          <div key={i} className="sub-section">
                            <h4>{sub.title}</h4>
                            <ul>
                              {sub.points.map((p, j) => (
                                <li key={j}>{p}</li>
                              ))}
                            </ul>
                          </div>
                        ))}

                      </div>
                    )}

                  </div>
                );
              })}

          </div>
        ))}

      </div>

    </section>
  );
}