// import React from 'react'

// function WebDev() {
//   return (
//     <div className="flex h-[50vh] bg-[#fed35b] px-10 md:px-20 justify-between items-center py-10 ">
//       <div className="informationText flex flex-col w-1/2 justify-between h-full   ">
//         <div className="heading text-[64px] font-medium leading-none">
//           Visual Identity
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

// export default WebDev  

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function WebDev() {
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
    <div className="flex h-[50vh] bg-[#fed35b] px-10 md:px-20 justify-between items-center py-10">
      <div className="informationText flex flex-col w-1/2 justify-between h-full">
        <div
          ref={headingRef}
          className="heading text-[64px] font-medium leading-none"
        >
          Web Development
        </div>
        <div ref={deetsRef} className="deets flex justify-between">
          <div className="deetsParagraph text-[18px] w-1/2">
            Our website design services blend innovation and creativity to
            deliver user-centric solutions that elevate your brand and engage
            your audience.
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
        className="informationVideo w-[403px] h-full bg-slate-700"
      >
        {/* You can replace this with an actual video element or a placeholder */}
        <img
          src="/src/assets/webdev.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default WebDev;
