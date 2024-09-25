import React from 'react'
import WhatWeDo from './WhatWeDo';
import WhyWeAreGood from './WhyWeAreGood';
import Metrics from './Metrics';
import Category from './Category';
import Match from './Match'
import Footer from './Footer'
import Company from './Company';
// function Services() {
//   return (
//     <div className="w-full rounded-tr-3xl h-screen rounded-tl-3xl py-20    bg-black-900 text-white">
//       <div className="heroDeets h-[80vh] text-[64px] leading-none font-medium text-center flex  justify-center items-center  ">
//         <div className="textContainer">
//           <p> We equip, empower, and </p>
//           <p>inspire tomorrow’s leaders</p>
//           <p>through premium branding</p>
//         </div>
//       </div> 
//       <WhyWeAreGood/>
//       <Category/>
//       <Metrics/>
//       <Company/>
//       <Match/>
//       <Footer/>
 
//     </div>
//   );
// }

// export default Services 




function Services() {
  

  return (
    <div className="w-full rounded-tr-3xl h-screen rounded-tl-3xl py-20 bg-black-900 text-white">
      <div
        
        className="heroDeets h-[80vh] text-[64px] leading-none font-medium text-center flex justify-center items-center"
      >
        <div className="textContainer">
          <p> We equip, empower, and </p>
          <p>inspire tomorrow’s leaders</p>
          <p>through premium branding</p>
        </div>
      </div>

      <WhyWeAreGood />
      <Category />
      <Metrics />
      <Company />
      <Match />
      <Footer />
    </div>
  );
}

export default Services;

