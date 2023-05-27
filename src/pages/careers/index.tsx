import CareersHeroSection from "@/components/molecules/CareersHeroSection";
import Ethos from "@/components/molecules/Ethos";
import React from "react";
import Head from "next/head";
import PioneeringFounders from "@/components/molecules/PioneeringFounders";
import WhyPocketWorlds from "@/components/molecules/WhyPocketWorlds";
import BenefitsAndPerks from "@/components/molecules/BenefitsAndPerks";
import Threestep from "@/components/molecules/Threestep";

const index = () => {
  return (
    <div className="bg-secondary">
      <Head>
        <title>Careers Page</title>
      </Head>
      <CareersHeroSection />
      <Ethos />
      <PioneeringFounders />
      <WhyPocketWorlds />
     <BenefitsAndPerks />
      <Threestep />
    </div>
  );
};
 //
export default index;
