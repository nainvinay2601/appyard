// import React from 'react'

// function CaseStudies() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-0.06"
//       className="w-full rounded-tr-3xl rounded-tl-3xl py-40  px-10 md:px-20  bg-slate-100"
//     >
//       <div className="textStructur flex justify-center items-center flex-col">
//         <div className="heading text-[64px] leading-none  font-medium ">
//           {" "}
//           Our Standout Creations
//         </div>
//         <div className="paragrap text-[20px]">
//           Check out our standout projects, where creativity meets seamless user
//           experience.
//         </div>
//       </div>
//       <div className="caseBoxContainer h-[90vh] py-10   flex gap-10 ">
//         <div className="caseBox  w-full  flex flex-col justify-between gap-3">
//           <div className="visualBox h-[70vh] bg-slate-600 rounded-xl "></div>
//           <div className="textCont">
//             <div className="aboutProjectLiner text-[20px] font-medium ">
//               CapCome Capital | Turning crypto complexity into simplicity
//             </div>
//             <div className="type text-[16px] ">
//               Strategy - Visual - App Development
//             </div>
//           </div>
//         </div>
//         <div className="caseBox  w-full  flex flex-col justify-between gap-3">
//           <div className="visualBox h-[70vh] bg-slate-600 rounded-xl "></div>
//           <div className="textCont">
//             <div className="aboutProjectLiner text-[20px] font-medium ">
//               CapCome Capital | Turning crypto complexity into simplicity
//             </div>
//             <div className="type text-[16px] ">
//               Strategy - Visual - App Development
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="caseBoxContainer h-[90vh] py-10   flex gap-10 ">
//         <div className="caseBox  w-full  flex flex-col justify-between gap-3">
//           <div className="visualBox h-[70vh] bg-slate-600 rounded-xl "></div>
//           <div className="textCont">
//             <div className="aboutProjectLiner text-[20px] font-medium ">
//               CapCome Capital | Turning crypto complexity into simplicity
//             </div>
//             <div className="type text-[16px] ">
//               Strategy - Visual - App Development
//             </div>
//           </div>
//         </div>
//         <div className="caseBox  w-full  flex flex-col justify-between gap-3">
//           <div className="visualBox h-[70vh] bg-slate-600 rounded-xl "></div>
//           <div className="textCont">
//             <div className="aboutProjectLiner text-[20px] font-medium ">
//               CapCome Capital | Turning crypto complexity into simplicity
//             </div>
//             <div className="type text-[16px] ">
//               Strategy - Visual - App Development
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="exploreMoreButtonDiv flex justify-center">
//         <button className="border-[1px] border-slate-900 py-3 px-6  rounded-full font-medium bg-[#93C5FD] text-[16px]">
//           Explore More
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CaseStudies

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CaseStudies() {
  const caseStudiesRef = useRef(null);
  const headingRef = useRef(null);
  const caseBoxesRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading from top to normal position
      gsap.from(headingRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 75%",
          end: "top 50%",
          scrub: 1,
        },
      });

      // Animate case study boxes
      caseBoxesRefs.current.forEach((box, index) => {
        const direction = index % 2 === 0 ? -45 : 45; // Alternate direction for left and right boxes
        gsap.from(box, {
          x: direction,
          rotation: direction,
          opacity: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: box,
            start: "top 75%",
            end: "top 50%",
            scrub: 1,
          },
        });
      });
    }, caseStudiesRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      // ref={caseStudiesRef}
      // data-scroll
      // data-scroll-section
      // data-scroll-speed="-0.06"
      className="w-full rounded-tr-3xl rounded-tl-3xl py-40 px-10 md:px-20 bg-slate-100"
    >
      <div className="textStructur flex justify-center items-center flex-col">
        <div
          ref={headingRef}
          className="heading text-[64px] leading-none font-medium"
        >
          Our Standout Creations
        </div>
        <div className="paragrap text-[20px]">
          Check out our standout projects, where creativity meets seamless user
          experience.
        </div>
      </div>
      <div className="caseBoxContainer h-[90vh] py-10 flex gap-10">
        <div
          className="caseBox w-full flex flex-col justify-between gap-3"
          ref={(el) => (caseBoxesRefs.current[0] = el)}
        >
          <div className="visualBox h-[70vh] bg-slate-600 rounded-xl">
            <img src="/src/assets/kejsy-prevyu-dlya-sajta-18.png" alt="" />
          </div>
          <div className="textCont">
            <div className="aboutProjectLiner text-[20px] font-medium">
              CapCome Capital | Turning crypto complexity into simplicity
            </div>
            <div className="type text-[16px] ">
              Strategy - Visual - App Development
            </div>
          </div>
        </div>
        <div
          className="caseBox w-full flex flex-col justify-between gap-3"
          ref={(el) => (caseBoxesRefs.current[1] = el)}
        >
          <div className="visualBox h-[70vh] bg-slate-600 rounded-xl">
            <img src="/src/assets/kejsy-prevyu-dlya-sajta-4.png" alt="" />
          </div>
          <div className="textCont">
            <div className="aboutProjectLiner text-[20px] font-medium">
              CapCome Capital | Turning crypto complexity into simplicity
            </div>
            <div className="type text-[16px] ">
              Strategy - Visual - App Development
            </div>
          </div>
        </div>
      </div>
      <div className="caseBoxContainer h-[90vh] py-10 flex gap-10">
        <div
          className="caseBox w-full flex flex-col justify-between gap-3"
          ref={(el) => (caseBoxesRefs.current[2] = el)}
        >
          <div className="visualBox h-[70vh] bg-slate-600 rounded-xl">
            <img src="/src/assets/kejsy-prevyu-dlya-sajta.png" alt="" />
          </div>
          <div className="textCont">
            <div className="aboutProjectLiner text-[20px] font-medium">
              CapCome Capital | Turning crypto complexity into simplicity
            </div>
            <div className="type text-[16px] ">
              Strategy - Visual - App Development
            </div>
          </div>
        </div>
        <div
          className="caseBox w-full flex flex-col justify-between gap-3"
          ref={(el) => (caseBoxesRefs.current[3] = el)}
        >
          <div className="visualBox h-[70vh] bg-slate-600 rounded-xl">
            <img src="/src/assets/kejsy-prevyu-dlya-sajta-18.png" alt="" />
          </div>
          <div className="textCont">
            <div className="aboutProjectLiner text-[20px] font-medium">
              CapCome Capital | Turning crypto complexity into simplicity
            </div>
            <div className="type text-[16px] ">
              Strategy - Visual - App Development
            </div>
          </div>
        </div>
      </div>
      {/* <div className="exploreMoreButtonDiv flex justify-center">
        <button className="border-[1px] border-slate-900 py-3 px-6 rounded-full font-medium bg-[#93C5FD] text-[16px]">
          Explore More
        </button>
      </div> */}
    </div>
  );
}

export default CaseStudies;


