import React from "react";

function WebDevTechStack() {
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
        <div className="metric  h-full  bg-[#C3ABFF] rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[52px] font-medium  ">
            Frontend Development
          </div>
          <div className="deet text-[20px] ">
            We use the most popular frontend frameworks like React.js, Vue.js
            and Angular that enables us to create the surface layer of your
            product.
          </div>
        </div>
        <div className="metric  h-full  bg-[#FED35B] rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[52px] font-medium  ">
            Backend Development
          </div>
          <div className="deet text-[20px] ">
            We use server-side technologies like Python, Ruby on Rails, and
            Node.js for prototyping and development, producing fast and scalable
            web apps.
          </div>
        </div>
        <div className="metric  h-full bg-[#FBC1D4] rounded-xl flex flex-col justify-between p-6  ">
          <div className="heading text-[52px] font-medium  ">
            Full stack development
          </div>
          <div className="deet text-[20px] ">
            We deliver end-to-end web development,combining frontend and backend
            solutions and other technologies necessary to make your product a
            success.
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevTechStack;
