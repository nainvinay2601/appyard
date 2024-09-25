// import React from 'react'

// function Brand() {
//   return (
//     <div
     
//       className="flex h-[50vh] bg-slate-50 px-10 md:px-20 justify-between items-center py-10 "
//     >
//       <div className="informationText flex flex-col w-1/2 justify-between h-full   ">
//         <div className="heading text-[64px] font-medium leading-none">
//           Brand Strategy
//         </div>
//         <div className="deets flex justify-between">
//           <div className="deetsParagraph text-[18px] w-1/2 ">
//             It's the core of your company's identity. It guides all business
//             decisions, ensuring a consistent and impactful presence in the
//             market.
//           </div>
//           <div className="deetsPoints text-sm">
//             <li>hello</li>
//             <li>hello</li>
//             <li>hello</li>
//             <li>hello</li>
//             <li>hello</li>
//             <li>hello</li>
//           </div>
//         </div>
//       </div>
//       <div className="informationVideo w-[403px] h-full bg-slate-700 "></div>
//     </div>
//   );
// }

// export default Brand 

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Brand() {
  const headingRef = useRef(null);
  const deetsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });

      // Animate details section
      gsap.from(deetsRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: deetsRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });

      // Animate video section
      gsap.from(videoRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="flex h-[50vh] bg-slate-50 px-10 md:px-20 justify-between items-center py-10">
      <div className="informationText flex flex-col w-1/2 justify-between h-full">
        <div
          ref={headingRef}
          className="heading text-[64px] font-medium leading-none"
        >
          Brand Strategy
        </div>
        <div ref={deetsRef} className="deets flex justify-between">
          <div className="deetsParagraph text-[18px] w-1/2">
            It's the core of your company's identity. It guides all business
            decisions, ensuring a consistent and impactful presence in the
            market.
          </div>
          <ul className="deetsPoints text-sm">
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
            <li>hello</li>
          </ul>
        </div>
      </div>
      <div
        ref={videoRef}
        className="informationVideo w-[403px] h-full bg-slate-700"
      >
        {/* You can replace this with an actual video element or a placeholder */}
      </div>
    </div>
  );
}

export default Brand;
