
import ProgramDetail from "../programDetail/ProgramDetail";
export default function EarlyLearning() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Early learning should build understanding, curiosity, and expression — not fear or rote memorization. This program prepares children emotionally and cognitively for school readiness."
    },

    {
      heading: "Core Learning Areas & Detailed Syllabus",
      type: "advancedDropdown",
      content: [

        {
          topic: "1️⃣ Language Development & Vocabulary Expansion",
          subsections: [
            {
              title: "What We Focus On",
              points: [
                "Word meanings (not just words)",
                "Sentence building",
                "Expressive language"
              ]
            },
            {
              title: "Methods Used",
              points: [
                "Story discussions",
                "Picture description",
                "Daily conversation prompts"
              ]
            },
            {
              title: "Outcome",
              points: [
                "Strong verbal expression",
                "Better comprehension skills"
              ]
            }
          ]
        },

        {
          topic: "2️⃣ Listening, Understanding & Communication",
          subsections: [
            {
              title: "Why It Matters",
              points: [
                "Listening is foundation of learning",
                "Builds classroom success"
              ]
            },
            {
              title: "Activities Include",
              points: [
                "Following multi-step instructions",
                "Listening to stories and answering questions",
                "Group interaction tasks"
              ]
            },
            {
              title: "Skills Developed",
              points: [
                "Attention",
                "Instruction-following",
                "Clear expression of thoughts"
              ]
            }
          ]
        },

        {
          topic: "3️⃣ Phonics-Based Reading Readiness",
          subsections: [
            {
              title: "Approach",
              points: [
                "Sound awareness (phonics)",
                "Word-picture association",
                "Story sequencing"
              ]
            },
            {
              title: "No Pressure On",
              points: [
                "Rote A–Z memorization",
                "Forced reading"
              ]
            },
            {
              title: "Outcome",
              points: [
                "Natural readiness for reading",
                "Better decoding skills later"
              ]
            }
          ]
        },

        {
          topic: "4️⃣ Early Writing Readiness & Fine Motor Skills",
          subsections: [
            {
              title: "Focus Areas",
              points: [
                "Pencil grip",
                "Hand strength",
                "Tracing patterns",
                "Drawing and pre-writing strokes"
              ]
            },
            {
              title: "Why It Matters",
              points: [
                "Reduces academic frustration later"
              ]
            }
          ]
        },

        {
          topic: "5️⃣ Cognitive Development Through Play",
          subsections: [
            {
              title: "Skills Developed",
              points: [
                "Memory",
                "Sorting & matching",
                "Problem-solving",
                "Logical thinking"
              ]
            },
            {
              title: "Methods",
              points: [
                "Games",
                "Puzzles",
                "Story-based thinking tasks"
              ]
            }
          ]
        }

      ]
    }

  ];

  return (
    <ProgramDetail
      title="Early Learning & Literacy (3 – 6 Years)"
      sections={sections}
    />
  );
}