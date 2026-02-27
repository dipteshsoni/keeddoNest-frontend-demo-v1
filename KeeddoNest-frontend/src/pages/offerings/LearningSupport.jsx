import ProgramDetail from "../programDetail/ProgramDetail";

export default function LearningSupport() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Learning Support provides structured academic guidance and personalised mentoring to strengthen concepts while nurturing emotional balance and consistent progress."
    },

    {
      heading: "Syllabus",
      type: "dropdown",
      content: [
        {
          topic: "Concept Strengthening",
          points: [
            "Clear explanation of core subjects",
            "Step-by-step problem solving",
            "Concept reinforcement practice"
          ]
        },
        {
          topic: "Study Techniques",
          points: [
            "Time management strategies",
            "Memory improvement methods",
            "Structured revision planning"
          ]
        },
        {
          topic: "Emotional & Academic Balance",
          points: [
            "Confidence-building sessions",
            "Stress management techniques",
            "Motivational guidance"
          ]
        },
        {
          topic: "Progress Monitoring",
          points: [
            "Performance tracking",
            "Regular feedback sessions",
            "Goal-based improvement plans"
          ]
        }
      ]
    },

    {
      heading: "Skills Developed",
      type: "list",
      content: [
        "Strong conceptual clarity",
        "Improved academic discipline",
        "Emotional resilience",
        "Consistent study habits",
        "Independent learning mindset"
      ]
    }

  ];

  return (
    <ProgramDetail
      title="Learning Support"
      sections={sections}
    />
  );
}