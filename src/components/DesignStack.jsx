import React from "react";

function DesignStack() {
  return (
    <div
      className="  w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl  flex flex-col gap-10  justify-center pt-10  pb-10         bg-slate-100 px-10 md:px-20 text-black
"
    >
      <div className="heading text-center  ">
        <p className="text-[72px] font-medium ">Design that brings </p>
        <p className="text-[48px]">maximum value </p>
      </div>
      <div className="metricsContainer flex h-full  gap-5 w-full ">
        <div className="metric  h-full  bg-[#FBC1D4] rounded-xl flex flex-col justify-between p-6 w-1/2 ">
          <div className="heading text-[52px] font-medium  ">
            Application Design
          </div>
          <div className="deet text-[20px] ">
            Transfer your ideas into cutting edge Android apps with our expert
            App Designing Services.
          </div>
        </div>

        <div className="metric  h-full bg-blue-300 rounded-xl flex flex-col justify-between p-6 w-1/2  ">
          <div className="heading text-[52px] font-medium  ">
            Website Design
          </div>
          <div className="deet text-[20px] ">
            Transfer your ideas into cutting edge Android apps with our expert
            Website Designing Services.
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesignStack;
