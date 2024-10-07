// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// function Hero() { 
//  const semiHeadRef = useRef([]);
//  const headingRef = useRef();
//  const buttonRef = useRef(); 


//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from(headingRef.current, {
//       y: 60,
//       opacity: 0,
//       duration: 1,
//       delay: 0.5,
//       stagger: 0.5,
//       ease: "power2.out",
     
//     })
//       .from(
//         semiHeadRef.current,
//         {
//           x: -30,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.5,
//           ease: "power2.out",
//         },
//         "-=0.5" // Overlap with the previous animation
//       )
//       .from(
//         buttonRef.current,
//         {
//           y: -30,
//           opacity: 0,
//           duration: 1,
//           stagger: 0.5,
//           ease: "power2.out",
//         }
//         // Overlap with the previous animation
//       );
//   });

//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-0.4"
//       className="w-full md:h-screen flex flex-col pt-1  text-[#F5F7F8]"
//     >
//       <div className="heroStructure  flex flex-col justify-center items-center  md:mt-40 px-10 md:px-20  ">
//         <div
//         ref={semiHeadRef}
//          className="semiHeading border border-solid border-slate-100 px-[8px] py-[4px] text-[16px] rounded-full capitalize  ">
//           Unleash your digital success Story Today{" "}
//         </div>
//         <div 
//         ref={headingRef}
//         className="Heading text-[60px] uppercase font-bold leading-none text-center mt-4 ">
//           Power Up Your Business With Custom App And Website{" "}
//           <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
//             Solutions{" "}
//           </span>
//           .{" "}
//         </div>
//         <div ref={headingRef} className="details text-[18px] font-regular text-center mt-4">
//           Power up your business with custom app and website solutions from
//           Appyard, designed to boost growth and keep you ahead.
//         </div>

//         <div 
//         ref={buttonRef}
//         className="buttonStructure flex gap-10 mt-10">
//           <div className="buttonAndArrow bg-blue-300 text-slate-900 md:px-6  px-4 py-3 font-neue-montreal md:text-sm text-xs uppercase border border-solid border-zinc-950  rounded-full flex gap-5 justify-center items-center font-bold">
//             <div className="">Get Started</div>
//           </div>
//           <div
//             className="freeConsultation text-sm px-[16px] py-[12px] rounded-full font-regular 
//            border-b-[1px] "
//           >
//             Request Free Consultation
//           </div>
//         </div>
//         <div className="secondaryButtonStructure text-[16px] font-regular flex items-center justify-between w-full  border-solid border-t-[1px]  border-[#F5F7F8] mt-16 pt-10  ">
//           <div className="leftBtn underline  ">
//             For Public And Private Companies
//           </div>
//           <div className="rightBtn underline ">How We Can Help You</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// import React, { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

// function Hero() {
//   const semiHeadRef = useRef(null);
//   const headingRef = useRef(null);
//   const buttonRef = useRef(null);
//   const secondaryButtonRef = useRef(null); // Reference for secondary button structure

//   useGSAP(() => {
//     const tl = gsap.timeline();

//     tl.from(semiHeadRef.current, {
//       x: -30,
//       opacity: 0,
//       duration: 1,
//       stagger: 0.5,
//       ease: "power2.out",
//     })
//       .from(headingRef.current, {
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         delay: 0.5,
//         stagger: 0.5,
//         ease: "power2.out",
//       })
//       .from(buttonRef.current, {
//         y: -30,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.5,
//         ease: "power2.out",
//       })
//       .from(secondaryButtonRef.current, {
//         y: 30,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.5,
//         ease: "power2.out",
//       }); // Add animation for secondary button structure
//   });

