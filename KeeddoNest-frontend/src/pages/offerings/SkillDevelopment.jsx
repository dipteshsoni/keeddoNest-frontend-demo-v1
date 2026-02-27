import ProgramDetail from "../programDetail/ProgramDetail";

export default function SkillDevelopment() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Skill Development at Keeddonest focuses on practical growth, confidence building and real-world readiness. We nurture communication, creativity and critical thinking through structured engagement."
    },

    {
      heading: "Syllabus",
      type: "dropdown",
      content: [
        {
          topic: "Communication Skills",
          points: [
            "Public speaking confidence building",
            "Verbal and non-verbal communication practice",
            "Active listening exercises"
          ]
        },
        {
          topic: "Critical Thinking",
          points: [
            "Problem-solving challenges",
            "Logical reasoning development",
            "Decision-making simulations"
          ]
        },
        {
          topic: "Creative Exploration",
          points: [
            "Artistic expression workshops",
            "Innovation-based activities",
            "Creative storytelling practice"
          ]
        },
        {
          topic: "Leadership & Confidence",
          points: [
            "Team collaboration exercises",
            "Responsibility-driven tasks",
            "Confidence enhancement sessions"
          ]
        }
      ]
    },

    {
      heading: "Skills Developed",
      type: "list",
      content: [
        "Effective communication",
        "Critical thinking ability",
        "Creative expression",
        "Leadership confidence",
        "Problem-solving mindset"
      ]
    }

  ];

  return (
    <ProgramDetail
      title="Skill Development"
      sections={sections}
    />
  );
}