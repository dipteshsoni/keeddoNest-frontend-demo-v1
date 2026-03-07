import CentrePhilosophy from "../CentrePhilosophy/CentrePhilosophy";
import Contact from "../Contact/Contact";
import FounderSection from "../FounderSection/FounderSection";
import HomeHero from "../HomeHero/HomeHero";
import IdeologySection from "../IdeologySection/IdeologySection";
import OfferingSection from "../OfferingSection/OfferingSection";
import WannaConnect from "../WannaConnect/WannaConnect";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();

useEffect(() => {
  if (location.hash === "#about") {
    const section = document.getElementById("about");

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
}, [location]);
  return (
    <>
      <HomeHero />
      <IdeologySection />
      <CentrePhilosophy />
      <FounderSection />
      <OfferingSection />
      <Contact />
    </>
  );
}