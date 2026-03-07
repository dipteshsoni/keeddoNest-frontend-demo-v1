import { useState } from "react";
import "./CounsellingServices.css";
import EnrollPrompt from "../enroll/EnrollPrompt";

export default function CounsellingServices() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const counsellingSections = [
    {
      title: "🧠 Philosophy",
      desc: "Counseling is not only for crisis. It is a supportive space for clarity, relief, and emotional well-being. Professional guidance helps individuals understand emotions, relationships, and personal challenges in a healthier way."
    },
    {
      title: "👨‍👩‍👧 Who We Support",
      desc: "Children, adolescents, parents, adults and couples seeking emotional clarity, relationship support, or personal growth."
    },
    {
      title: "💬 Counseling Areas Covered",
      desc: "Stress and anxiety, emotional overwhelm, parenting challenges, relationship communication and self-awareness with healthy personal boundaries."
    },
    {
      title: "🤝 Our Approach",
      desc: "Safe, confidential and non-judgmental sessions led by psychology professionals, focusing on emotional understanding, practical coping strategies and long-term personal well-being."
    }
  ];

  const seminarSections = [
    {
      title: "👨‍👩‍👧 Parent-Focused Topics",
      desc: "Child behaviour understanding, healthy screen-time balance, gentle parenting methods and recognising children's emotional needs."
    },
    {
      title: "🌿 Adult Well-being",
      desc: "Stress management, emotional health awareness, relationship communication skills and building healthier daily routines."
    },
    {
      title: "🏫 School & Teacher Programs",
      desc: "Child psychology basics, emotional intelligence development, classroom behaviour understanding and teacher well-being support."
    }
  ];

  return (
    <section className="counselling-page">

      <div className="counselling-wrapper">

        {/* Counselling Card */}
        <div className="counselling-card">
          <h2>Counseling Services</h2>
          {/* <h6>Emotional clarity and guidance for children, families and individuals.</h6> */}

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

        {/* Seminar Card */}
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
          <EnrollPrompt program="the Counseling Services" />
    </section>
  );
}