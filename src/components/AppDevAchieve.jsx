import React from "react";

function AppDevAchieve() {
  return (
    <div className="category w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl gap-10 flex justify-between py-20 bg-slate-100 px-10 md:px-20 text-black">
      <div className="baseDeets">
        <div className="heading text-[48px] font-medium ">
          <p>Achieve Your Business Goals </p>
          <p>With App Development Solution</p>
        </div>
        <div className="paragraph text-[24px] pt-5 pb-10 ">
          <p>Delight your users with expressive and feature-rich </p>
          <p>
            native iOS/Android, cross-platform or Progressive Web Apps
            leveraging{" "}
          </p>
          <p>our extensive of working with all major technologies.</p>
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
              Native Mobile App Dev
            </div>
            <div className="details">
              Our mobile app developers can build high-quality native apps for
              both Android and iOS systems aligned with your business and
              security requirements.
            </div>
          </div>
          <div className="service h-full bg-[#FBC1D4] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Hybrid Mobile App Dev
            </div>
            <div className="details">
              Cross-platform apps that can work in different environments thanks
              to a unique blend of native and web app technologies.
            </div>
          </div>
        </div>
        <div className="serviceLowerContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#FED35B] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Progressive web app development
            </div>
            <div className="details">
              With progressive web apps, we deliver native-like capabilities and
              installability while reaching anyone, anywhere, on any device with
              a single codebase
            </div>
          </div>
          <div className="service h-full bg-[#1e1e1e] text-white w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Wearables and Embedded software
            </div>
            <div className="details">
              We cam create companion apps for a number of wearables devices,
              integrate, with smart devices or proprietary peripherals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDevAchieve;
