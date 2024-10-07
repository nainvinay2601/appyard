import React from "react";

function AppDevAboutServices() {
  return (
    <div className="w-full h-screen flex   pt-1 bg-[#F5F7F8] text-black px-10 md:px-20">
      <div className="headingAndButton  flex flex-col pt-20 gap-10 w-1/2  ">
        <div className="heading font-medium text-[64px] leading-none  ">
          <p>Our High-End</p>
          <p>Mobile App Development</p>
          <p>Services.</p>
        </div>
        <div className="contactButtons flex justify-start items-center gap-5 my-8 mb-10 md:mn-0">
          <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
            <div className="buttonAndArrow px-6 py-3 font-neue-montreal text-sm uppercase border border-solid border-[#fffce1] rounded-full flex gap-5 justify-center items-center font-regular bg-black text-white">
              <div className="">Start The Project</div>
              <div className="circle w-2 h-2 bg-white rounded-full"></div>
            </div>
          </a>
          <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
            <div className="buttonAndArrow px-6 py-3 font-neue-montreal text-sm uppercase border border-solid border-[#fffce1]  rounded-full flex gap-5 justify-center items-center font-regular text-white bg-black ">
              <div className="">+918981262022</div>
              <div className="circle w-2 h-2 bg-white rounded-full "></div>
            </div>
          </a>
        </div>
      </div>
      <div className="Information  flex flex-col pt-20 gap-10 w-1/2 leading-none  ">
        {/* <div className="headingInfo flex flex-col justify-evenly ">
          <p className="text-[32px]">
            Web development encompasses 
          </p>
          <p className="text-[32px]">
             a wide range of services
          </p>
        </div> */}
        <div className="listOfServices flex gap-20 text-[32px] ">
          <ul className="flex flex-col gap-4">
            <li>Custom iOS and Android apps development</li>
            <li>Native and cross-platform solutions</li>
            <li>Second platform app development</li>
            <li>UI/UX Design</li>
            <li>Consulting and prototyping</li>
          </ul>
          <ul className="flex flex-col gap-4">
            {" "}
            <li>Automated QA and testing</li>
            <li>Power management , notification and geofencing</li>
            <li>Embedded Android & AOSP customiztions</li>
            <li>Maintenance and post-warranty support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AppDevAboutServices;
