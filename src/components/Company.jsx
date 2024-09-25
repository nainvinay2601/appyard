// import React from 'react'
// import logoDemo from '/src/assets/amnesty-ic-1.svg'

// function Company() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="0.1"
//       className="w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl  flex flex-col   gap-20  justify-center pt-20  mt-20   bg-slate-100 px-10 md:px-20 text-black"
//     >
//       <div className="headingAndPar text-center   ">
//         <div className="heading text-[32px] font-medium  ">
//           Join Us on This Journey
//         </div>
//         <div className="description text-[22px] pt-3 ">
//           Let's collaborate to create something meaningful for your brand,
//           driving growth and impact at every step.
//         </div>
//       </div>
//       <div className="companyLogos flex flex-col gap-4  ">
//         <div className="companyUpper flex gap-5">
//           <div className="company    ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company    ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company    ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company    ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company   ">
//             <img src={logoDemo} alt="" />
//           </div>
//         </div>
//         <div className="companyLower flex gap-5 ">
//           <div className="company   ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company   ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company   ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company   ">
//             <img src={logoDemo} alt="" />
//           </div>
//           <div className="company   ">
//             <img src={logoDemo} alt="" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Company

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logoDemo from "/src/assets/amnesty-ic-1.svg";

gsap.registerPlugin(ScrollTrigger);

function Company() {
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const logosRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      gsap.from(headingRef.current, {
        y: -30,
        opacity: 0,
        duration: 1.5, // Increased duration
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });

      // Animate description
      gsap.from(descriptionRef.current, {
        y: -30,
        opacity: 0,
        duration: 1.5, // Increased duration
        ease: "power2.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
      });

      // Animate logos
      gsap.from(logosRef.current, {
        y: 20,
        opacity: 0,
        duration: 1, // Increased duration
        stagger: 0.3, // Slowed stagger effect
        ease: "power2.out",
        scrollTrigger: {
          trigger: logosRef.current[0],
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl flex flex-col gap-20 justify-center pt-20 mt-20 bg-slate-100 px-10 md:px-20 text-black"
    >
      <div className="headingAndPar text-center">
        <div ref={headingRef} className="heading text-[32px] font-medium">
          Join Us on This Journey
        </div>
        <div ref={descriptionRef} className="description text-[22px] pt-3">
          Let's collaborate to create something meaningful for your brand,
          driving growth and impact at every step.
        </div>
      </div>
      <div className="companyLogos flex flex-col gap-4">
        <div className="companyUpper flex gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="company"
              key={index}
              ref={(el) => (logosRef.current[index] = el)}
            >
              <img src={logoDemo} alt={`Company Logo ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="companyLower flex gap-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              className="company"
              key={index + 5}
              ref={(el) => (logosRef.current[index + 5] = el)}
            >
              <img src={logoDemo} alt={`Company Logo ${index + 6}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;

