import React from 'react'
import Brand from './Brand';
import WebDev from './WebDev';
import Design from './Design';
import AppDev from './AppDev';

function WhatWeDo() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.06"
      className="w-full rounded-tr-3xl rounded-tl-3xl py-20  pb-5   text-[#000000]  bg-blue-300"
    >
      <div className="heading font-medium text-[48px] px-10 md:px-20 ">
        What We Do
      </div>
      <div className="serviceContainer">
        <Brand />
        <AppDev />
        <WebDev />
        <Design />
      </div>
    </div>
  );
}

export default WhatWeDo