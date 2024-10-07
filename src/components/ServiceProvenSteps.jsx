import React from 'react'

function ServiceProvenSteps() {
  return (
    <div className="w-full rounded-tr-3xl h-full flex flex-col gap-5  rounded-tl-3xl   pt-40 pb-20 px-10 md:px-20 text-slate-100">
      <div className="heading text-[64px] leading-none font-medium pb-10 ">
           Our Proven  Process
      </div>
      <div className="textAndStep flex gap-5  h-[60vh] ">
        <div className="headingText   bg-[#ffffff] w-2/3 rounded-xl text-[48px] font-medium p-6 leading-none text-black ">
          <p>Our process ensures</p>
          <p>efficient,tailored</p>
          <p>delivery.</p>
        </div>
        <div className="step flex justify-between flex-col bg-[#c3abff] w-full rounded-xl leading-none p-6 text-black ">
          <div className="heading__Step flex gap-2  leading-none font-medium text-[52px] ">
            <div className="nuumber">1.</div>
            <div className="textHead">
              <p>Consult </p>
              <p>Your Ideas.</p>
            </div>
          </div>

          <p className="text-[20px]">
        Setting the direction with our web development consultants.
          </p>
        </div>
      </div>
      <div className="textAndStep flex gap-5  h-[60vh]">
        <div className="step flex justify-between flex-col bg-[#FED35B] w-full rounded-xl leading-none p-6 text-black ">
          <div className="heading__Step flex gap-2  leading-none font-medium text-[52px] ">
            <div className="nuumber">2.</div>
            <div className="textHead">
              <p>Choose A</p>
              <p>Technology.</p>
            </div>
          </div>

          <p className="text-[20px]">
         Deciding about the tech stack and the overall approach
          </p>
        </div>
        <div className="headingText  bg-[#1E1E1E] w-2/3 rounded-xl text-[48px] font-medium p-6 leading-none text-white ">
          <p>Building</p>
          <p>Seamless</p>
          <p>Design.</p>
        </div>
      </div>
      <div className="textAndStep flex gap-5  h-[60vh]">
        <div className="headingText  bg-[#fbc1d4]   w-2/3 rounded-xl text-[48px] font-medium p-6 leading-none text-black ">
          <p>Developing</p>
          <p>Quality,through</p>
          <p>Technology.</p>
        </div>
        <div className="step flex justify-between flex-col bg-[#00C2FF] w-full rounded-xl leading-none p-6 text-black ">
          <div className="heading__Step flex gap-2  leading-none font-medium text-[52px] ">
            <div className="nuumber">5.</div>
            <div className="textHead">
              <p>Reach</p>
              <p>The Market.</p>
            </div>
          </div>

          <p className="text-[20px]">
          Launching your product and keeping it in good form with support and maintenance.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceProvenSteps