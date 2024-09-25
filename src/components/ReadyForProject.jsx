import React, { useState, useEffect } from "react";

function ReadyForProject() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    // Define the event handler for mouse move
    const handleMouseMove = (e) => {
      // Get the mouse X and Y coordinates
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      // Calculate the difference between the mouse position and the center of the screen
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      // Calculate the angle using arctangent and convert it from radians to degrees
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      // Update the rotate state with the calculated angle adjusted by 180 degrees
      setRotate(angle - 180);
    };

    // Add the mouse move event listener to the window
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Dependency array ensures this effect runs only once after the initial render

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.15"
      className="w-full h-full relative   rounded-tr-3xl rounded-tl-3xl py-10 md:py-10 bg-[#f1b8f2] flex items-center justify-center  "
    >
      <div className="textAndButton">
        <div
          className="md:text-[12vw] text-[12vw]  text-red-600   
       uppercase text-center  font-bold leading-none"
        >
          <h1>Ready</h1>
          <h1>TO Start</h1>
          <h1>
            The Project
            <span className="font-neue-montreal font-semibold text-[13vw] ">
              ?
            </span>
          </h1>
        </div>

        <div className="contactButtons flex justify-center items-center gap-2 md:gap-5 my-4">
          <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
            <div className="buttonAndArrow px-4 md:px-6  py-3 font-neue-montreal text-xs md:text-sm uppercase border border-solid border-zinc-950  rounded-full flex gap-5 justify-center items-center font-regular bg-black text-white">
              <div className="">Start The Project</div>
              <div className="circle w-2 h-2 bg-white rounded-full"></div>
            </div>
          </a>
          <a href="mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio">
            <div className="buttonAndArrow md:px-6  px-4 py-3 font-neue-montreal md:text-sm text-xs uppercase border border-solid border-zinc-950  rounded-full flex gap-5 justify-center items-center font-semibold ">
              <div className="">Contact Us</div>
              <div className="circle w-2 h-2 bg-white rounded-full "></div>
            </div>
          </a>
        </div>
      </div>

      <div className="absolute flex gap-10   left-1/2 -translate-x-[50%]  -translate-y-[50%] ">
        <div className=" flex justify-center items-center  md:w-[12vw] md:h-[12vw] w-[10vw] h-[10vw] bg-zinc-100 rounded-full">
          <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative ">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]"
            >
              <div className="w-[2.5vw] h-[2.5vw] md:w-[2vw] md:h-[2vw]  bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center  md:w-[12vw] md:h-[12vw] w-[10vw] h-[10vw] bg-zinc-100 rounded-full">
          <div className="w-2/3 h-2/3 bg-zinc-900 rounded-full relative ">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]"
            >
              <div className="w-[2.5vw] h-[2.5vw] md:w-[2vw] md:h-[2vw]  bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyForProject;
