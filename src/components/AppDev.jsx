// import React from 'react'

// function AppDev() {
//   return (
//     <div 
      
//      className="flex h-[50vh] bg-[#c3abff] px-10 md:px-20 justify-between items-center py-10 ">
//       <div className="informationText flex flex-col w-1/2 justify-between h-full   ">
//         <div className="heading text-[64px] font-medium leading-none">
//           App Development
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

// export default AppDev  

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imageOne from "../assets/appmock.jpg"

gsap.registerPlugin(ScrollTrigger);

function AppDev() {
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
    <div className="flex h-[50vh] bg-[#c3abff] px-10 md:px-20 justify-between items-center py-10">
      <div className="informationText flex flex-col w-1/2 justify-between h-full">
        <div
          ref={headingRef}
          className="heading text-[64px] font-medium leading-none"
        >
          App Development
        </div>
        <div ref={deetsRef} className="deets flex justify-between">
          <div className="deetsParagraph text-[18px] w-1/2">
            Appyard's app development embodies our identity, delivering
            innovative and user-focused solutions that ensure impactful market
            presence.
          </div>
          <ul className="deetsPoints text-sm">
            <li>UX Design</li>
            <li>User Testing</li>
            <li>Product Prototype</li>
            <li>Mobile UI</li>
            <li>Software UI Design</li>
            <li>Web app Design</li>
            <li>Interaction Design</li>
          </ul>
        </div>
      </div>
      <div
        ref={videoRef}
        className="informationVideo w-[403px] h-full bg-slate-700 rounded-lg "
      >
        {/* You can replace this with an actual video element or a placeholder */}
        <img src={imageOne} alt="" className="w-full h-full object-cover"  />
      </div>
    </div>
  );
}

export default AppDev;
