import CentrePhilosophy from "../CentrePhilosophy/CentrePhilosophy";
import Contact from "../Contact/Contact";
import FounderSection from "../FounderSection/FounderSection";
import HomeHero from "../HomeHero/HomeHero";
import IdeologySection from "../IdeologySection/IdeologySection";
import OfferingSection from "../OfferingSection/OfferingSection";
import WannaConnect from "../WannaConnect/WannaConnect";


export default function Home() {
  return (
    <>
      <HomeHero />
      <IdeologySection />
      <CentrePhilosophy />
      <FounderSection />
      <OfferingSection />
      <WannaConnect />
      <Contact />
    </>
  );
}