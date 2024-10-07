import React from "react";
// import AboutServices from "./AboutServices";
import AppDevAboutServices from "./AppDevAboutServices";
import AppDevTechStack from "./TechStack";
import ServiceProvenSteps from "./ServiceProvenSteps";
import CaseStudiesWeb from "./CaseStudiesWeb";
import Company from "./Company";
import Match from "./Match";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import AppDevAchieve from "./AppDevAchieve";

function AppDevServicePage() {
  return (
    <div className="w-full rounded-tr-3xl rounded-tl-3xl py-40  text-slate-100">
      <div className="heroDeets h-[80vh] text-[64px]  px-10  md:px-20 leading-none font-medium text-center flex flex-col justify-center  gap-10   items-center  ">
        <div className="textContainer">
          <p> We design and develop </p>
          <p>
            stellar <span className="text-[#C3ABFF]"> mobile apps </span> that
          </p>
          <p> brings value to our customers.</p>
        </div>
        <div className="buttonStructure flex gap-10 mt-10">
          <div className="buttonAndArrow bg-[#C3ABFF] text-slate-900 md:px-6 px-4 py-3 font-neue-montreal md:text-sm text-xs uppercase border border-solid border-zinc-950 rounded-full flex gap-5 justify-center items-center font-bold">
            <div className="">Start The Project</div>
          </div>
          <div className="freeConsultation text-sm px-[16px] py-[12px] rounded-full font-regular border-b-[1px] ">
            Request Free Consultation
          </div>
        </div>
      </div>

      <AppDevAboutServices />
      <AppDevAchieve />
      <AppDevTechStack />
      <ServiceProvenSteps />
      <CaseStudiesWeb />
      <Company />
      <FAQSection />
      <Match />
      <Footer />
    </div>
  );
}

export default AppDevServicePage;
