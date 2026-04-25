import Nav from "../../components/facility/Nav";
import Scene01_Hero from "../../components/facility/Scene01_Hero";

import CharterSection from "../../components/facility/CharterSection";
import ClockSpeedSection from "../../components/facility/ClockSpeedSection";
import DisciplinesSection from "../../components/facility/DisciplinesSection";
import SpecimensSection from "../../components/facility/SpecimensSection";
import CaseFilesSection from "../../components/facility/CaseFilesSection";
import PricingSection from "../../components/facility/PricingSection";
import AccessSection from "../../components/facility/AccessSection";
import FacilityFooter from "../../components/facility/FacilityFooter";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Scene01_Hero />

        <CharterSection />
        <ClockSpeedSection />
        <DisciplinesSection />
        <SpecimensSection />
        <CaseFilesSection />
        <PricingSection />
        <AccessSection />
      </main>
      <FacilityFooter />
    </>
  );
}
