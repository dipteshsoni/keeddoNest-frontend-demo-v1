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

            {/* Paragraph Type Section */}
            {section.type === "text" && (
              <p>{section.content}</p>
            )}

            {/* List Type Section */}
            {section.type === "list" && (
              <ul>
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {/* Dropdown Type Section */}
            {section.type === "dropdown" &&
              section.content.map((item, index) => (
                <div key={index} className="syllabus-item">

                  <div
                    className="syllabus-header"
                    onClick={() => toggle(index + sIndex)}
                  >
                    <span>{item.topic}</span>
                    <span>{openIndex === index + sIndex ? "−" : "+"}</span>
                  </div>

                  {openIndex === index + sIndex && (
                    <div className="syllabus-content">
                      <ul>
                        {item.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>
              ))
            }

          </div>
        ))}

      </div>

    </section>
  );
}