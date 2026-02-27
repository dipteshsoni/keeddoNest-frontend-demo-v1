import ProgramDetail from "../programDetail/ProgramDetail";


export default function EarlyLearning() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Early learning is guided by structured engagement, curiosity-driven exploration and confidence building."
    },

    {
      heading: "Syllabus",
      type: "dropdown",
      content: [
        {
          topic: "Foundational Literacy",
          points: [
            "Reading basics",
            "Phonics introduction",
            "Word formation"
          ]
        },
        {
          topic: "Numeracy Skills",
          points: [
            "Number recognition",
            "Basic arithmetic",
            "Logical thinking"
          ]
        },
        {
          topic: "Creative Learning",
          points: [
            "Art & expression",
            "Music interaction",
            "Activity-based growth"
          ]
        }
      ]
    }

  ];

  return <ProgramDetail title="Early Learning" sections={sections} />;
}