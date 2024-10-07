import React, { useState, useEffect } from "react";

const CircleFollow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Circle that follows the cursor */}
      <div
        className="fixed bg-[#FBC1D4] rounded-full pointer-events-none z-10"
        style={{
          width: "20px",
          height: "20px",
          top: mousePosition.y - 10, // Subtracting half of circle size (20px/2) to center it
          left: mousePosition.x - 10, // Same for x-axis
        }}
      ></div>
    </div>
  );
};

export default CircleFollow;
