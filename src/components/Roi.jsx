// import React from 'react'

// function Roi() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="0.09"
//       className=" w-full h-screen flex items-center justify-between pt-1  bg-[#F5F7F8] text-black  px-10 md:px-20"
//     >
//       <div className="details flex flex-col h-[80vh] justify-between w-1/2">
//         <div className="upperDetails">
//           <div
//             className="subheading text-[14px] capitalize border-[1px] border-solid border-slate-900 
//         py-[6px]  px-[4px]  w-[160px] flex items-center justify-center rounded-full"
//           >
//             Return On Investment
//           </div>
//           <div className="heading text-[48px] capitalize font-bold w-2/3 leading-none my-6">
//             Our Customer Experience 800% ROI Instantly.
//           </div>
//           <div className="paragraph font-regular text-[16px] w-2/3">
//             Appyard understands the importance of ROI and delivers measurable
//             results through its mobile app solutions.
//           </div>
//         </div>
//         <div className="lowerDeets   ">
//           <p>Trusted by many , appyard delivers result you can rely on too.</p>
//         </div>
//       </div>

//       <div className="companyLogos h-[80vh] w-1/2 bg-slate-100"></div>
//     </div>
//   );
// }

// export default Roi

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

function Roi() {
  const detailsRef = useRef(null);
  const logosRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".roi-section", // Trigger animation on this section
        start: "top center", // Start animation when the top of the section reaches the center of the viewport
        end: "bottom top", // End animation when the bottom of the section hits the top of the viewport
        scrub: 1, // Smooth scrubbing
         // Set to true to visualize triggers (remove in production)
      },
    });

    // Animate details with upward movement
    tl.from(detailsRef.current, {
      y: 100, // Start from 100px below
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
      // Animate logos with downward movement
      .from(
        logosRef.current,
        {
          y: -100, // Start from 100px above
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      ); // Overlap with the previous animation
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.09"
      className="roi-section w-full h-screen flex items-center justify-between pt-1 bg-[#F5F7F8] text-black px-10 md:px-20"
    >
      <div
        ref={detailsRef}
        className="details flex flex-col h-[80vh] justify-between w-1/2"
      >
        <div className="upperDetails">
          <div
            className="subheading text-[14px] capitalize border-[1px] border-solid border-slate-900 
              py-[6px] px-[4px] w-[160px] flex items-center justify-center rounded-full"
          >
            Return On Investment
          </div>
          <div className="heading text-[48px] capitalize font-bold w-2/3 leading-none my-6">
            Our Customer Experience 800% ROI Instantly.
          </div>
          <div className="paragraph font-regular text-[16px] w-2/3">
            Appyard understands the importance of ROI and delivers measurable
            results through its mobile app solutions.
          </div>
        </div>
        <div className="lowerDeets">
          <p>Trusted by many, Appyard delivers results you can rely on too.</p>
        </div>
      </div>

      <div
        ref={logosRef}
        className="companyLogos h-[80vh] w-1/2 bg-slate-100"
      ></div>
    </div>
  );
}

export default Roi;







