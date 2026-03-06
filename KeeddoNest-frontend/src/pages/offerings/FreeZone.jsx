import EnrollPrompt from "../enroll/EnrollPrompt";
import ProgramDetail from "../programDetail/ProgramDetail";

export default function FreeZone() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "Movement is emotional release. Children need opportunities to express themselves freely through movement, rhythm, and creativity. This space encourages joyful physical activity where children build confidence, coordination, and emotional expression without pressure or strict rules."
    },

    {
      heading: "Physical Development",
      type: "advancedDropdown",
      content: [

        {
          topic: "💃 Dance Forms Offered",
          subsections: [
            {
              title: "Styles Introduced",
              points: [
                "Free-style dance for natural movement and expression",
                "Bollywood dance for rhythm and energy",
                "Contemporary movement for creativity and flow",
                "Semi-classical elements for grace and body control"
              ]
            }
          ]
        },

        {
          topic: "🧠 Skills Developed",
          subsections: [
            {
              title: "Physical Skills",
              points: [
                "Balance and coordination",
                "Rhythm and flexibility",
                "Body awareness"
              ]
            },
            {
              title: "Emotional Benefits",
              points: [
                "Emotional release through movement",
                "Confidence in self-expression",
                "Joyful participation in group activities"
              ]
            }
          ]
        }

      ]
    }

  ];

  return (
    <> <ProgramDetail
      title="Free Zone – Physical Growth & Expression"
      sections={sections}
    />
    <EnrollPrompt program="the Free Zone Program" />
    </>
  );
}