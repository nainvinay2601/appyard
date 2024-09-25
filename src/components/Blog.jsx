// import React from 'react'

// function Blog() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-0.09"
//       className="w-full  rounded-tr-3xl rounded-tl-3xl  flex flex-col gap-10  justify-between pt-10  mt-20   bg-slate-100 px-10 md:px-20"
//     >
//       <div className="headingAndButton flex justify-between w-full items-center ">
//         <div className="heading text-[64px] font-medium  leading-none ">
//           What's Trending
//         </div>
//         <div className="buttonTrend">
//           <button className="border-[1px] border-slate-900 py-3 px-6  rounded-full font-medium bg-[#93C5FD] text-[16px]">
//             What's Trending
//           </button>
//         </div>
//       </div>
//       <div className="blogContainer   flex gap-10 justify-evenly py-10 ">
//         <div className="blog h-full w-full ">
//           <div className="blogVisual h-[70vh] bg-slate-500 rounded-md "></div>
//           <div className="blogheading text-[28px] pt-2 font-medium w-full ">
//             Rebranding and Restructure
//           </div>
//           <div className="blogtype mt-4 border-b-[1px] border-slate-900 pb-2 text-[18px] font-medium ">
//             Knowledge
//           </div>
//         </div>
//         <div className="blog h-full w-full ">
//           <div className="blogVisual h-[60vh] bg-slate-500 rounded-md"></div>
//           <div className="blogheading text-[28px] pt-2 font-medium ">
//             Rebranding and Restructure
//           </div>
//           <div className="blogtype mt-4 border-b-[1px] border-slate-900 pb-2 text-[18px] font-medium">
//             Knowledge
//           </div>
//         </div>
//         <div className="blog  w-full  ">
//           <div className="blogVisual h-[50vh] bg-slate-500 rounded-md"></div>
//           <div className="blogheading text-[28px] pt-2 font-medium ">
//             Rebranding and Restructure
//           </div>
//           <div className="blogtype mt-4  border-b-[1px] border-slate-900 pb-2 text-[18px] font-medium">
//             Knowledge
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Blog

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Blog() {
  const blogRef = useRef(null);
  const headingRef = useRef(null);
  const blogItemsRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading from top to normal position
      gsap.from(headingRef.current, {
        y: -60,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 90%", // Adjusted start position
          end: "top 60%",
          scrub: true,
        },
      });

      // Animate blog items entering from the sides without rotation
      gsap.from(blogItemsRefs.current, {
        x: (i) => (i % 2 === 0 ? -100 : 100), // Alternate direction for stagger effect
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top 90%", // Adjusted start position
          end: "top 50%",
          scrub: true,
        },
      });
    }, blogRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={blogRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.09"
      className="w-full rounded-tr-3xl rounded-tl-3xl flex flex-col gap-10 justify-between pt-10 mt-20 bg-slate-100 px-10 md:px-20"
    >
      <div className="headingAndButton flex justify-between w-full items-center">
        <div
          ref={headingRef}
          className="heading text-[64px] font-medium leading-none"
        >
          What's Trending
        </div>
        <div className="buttonTrend">
          <button className="border-[1px] border-slate-900 py-3 px-6 rounded-full font-medium bg-[#93C5FD] text-[16px]">
            View More
          </button>
        </div>
      </div>
      <div className="blogContainer flex gap-10 justify-evenly py-10">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="blog h-full w-full"
            ref={(el) => (blogItemsRefs.current[index] = el)}
          >
            <div
              className={`blogVisual h-[${
                70 - index * 10
              }vh] bg-slate-500 rounded-md`}
            ></div>
            <div className="blogheading text-[28px] pt-2 font-medium w-full">
              Rebranding and Restructure
            </div>
            <div className="blogtype mt-4 border-b-[1px] border-slate-900 pb-2 text-[18px] font-medium">
              Knowledge
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;

