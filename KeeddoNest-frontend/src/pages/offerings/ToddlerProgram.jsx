import ProgramDetail from "../programDetail/ProgramDetail";

export default function ToddlerProgram() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Our toddler program focuses on foundational growth through play-based learning, emotional nurturing and structured exploration in a safe environment."
    },

    {
      heading: "Syllabus",
      type: "dropdown",
      content: [
        {
          topic: "Early Motor Skills",
          points: [
            "Basic coordination activities",
            "Sensory development exercises",
            "Fine motor skill practice"
          ]
        },
        {
          topic: "Language Development",
          points: [
            "Story-based learning",
            "Vocabulary building",
            "Interactive communication"
          ]
        },
        {
          topic: "Social Interaction",
          points: [
            "Group play sessions",
            "Sharing & cooperation",
            "Emotional awareness"
          ]
        }
      ]
    }

  ];

  return <ProgramDetail title="Toddler Program" sections={sections} />;
}