import React from 'react'

function Match() {
  return (
    <div className="w-full leading-none rounded-tr-3xl h-screen rounded-tl-3xl py-20 px-10 md:px-20 flex  bg-black-900  gap-10 text-black  ">
      <div className="startProject p-10 rounded-xl  h-full bg-[#C3ABFF] w-[60%] flex flex-col justify-between   ">
        <div className="headingAndPara">
          <p className='text-[24px] font-medium ' >Got a vision? Let's Build</p>
          <p className='text-[24px] font-medium ' > Your Ideas deserve more than just planning</p>
        </div>
        <div className="letsStart text-[64px] font-medium  ">Let's Start</div>
      </div>
      <div className="pastProjects bg-slate-100  rounded-xl w-[40%] p-10 flex flex-col justify-between ">
        <div className="headingAndPara text-[24px] font-medium  ">
          Take a look at the projects that define what we do best
        </div>
        <div className="checkWork text-[64px] font-medium ">Our Work</div>
      </div>
    </div>
  );
}

export default Match