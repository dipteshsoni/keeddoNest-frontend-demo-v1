import { useState } from "react";
import "./ProgramDetail.css";

export default function ProgramDetail({ title, sections }) {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [openSub, setOpenSub] = useState(null);

  const toggleSub = (index) => {
    setOpenSub(openSub === index ? null : index);
  };

  return (
    <section className="program-page">
      <div className={`program-wrapper ${selectedTopic ? "blur" : ""}`}>
        <h1 className="program-title">{title}</h1>

        {sections.map((section, sIndex) => (
          <div key={sIndex} className="program-card">
            <h2>{section.heading}</h2>

            {section.type === "text" && <p className="program-card-section-content">{section.content}</p>}

            {section.type === "advancedDropdown" && (
              <div className="topics-grid">
                {section.content.map((topic, tIndex) => (
                  <div
                    key={tIndex}
                    className="topic-card"
                    onClick={() => setSelectedTopic(topic)}
                  >
                    {topic.topic}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* MODAL */}

      {selectedTopic && (
        <div className="topic-modal">
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => {
                setSelectedTopic(null);
                setOpenSub(null);
              }}
            >
              ✕
            </button>

            <h2>{selectedTopic.topic}</h2>

            {selectedTopic.subsections.map((sub, index) => (
              <div key={index} className="modal-subcard">
                <div
                  className="modal-subheader"
                  onClick={() => toggleSub(index)}
                >
                  <span>{sub.title}</span>
                  <span >{openSub === index ? "−" : "+"}</span>
                </div>

                {openSub === index && (
                  <ul className="modal-subheader-body-ul">
                    {sub.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
