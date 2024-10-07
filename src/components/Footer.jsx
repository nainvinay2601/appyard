import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-5   h-screen md:px-20 px-10 py-10   text-[#ffffff] rounded-tr-3xl rounded-tl-3xl ">
      <div className="md:w-1/2 md:h-full flex  flex-col md:justify-between font-bold   mb-5 md:mb-0  ">
        <div className="footerTitle mb-2 md:mb-0 ">
          <h1 className="text-[12vw] md:text-[5vw] uppercase leading-none">
            Let's
          </h1>
          <h1 className="text-[12vw] md:text-[6vw] uppercase leading-none gradient-text ">
            WOrk
          </h1>
          <h1 className="text-[12vw] md:text-[7vw] uppercase leading-none">
            Together
          </h1>
        </div>
        <div className="contactButtons flex justify-start items-center gap-5 my-8 mb-10 md:mn-0">
          <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
            <div className="buttonAndArrow px-6 py-3 font-neue-montreal text-sm uppercase border border-solid border-[#fffce1] rounded-full flex gap-5 justify-center items-center font-regular bg-black text-white">
              <div className="">Start The Project</div>
              <div className="circle w-2 h-2 bg-white rounded-full"></div>
            </div>
          </a>
          <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
            <div className="buttonAndArrow px-6 py-3 font-neue-montreal text-sm uppercase border border-solid border-[#fffce1]  rounded-full flex gap-5 justify-center items-center font-regular text-white ">
              <div className="">+918981262022</div>
              <div className="circle w-2 h-2 bg-white rounded-full "></div>
            </div>
          </a>
        </div>
        <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
          <div className="bottomTitle border-b border-zinc-300 w-fit pb-2">
            <h1 className="md:text-[2.5vw] text-[4vw]    font-neue-montreal font-extralight text-zinc-300  mt-5 md:mt-0  leading-[.75]">
              AppYard@gmail.com <span>&rarr;</span>
            </h1>
          </div>
        </a>
      </div>
      <div className="w-1/2  mt-5 md:mt-0 ">
        <div className="socialHeading font-bold">
          <h1 className="md:text-[7vw] text-[7vw]  uppercase leading-[.75] md:pb-10 pb-5">
            Socials
          </h1>
        </div>

        <div className="socialLinks">
          {["Instagram", "Github", "LinkedIn"].map((item, index) => {
            return (
              <a
                className="block capitalize font-neue-montreal "
                key={index}
                href="#"
              >
                {item}{" "}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Footer;
