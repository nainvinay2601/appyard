import React from "react";

function DesignAchieve() {
  return (
    <div className="category w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl gap-10 flex justify-between py-20 bg-slate-100 px-10 md:px-20 text-black">
      <div className="baseDeets">
        <div className="heading text-[48px] font-medium ">
          <p>Achieve Your Business Goals </p>
          <p>With Our Strategic Design Solution</p>
        </div>
        <div className="paragraph text-[24px] pt-5 pb-10 ">
          <p>Our UX strategy is carefully crafted roadmap </p>
          <p>that places users at the heart of every design decision. </p>
          <p>Ensuring memorable and successful digital experiences.</p>
        </div>
        <div className="buttonFillForm">
          <button className="py-4 px-6 rounded-full border-[1px] border-slate-900 font-medium">
            Start A Project
          </button>
        </div>
      </div>
      <div className="servicesContainer h-full w-[50vw] flex flex-col gap-4">
        <div className="serviceUpperContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#C3ABFF] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Website Design
            </div>
            <div className="details">
              A well-designed website is a powerful marketing and communication
              tool that helps build trust and generate leads.
            </div>
          </div>
          <div className="service h-full bg-[#FBC1D4] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">App Design</div>
            <div className="details">
              With E-Commerce solutions,businesses can operate 24 hours a day, 7
              days a week, and reach customers in any time zone.
            </div>
          </div>
        </div>
        <div className="serviceLowerContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#FED35B] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">User Needs</div>
            <div className="details">
              By empathizing with user needs and behavior, our UX approach
              delivers seamless experiences, fostering strong user engagement
              and loyalty to your digital products.
            </div>
          </div>
          <div className="service h-full bg-[#1e1e1e] text-white w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Business Needs.
            </div>
            <div className="details">
              Understanding your business needs is essential for crafting a UX
              design that aligns perfectly with your objectives and resonates
              with your target audience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignAchieve;
