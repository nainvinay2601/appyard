import React from 'react'

function TechStack() {
  return (
    <div
      className="  w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl  flex flex-col gap-10  justify-center pt-10  pb-10         bg-slate-100 px-10 md:px-20 text-black
"
    >
      <div className="heading text-center  ">
        <p className="text-[72px] font-medium ">Tech that brings </p>
        <p className="text-[48px]">maximum value </p>
      </div>
      <div className="metricsContainer flex h-full  gap-5 w-full ">
        <div className="metric  h-full  bg-[#C3ABFF] rounded-xl flex flex-col justify-between p-6 w-1/2 ">
          <div className="heading text-[52px] font-medium  ">
            iOS App Development
          </div>
          <div className="deet text-[20px] ">
            Delight your experience with expressive and feature-rich native
            iOS/Android, cross-platform or Progressive Web Apps leveraging our
            extensive experience of working with all major technologies like
            Swift, Obj-C.
          </div>
        </div>

        <div className="metric  h-full bg-black text-white rounded-xl flex flex-col justify-between p-6 w-1/2  ">
          <div className="heading text-[52px] font-medium  ">
            Android App Development
          </div>
          <div className="deet text-[20px] ">
            Transfer your ideas into cutting edge Android apps with our expert
            Android App Development Services.
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack