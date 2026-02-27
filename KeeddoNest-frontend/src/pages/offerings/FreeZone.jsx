import ProgramDetail from "../programDetail/ProgramDetail";

export default function FreeZone() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "FreeZone is a safe and expressive space where children explore freely, discover creativity and build confidence without academic pressure."
    },

    {
      heading: "Syllabus",
      type: "dropdown",
      content: [
        {
          topic: "Creative Activities",
          points: [
            "Art & craft exploration",
            "Music and movement sessions",
            "Open-ended play learning"
          ]
        },
        {
          topic: "Confidence Building",
          points: [
            "Group sharing sessions",
            "Self-expression exercises",
            "Social interaction games"
          ]
        }
      ]
    },

    {
      heading: "Skills Developed",
      type: "list",
      content: [
        "Emotional awareness",
        "Creative thinking",
        "Social confidence",
        "Independent expression"
      ]
    }

  ];

  return <ProgramDetail title="FreeZone" sections={sections} />;
}