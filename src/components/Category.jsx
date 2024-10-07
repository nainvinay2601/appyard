// import React from 'react'

// function Category() {
//   return (
//     <div className=" w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl gap-10  flex  justify-between py-20 bg-slate-100 px-10 md:px-20 text-black">
//       <div className="baseDeets">
//         <div className="heading  text-[64px] font-medium ">
//           <p>Explore Our</p>
//           <p>Digital Solution</p>
//         </div>
//         <div className="paragraph  text-[24px] pt-5 pb-10 ">
//           <p>Choose the service that fits your needs, </p>
//           <p>and let us bring your vision </p>
//           <p>to life.</p>
//         </div> 
//         <div className="buttonFillForm">
//             <button className='py-4 px-6 rounded-full border-[1px] border-slate-900 font-medium ' >Start A Project</button>
//         </div>
//       </div>
//       <div className="servicesContainer h-full  w-[50vw] flex flex-col gap-4 ">
//         <div className="serviceUpperContainer h-1/2 w-full flex gap-4 ">
//           <div className="service h-full bg-[#C3ABFF] w-1/2 flex flex-col justify-between p-4">
//             <div className="heading text-[32px] font-medium ">
//               Brand Strategy
//             </div>
//             <div className="details">
//               Visual identity is the unique visual language of your brand,
//               creating memorable impressions and emotional connections with your
//               audience.
//             </div>
//           </div>
//           <div className="service h-full bg-[#fcf8ec] w-1/2 flex flex-col justify-between p-4">
//             <div className="heading text-[32px] font-medium ">
//               Brand Strategy
//             </div>
//             <div className="details">
//               Visual identity is the unique visual language of your brand,
//               creating memorable impressions and emotional connections with your
//               audience.
//             </div>
//           </div>
//         </div>
//         <div className="serviceLowerContainer h-1/2  w-full flex gap-4 ">
//           <div className="service h-full bg-[#FED35B] w-1/2 flex flex-col justify-between p-4">
//             <div className="heading text-[32px] font-medium ">
//               Brand Strategy
//             </div>
//             <div className="details">
//               Visual identity is the unique visual language of your brand,
//               creating memorable impressions and emotional connections with your
//               audience.
//             </div>
//           </div>
//           <div className="service h-full bg-[#1e1e1e] text-white w-1/2 flex flex-col justify-between p-4">
//             <div className="heading text-[32px] font-medium ">
//               Brand Strategy
//             </div>
//             <div className="details">
//               Visual identity is the unique visual language of your brand,
//               creating memorable impressions and emotional connections with your
//               audience.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Category 

import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Category() {
  // GSAP animations for the baseDeets and servicesContainer
  const { ref: baseDeetsRef } = useGSAP({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    scrollTrigger: {
      trigger: ".category",
      start: "top center",
    },
  });

  const { ref: servicesContainerRef } = useGSAP({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".category",
      start: "top center",
    },
  });

  return (
    <div className="category w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl gap-10 flex justify-between py-20 bg-slate-100 px-10 md:px-20 text-black">
      <div className="baseDeets" ref={baseDeetsRef}>
        <div className="heading text-[64px] font-medium ">
          <p>Explore Our</p>
          <p>Digital Solution</p>
        </div>
        <div className="paragraph text-[24px] pt-5 pb-10 ">
          <p>Choose the service that fits your needs, </p>
          <p>and let us bring your vision </p>
          <p>to life.</p>
        </div>
        <div className="buttonFillForm">
          <button className="py-4 px-6 rounded-full border-[1px] border-slate-900 font-medium">
            Start A Project
          </button>
        </div>
      </div>
      <div
        className="servicesContainer h-full w-[50vw] flex flex-col gap-4"
        ref={servicesContainerRef}
      >
        <div className="serviceUpperContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#C3ABFF] w-1/2 flex flex-col justify-between p-4">
           <Link
              to="/appdev"
              className="w-full h-full flex flex-col justify-between"
            >
            <div className="heading text-[32px] font-medium ">
              App Development
            </div>
            <div className="details">
              Visual identity is the unique visual language of your brand,
              creating memorable impressions and emotional connections with your
              audience.
            </div>
            </Link>
          </div>
          <div className="service h-full bg-[#fcf8ec] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Brand Strategy
            </div>
            <div className="details">
              Visual identity is the unique visual language of your brand,
              creating memorable impressions and emotional connections with your
              audience.
            </div>
          </div>
        </div>
        <div className="serviceLowerContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#FED35B] w-1/2 flex flex-col justify-between p-4">
            <Link
              to="/webdev"
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="heading text-[32px] font-medium ">
                Web Development
              </div>
              <div className="details">
                Visual identity is the unique visual language of your brand,
                creating memorable impressions and emotional connections with
                your audience.
              </div>
            </Link>
          </div>
          {/* <div className="service h-full bg-[#1e1e1e] text-white w-1/2 flex flex-col justify-between p-4">
            <Link to="/design" >
              <div className="heading text-[32px] font-medium ">
                UX/UI Design
              </div>
              <div className="details">
                Visual identity is the unique visual language of your brand,
                creating memorable impressions and emotional connections with
                your audience.
              </div>
            </Link>
          </div> */}
          <div className="service h-full bg-[#1e1e1e] text-white w-1/2 flex flex-col justify-between p-4">
            <Link
              to="/design"
              className="w-full h-full flex flex-col justify-between"
            >
              <div className="heading text-[32px] font-medium">
                UX/UI Design
              </div>
              <div className="details">
                Visual identity is the unique visual language of your brand,
                creating memorable impressions and emotional connections with
                your audience.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
