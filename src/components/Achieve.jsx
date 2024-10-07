import React from 'react'

function Achieve() {
  return (
    <div className="category w-full h-screen leading-none rounded-tr-3xl rounded-tl-3xl gap-10 flex justify-between py-20 bg-slate-100 px-10 md:px-20 text-black">
      <div className="baseDeets">
        <div className="heading text-[48px] font-medium ">
          <p>Achieve Your Business Goals </p>
          <p>With Web Development Solution</p>
        </div>
        <div className="paragraph text-[24px] pt-5 pb-10 ">
          <p>Our battle-tested developers specialize in a </p>
          <p>wide range of web development services. </p>
          <p>Here are some solutions that we can deliver for you.</p>
        </div>
        <div className="buttonFillForm">
          <button className="py-4 px-6 rounded-full border-[1px] border-slate-900 font-medium">
            Start A Project
          </button>
        </div>
      </div>
      <div className="servicesContainer h-full w-[50vw] flex flex-col gap-4">
        <div className="serviceUpperContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#C3ABFF] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">Website</div>
            <div className="details">
              A well-designed website is a powerful marketing and communication
              tool that helps build trust and generate leads.
            </div>
          </div>
          <div className="service h-full bg-[#FBC1D4] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">E-Commerce</div>
            <div className="details">
              With E-Commerce solutions,businesses can operate 24 hours a day, 7
              days a week, and reach customers in any time zone.
            </div>
          </div>
        </div>
        <div className="serviceLowerContainer h-1/2 w-full flex gap-4">
          <div className="service h-full bg-[#FED35B] w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Web Application
            </div>
            <div className="details">
              Web Application can reach a global audience. They're interactive
              and engaging, so can easily hold user's attention.
            </div>
          </div>
          <div className="service h-full bg-[#1e1e1e] text-white w-1/2 flex flex-col justify-between p-4">
            <div className="heading text-[32px] font-medium ">
              Content Management System
            </div>
            <div className="details">
              A dedicated CMS designed to the specific needs of your business
              will save time and money by optimizing internal workflows.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achieve