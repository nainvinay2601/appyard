// import React from 'react'

// function FAQSection() {
//   return (
//     <div className="w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl  flex  gap-20  justify-between pt-20  mt-20   bg-slate-100 px-10 md:px-20 text-black">
//       <div className="heading text-[64px] capitalize  font-medium w-1/2  ">
//         <p>Frequently </p>
//         <p>Asked</p>
//         <p>Questions</p>
//       </div>
//       <div className="information text-[28px] w-1/2  ">
//         <div className="infoContainer flex justify-between gap-5 items-start border-t-[1px] border-black border-dashed  py-10   ">
//           <div className="num">1</div>
//           <div className="name font-medium ">Serial Collaboratos,</div>
//           <div className="description w-[15vw] text-[14px] ">
//             we do this that and that this with this that and tghats this
//           </div>
//         </div>
//         <div className="infoContainer flex justify-between gap-5 items-start border-t-[1px] border-black border-dashed  py-10   ">
//           <div className="num">2</div>
//           <div className="name font-medium ">Serial Collaboratos,</div>
//           <div className="description w-[15vw] text-[14px] ">
//             we do this that and that this with this that and tghats this
//           </div>
//         </div>
//         <div className="infoContainer flex justify-between gap-5 items-start border-t-[1px] border-black border-dashed  py-10   ">
//           <div className="num">3</div>
//           <div className="name font-medium ">Serial Collaboratos,</div>
//           <div className="description w-[15vw] text-[14px] ">
//             we do this that and that this with this that and tghats this
//           </div>
//         </div>
//         <div className="infoContainer flex justify-between gap-5 items-start border-t-[1px] border-black border-dashed  py-10  ">
//           <div className="num">4</div>
//           <div className="name font-medium ">Serial Collaboratos,</div>
//           <div className="description w-[15vw] text-[14px] ">
//             we do this that and that this with this that and tghats this, we do
//             this that and that this with this that and tghats this
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FAQSection

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FAQSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const itemsRef = useRef([]);

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

      // Animate each FAQ item with a stagger effect
      itemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 60%",
            scrub: true,
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl flex gap-20 justify-between pt-20 mt-20 bg-slate-100 px-10 md:px-20 text-black"
    >
      <div
        ref={headingRef}
        className="heading text-[64px] capitalize font-medium w-1/2"
      >
        <p>Frequently</p>
        <p>Asked</p>
        <p>Questions</p>
      </div>
      <div className="information text-[28px] w-1/2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)} // Collecting refs for each item
            className="infoContainer flex justify-between gap-5 items-start border-t-[1px] border-black border-dashed py-10"
          >
            <div className="num">{index + 1}</div>
            <div className="name font-medium">Serial Collaborators,</div>
            <div className="description w-[15vw] text-[14px]">
              We do this that and that this with this that and tghats this.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;