//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-0.4"
//       className="w-full md:h-screen flex flex-col pt-1 text-[#F5F7F8]"
//     >
//       <div className="heroStructure flex flex-col justify-center items-center md:mt-40 px-10 md:px-20">
//         <div
//           ref={semiHeadRef}
//           className="semiHeading border border-solid border-slate-100 px-[8px] py-[4px] text-[16px] rounded-full capitalize"
//         >
//           Unleash your digital success Story Today{" "}
//         </div>
//         <div
//           ref={headingRef}
//           className="Heading text-[60px] uppercase font-bold leading-none text-center mt-4 "
//         >
//           Power Up Your Business With Custom App And Website{" "}
//           <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
//             Solutions{" "}
//           </span>
//           .{" "}
//         </div>
//         <div className="details text-[18px] font-regular text-center mt-4">
//           Power up your business with custom app and website solutions from
//           Appyard, designed to boost growth and keep you ahead.
//         </div>

//         <div ref={buttonRef} className="buttonStructure flex gap-10 mt-10">
//           <div className="buttonAndArrow bg-blue-300 text-slate-900 md:px-6 px-4 py-3 font-neue-montreal md:text-sm text-xs uppercase border border-solid border-zinc-950 rounded-full flex gap-5 justify-center items-center font-bold">
//             <div className="">Get Started</div>
//           </div>
//           <div className="freeConsultation text-sm px-[16px] py-[12px] rounded-full font-regular border-b-[1px] ">
//             Request Free Consultation
//           </div>
//         </div>
//         <div
//           ref={secondaryButtonRef}
//           className="secondaryButtonStructure text-[16px] font-regular flex items-center justify-between w-full border-solid border-t-[1px] border-[#F5F7F8] mt-16 pt-10"
//         >
//           <div className="leftBtn underline">
//             For Public And Private Companies
//           </div>
//           <div className="rightBtn underline">How We Can Help You</div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const semiHeadRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const secondaryButtonRef = useRef(null); // Reference for secondary button structure

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(semiHeadRef.current, {
      x: -30,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
      ease: "power2.out",
    })
      .from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.5,
        ease: "power2.out",
      })
      .from(buttonRef.current, {
        y: 30, // Change this to a smaller value to reduce the popping effect
        opacity: 0,
        duration: 0.8, // Shortened duration for smoother animation
        stagger: 0.5,
        ease: "power2.out",
      })
      .from(secondaryButtonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.5,
        ease: "power2.out",
      });
  });

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.4"
      className="w-full md:h-screen flex flex-col pt-1 text-[#F5F7F8]"
    >
      <div className="heroStructure flex flex-col justify-center items-center md:mt-40 px-10 md:px-20">
        <div
          ref={semiHeadRef}
          className="semiHeading border border-solid border-slate-100 px-[8px] py-[4px] text-[16px] rounded-full capitalize"
        >
          Unleash your digital success Story Today{" "}
        </div>
        <div
          ref={headingRef}
          className="Heading text-[60px] uppercase font-bold leading-none text-center mt-4 "
        >
          Power Up Your Business With Custom App And Website{" "}
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
            Solutions{" "}
          </span>
          .{" "}
        </div>
        <div className="details text-[18px] font-regular text-center mt-4">
          Power up your business with custom app and website solutions from
          Appyard, designed to boost growth and keep you ahead.
        </div>

        <div ref={buttonRef} className="buttonStructure flex gap-10 mt-10">
          <div className="buttonAndArrow bg-blue-300 text-slate-900 md:px-6 px-4 py-3 font-neue-montreal md:text-sm text-xs uppercase border border-solid border-zinc-950 rounded-full flex gap-5 justify-center items-center font-bold">
            <div className="">+918981262022</div>
          </div>
          <div className="freeConsultation text-sm px-[16px] py-[12px] rounded-full font-regular border-b-[1px] ">
            Request Free Consultation
          </div>
        </div>
        <div
          ref={secondaryButtonRef}
          className="secondaryButtonStructure text-[16px] font-regular flex items-center justify-between w-full border-solid border-t-[1px] border-[#F5F7F8] mt-16 pt-10"
        >
          <div className="leftBtn underline">
            For Public And Private Companies
          </div>
          <div className="rightBtn underline">How We Can Help You</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;



