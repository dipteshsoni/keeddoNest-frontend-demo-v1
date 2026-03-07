import EnrollPrompt from "../enroll/EnrollPrompt";
import ProgramDetail from "../programDetail/ProgramDetail";

export default function ToddlerProgram() {

  const sections = [

    {
      heading: "Philosophy",
      type: "text",
      content:
        "The toddler phase is the emotional foundation of life. Before children can develop academic or social skills, they must first feel safe, connected, and emotionally secure. This program is not a typical play school replica. It is a care and early development space designed to support emotional security, gentle exploration, and natural development in the early years."
    },

    {
      heading: "Core Development Areas & Detailed Syllabus",
      type: "advancedDropdown",
      content: [

        {
          topic: "💛 Emotional Security & Attachment Building",
          subsections: [
            {
              title: "Why It Matters",
              points: [
                "Toddlers who feel emotionally safe show better confidence and curiosity later",
                "Secure attachment supports healthy emotional development"
              ]
            },
            {
              title: "How We Work",
              points: [
                "Warm and responsive caregiving",
                "Predictable emotional responses from adults",
                "Comfort-based settling instead of forced separation"
              ]
            },
            {
              title: "What Children Develop",
              points: [
                "Trust in caregivers",
                "Reduced separation anxiety",
                "Early emotional regulation through co-regulation"
              ]
            }
          ]
        },

        {
          topic: "🌈 Sensory Development & Exploration",
          subsections: [
            {
              title: "Why It Matters",
              points: [
                "Sensory experiences shape early brain connections",
                "Exploration helps toddlers understand their environment"
              ]
            },
            {
              title: "Activities Include",
              points: [
                "Touch-based play with different textures",
                "Sound and rhythm exposure",
                "Movement and balance play",
                "Visual exploration of colours and objects"
              ]
            },
            {
              title: "Outcomes",
              points: [
                "Improved attention span",
                "Better emotional regulation",
                "Stronger neural development"
              ]
            }
          ]
        },

        {
          topic: "🤝 Early Social Awareness",
          subsections: [
            {
              title: "Why It Matters",
              points: [
                "Social learning begins through observation",
                "Toddlers slowly develop comfort around peers"
              ]
            },
            {
              title: "Focus Areas",
              points: [
                "Parallel play",
                "Gentle peer interaction",
                "Exposure to turn-taking without pressure"
              ]
            },
            {
              title: "Outcomes",
              points: [
                "Comfort around other children",
                "Reduced aggression or withdrawal",
                "Early empathy development"
              ]
            }
          ]
        },

        {
          topic: "🧩 Routine, Structure & Independence",
          subsections: [
            {
              title: "Why It Matters",
              points: [
                "Predictable routines create emotional safety",
                "Consistency helps toddlers feel secure"
              ]
            },
            {
              title: "Daily Routine Exposure",
              points: [
                "Arrival and gentle settling",
                "Play and exploration time",
                "Snack routines",
                "Clean-up and transition activities"
              ]
            },
            {
              title: "Skills Developed",
              points: [
                "Sense of security",
                "Early self-help skills",
                "Confidence during transitions"
              ]
            }
          ]
        },

        {
          topic: "🗣 Language Exposure & Communication",
          subsections: [
            {
              title: "How Language Develops",
              points: [
                "Songs and rhymes",
                "Naming objects during play",
                "Picture-based story time",
                "Natural adult-child conversation"
              ]
            },
            {
              title: "Outcome",
              points: [
                "Natural language development",
                "Comfort with communication without pressure to perform"
              ]
            }
          ]
        }

      ]
    }

  ];

  return (
   <> <ProgramDetail
      title="Toddler Program & Care Hub (1.5 – 4 Years)"
      sections={sections}
    />
    <EnrollPrompt program="the Toddler Program" />
    </>
  );
}