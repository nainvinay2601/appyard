import React from "react";

function Metrics() {
  return (
    <div
      className="  w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl  flex flex-col gap-10  justify-center pt-20  pb-10         bg-slate-100 px-10 md:px-20 text-black
"
    >
      <div className="heading text-center  ">
        <p className="text-[72px] font-medium ">Our Growth Story</p>
        <p className="text-[48px]">In Metrics</p>
      </div>
      <div className="metricsContainer flex h-full  gap-5 w-full ">
        <div className="metric  h-full w-1/4 bg-blue-300 rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[64px] font-medium  ">95%</div>
          <div className="deet text-[20px] ">
            Client Satisfaction, fostering strong partnership through
            exceptional service and reliable outcomes.
          </div>
        </div>
        <div className="metric  h-full w-1/4 bg-blue-300 rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[64px] font-medium  ">95%</div>
          <div className="deet text-[20px] ">
            Client Satisfaction, fostering strong partnership through
            exceptional service and reliable outcomes.
          </div>
        </div>
        <div className="metric  h-full w-1/4 bg-blue-300 rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[64px] font-medium  ">95%</div>
          <div className="deet text-[20px] ">
            Client Satisfaction, fostering strong partnership through
            exceptional service and reliable outcomes.
          </div>
        </div>
        <div className="metric  h-full w-1/4 bg-blue-300 rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[64px] font-medium  ">95%</div>
          <div className="deet text-[20px] ">
            Client Satisfaction, fostering strong partnership through
            exceptional service and reliable outcomes.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metrics;
