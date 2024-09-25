// import React from 'react'

// function Snapshot() {
//   return (
//     <div
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-0.1"
//       className="w-full h-screen rounded-tr-3xl rounded-tl-3xl  flex gap-40  justify-between pt-10  mt-20  text-[#000000] bg-slate-100 px-10 md:px-20"
//     >
//       <div className="heading  text-[48px] leading-none ">
//         <p>AppYard</p>
//         <p>Snapshot</p>
//       </div>
//       <div className="shots   flex flex-col  gap-20   w-3/4 ">
//         <div className="upperShot flex justify-between">
//           <div className="shotLeft w-1/2">
//             <div className="heading  text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4 ">
//               We are Proud of Our History and our accomplishment , but we’re
//               even More excited for future.
//             </div>
//           </div>
//           <div className="shotRight w-1/2   ">
//             <div className="heading  text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4 ">
//               We are Proud of Our History and our accomplishment , but we’re
//               even More excited for future.
//             </div>
//           </div>
//         </div>
//         <div className="lowerShot flex justify-between ">
//           <div className="shotLeft w-1/2">
//             <div className="heading  text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4 ">
//               We are Proud of Our History and our accomplishment , but we’re
//               even More excited for future.
//             </div>
//           </div>
//           <div className="shotRight w-1/2 ">
//             <div className="heading  text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4 ">
//               We are Proud of Our History and our accomplishment , but we’re
//               even More excited for future.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Snapshot

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function Snapshot() {
//   const snapshotRef = useRef(null);
//   const shotsRefs = useRef([]);

//   useEffect(() => {
//     // Register the ScrollTrigger instance
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: snapshotRef.current,
//           start: "top center", // Trigger when the top of the snapshot reaches the center of the viewport
//           end: "bottom top", // End when the bottom of the snapshot reaches the top of the viewport
//           scrub: 1, // Smooth scrubbing, takes 1 second to catch up to the scrollbar
//         },
//       });

//       // Animate each shot in
//       shotsRefs.current.forEach((shot, index) => {
//         tl.from(
//           shot,
//           {
//             y: 50,
//             opacity: 0,
//             duration: 1,
//             stagger: 0.2, // Add stagger effect
//             ease: "power2.out",
//           },
//           index * 0.1
//         ); // Slight delay for each shot
//       });
//     }, snapshotRef);

//     return () => ctx.revert(); // Cleanup on unmount
//   }, []);

//   return (
//     <div
//       ref={snapshotRef}
//       data-scroll
//       data-scroll-section
//       data-scroll-speed="-0.1"
//       className="w-full h-screen rounded-tr-3xl rounded-tl-3xl flex gap-40 justify-between pt-10 mt-20 text-[#000000] bg-slate-100 px-10 md:px-20"
//     >
//       <div className="heading text-[48px] leading-none">
//         <p>AppYard</p>
//         <p>Snapshot</p>
//       </div>
//       <div className="shots flex flex-col gap-20 w-3/4">
//         <div className="upperShot flex justify-between">
//           <div
//             className="shotLeft w-1/2"
//             ref={(el) => (shotsRefs.current[0] = el)}
//           >
//             <div className="heading text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4">
//               We are Proud of Our History and our accomplishments, but we’re
//               even more excited for the future.
//             </div>
//           </div>
//           <div
//             className="shotRight w-1/2"
//             ref={(el) => (shotsRefs.current[1] = el)}
//           >
//             <div className="heading text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4">
//               We are Proud of Our History and our accomplishments, but we’re
//               even more excited for the future.
//             </div>
//           </div>
//         </div>
//         <div className="lowerShot flex justify-between">
//           <div
//             className="shotLeft w-1/2"
//             ref={(el) => (shotsRefs.current[2] = el)}
//           >
//             <div className="heading text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4">
//               We are Proud of Our History and our accomplishments, but we’re
//               even more excited for the future.
//             </div>
//           </div>
//           <div
//             className="shotRight w-1/2"
//             ref={(el) => (shotsRefs.current[3] = el)}
//           >
//             <div className="heading text-[36px]">Years</div>
//             <div className="numbers font-medium text-[36px]">04</div>
//             <div className="paragraph text-[20px] w-3/4">
//               We are Proud of Our History and our accomplishments, but we’re
//               even more excited for the future.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Snapshot;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Snapshot() {
  const snapshotRef = useRef(null);
  const shotsRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: snapshotRef.current,
          start: "top 75%", // Trigger when the top of the snapshot is 75% down the viewport
          end: "bottom 75%", // End when the bottom of the snapshot reaches the top of the viewport
          scrub: 1, // Smooth scrubbing
        },
      });

      // Animate each shot in with stagger
      shotsRefs.current.forEach((shot, index) => {
        tl.from(
          shot,
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2, // Add stagger to the animations
          },
          index * 0.1
        );
      });
    }, snapshotRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={snapshotRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.1"
      className="w-full h-auto min-h-screen rounded-tr-3xl rounded-tl-3xl flex gap-40 justify-between pt-10 mt-20 text-[#000000] bg-slate-100 px-10 md:px-20"
    >
      <div className="heading text-[48px] leading-none">
        <p>AppYard</p>
        <p>Snapshot</p>
      </div>
      <div className="shots flex flex-col gap-20 w-3/4">
        <div className="upperShot flex justify-between">
          <div
            className="shotLeft w-1/2"
            ref={(el) => (shotsRefs.current[0] = el)}
          >
            <div className="heading text-[36px]">Years</div>
            <div className="numbers font-medium text-[36px]">04</div>
            <div className="paragraph text-[20px] w-3/4">
              We are proud of our history and our accomplishments, but we’re
              even more excited for the future.
            </div>
          </div>
          <div
            className="shotRight w-1/2"
            ref={(el) => (shotsRefs.current[1] = el)}
          >
            <div className="heading text-[36px]">Years</div>
            <div className="numbers font-medium text-[36px]">04</div>
            <div className="paragraph text-[20px] w-3/4">
              We are proud of our history and our accomplishments, but we’re
              even more excited for the future.
            </div>
          </div>
        </div>
        <div className="lowerShot flex justify-between">
          <div
            className="shotLeft w-1/2"
            ref={(el) => (shotsRefs.current[2] = el)}
          >
            <div className="heading text-[36px]">Years</div>
            <div className="numbers font-medium text-[36px]">04</div>
            <div className="paragraph text-[20px] w-3/4">
              We are proud of our history and our accomplishments, but we’re
              even more excited for the future.
            </div>
          </div>
          <div
            className="shotRight w-1/2"
            ref={(el) => (shotsRefs.current[3] = el)}
          >
            <div className="heading text-[36px]">Years</div>
            <div className="numbers font-medium text-[36px]">04</div>
            <div className="paragraph text-[20px] w-3/4">
              We are proud of our history and our accomplishments, but we’re
              even more excited for the future.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Snapshot;


