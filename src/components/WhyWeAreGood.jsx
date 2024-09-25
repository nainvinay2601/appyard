// import React from 'react'

// function WhyWeAreGood() {
//   return (
//     <div className="w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl  flex  gap-20  justify-between pt-20  mt-20   bg-slate-100 px-10 md:px-20 text-black">
//       <div className="heading text-[64px] capitalize  font-medium w-1/2  ">
//         <p>Why </p>
//         <p>AppYard Is</p>
//         <p>Good?</p>
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

// export default WhyWeAreGood 

import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function WhyWeAreGood() {
  const { ref } = useGSAP({
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0 },
    duration: 1,
    stagger: 0.2,
    scrollTrigger: { trigger: ".trigger" }, // Trigger when it enters the viewport
  });

  return (
    <div className="trigger w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl flex gap-20 justify-between pt-20 mt-20 bg-slate-100 px-10 md:px-20 text-black">
      <div
        className="heading text-[64px] capitalize font-medium w-1/2"
        ref={ref}
      >
        <p>Why </p>
        <p>AppYard Is</p>
        <p>Good?</p>
      </div>
      <div className="information text-[28px] w-1/2">
        {Array.from({ length: 4 }, (_, index) => (
          <div
            key={index}
            className="infoContainer flex justify-between gap-5 items-start border-t-[1px] border-black border-dashed py-10"
            ref={ref}
          >
            <div className="num">{index + 1}</div>
            <div className="name font-medium">Serial Collaborators,</div>
            <div className="description w-[15vw] text-[14px]">
              we do this that and that this with this that and tghats this
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyWeAreGood;

