import CentrePhilosophy from "../CentrePhilosophy/CentrePhilosophy";
import FounderSection from "../FounderSection/FounderSection";
import HomeHero from "../HomeHero/HomeHero";
import IdeologySection from "../IdeologySection/IdeologySection";
import OfferingSection from "../OfferingSection/OfferingSection";


export default function Home() {
  return (
    <>
      <HomeHero />
      <IdeologySection />
      <CentrePhilosophy />
      <FounderSection />
      <OfferingSection />
    </>
  );
}