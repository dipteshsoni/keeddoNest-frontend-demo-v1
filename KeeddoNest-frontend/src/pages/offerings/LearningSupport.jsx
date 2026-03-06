import EnrollPrompt from "../enroll/EnrollPrompt";
import ProgramDetail from "../programDetail/ProgramDetail";

export default function LearningSupport() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "This program is not pressure-based tuition. Instead, it focuses on concept clarity combined with emotional support so children can learn without fear or stress. The goal is to build understanding, confidence, and healthy study habits rather than pushing memorization."
    },

    {
      heading: "Academic Support Areas",
      type: "advancedDropdown",
      content: [

        {
          topic: "1️⃣ Concept Understanding",
          subsections: [
            {
              title: "Focus",
              points: [
                "Understanding why concepts work",
                "Logical explanations instead of rote learning",
                "Connecting lessons with real-life examples"
              ]
            },
            {
              title: "Outcome",
              points: [
                "Stronger subject understanding",
                "Better confidence in problem-solving"
              ]
            }
          ]
        },

        {
          topic: "2️⃣ Homework Guidance",
          subsections: [
            {
              title: "Support Provided",
              points: [
                "Step-by-step guidance for assignments",
                "Clarifying difficult questions",
                "Helping children understand instructions clearly"
              ]
            },
            {
              title: "Learning Environment",
              points: [
                "No scolding or pressure",
                "No fear-based learning methods"
              ]
            }
          ]
        },

        {
          topic: "3️⃣ Focus & Study Habits",
          subsections: [
            {
              title: "Skills Developed",
              points: [
                "Time management for schoolwork",
                "Attention-building techniques",
                "Developing responsibility toward studies"
              ]
            },
            {
              title: "Methods Used",
              points: [
                "Structured study routines",
                "Short focused learning sessions",
                "Encouraging independent effort"
              ]
            }
          ]
        },

        {
          topic: "4️⃣ Personalized Learning",
          subsections: [
            {
              title: "Approach",
              points: [
                "Learning at the child’s individual pace",
                "Adjusting teaching methods based on strengths"
              ]
            },
            {
              title: "What We Avoid",
              points: [
                "No comparison with other children",
                "No labeling like 'weak' or 'slow learner'"
              ]
            }
          ]
        }

      ]
    }

  ];

  return (
    <> <ProgramDetail
      title="Learning Support – Stress-Free Academics"
      sections={sections}
    /><EnrollPrompt program="the Learning Support Program" /></>
  );
}