import EnrollPrompt from "../enroll/EnrollPrompt";
import ProgramDetail from "../programDetail/ProgramDetail";

export default function SkillDevelopment() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Knowledge without expression limits a child’s potential. This program focuses on building confidence, communication skills, leadership ability, and emotional intelligence so children can express their ideas clearly and interact confidently in social and academic environments."
    },

    {
      heading: "Skill Areas & Detailed Syllabus",
      type: "advancedDropdown",
      content: [

        {
          topic: "1️⃣ Verbal Communication & Clarity",
          subsections: [
            {
              title: "Focus",
              points: [
                "Speaking clearly and confidently",
                "Structuring thoughts before speaking",
                "Improving vocabulary usage"
              ]
            },
            {
              title: "Activities",
              points: [
                "Guided speaking exercises",
                "Everyday topic discussions",
                "Short explanation tasks"
              ]
            }
          ]
        },

        {
          topic: "2️⃣ Public Speaking, Presentation & Debate",
          subsections: [
            {
              title: "Why It Matters",
              points: [
                "Fear of speaking limits academic and social growth",
                "Children need structured opportunities to express ideas"
              ]
            },
            {
              title: "Training Includes",
              points: [
                "Show & Tell",
                "Short presentations",
                "Opinion sharing",
                "Debate readiness"
              ]
            }
          ]
        },

        {
          topic: "3️⃣ Story Creation & Creative Expression",
          subsections: [
            {
              title: "What Children Learn",
              points: [
                "Idea generation",
                "Understanding story structure",
                "Using imagination and originality"
              ]
            },
            {
              title: "Outcome",
              points: [
                "Confidence in self-expression",
                "Stronger creativity and imagination"
              ]
            }
          ]
        },

        {
          topic: "4️⃣ Social Skills, Leadership & Teamwork",
          subsections: [
            {
              title: "Skills Covered",
              points: [
                "Group interaction",
                "Taking leadership roles",
                "Cooperation in team tasks",
                "Conflict resolution"
              ]
            }
          ]
        },

        {
          topic: "5️⃣ Emotional Intelligence",
          subsections: [
            {
              title: "Focus Areas",
              points: [
                "Identifying emotions",
                "Managing reactions",
                "Understanding others’ feelings",
                "Developing empathy"
              ]
            }
          ]
        }

      ]
    }

  ];

  return (
   <> <ProgramDetail
      title="Skill Development Program (6 – 12 Years)"
      sections={sections}
    />

       <EnrollPrompt program="the Skill Development Program" /></>
  );
}