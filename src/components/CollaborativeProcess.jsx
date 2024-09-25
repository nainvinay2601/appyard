import React, { useRef, useState, useEffect } from "react";

const CollaborativeProcess = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const steps = [
    { id: 1, title: "Step 1", description: "Description for Step 1" },
    { id: 2, title: "Step 2", description: "Description for Step 2" },
    { id: 3, title: "Step 3", description: "Description for Step 3" },
    { id: 4, title: "Step 4", description: "Description for Step 4" },
    { id: 5, title: "Step 5", description: "Description for Step 5" },
    { id: 6, title: "Step 6", description: "Description for Step 6" },
    { id: 7, title: "Step 7", description: "Description for Step 7" },
    { id: 8, title: "Step 8", description: "Description for Step 8" },
  ];

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      }
    };
  }, []);

  return (
    <div className="w-full h-screen flex gap-40  justify-between pt-1  mt-60  text-[#F5F7F8] px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-4 sm:mb-8">
          <button className="bg-transparent border border-white text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm">
            HOW APPYARD WORKS
          </button>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">
          <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
            COLLABORATIVE PROCESS
          </span>
          <span className="text-white">:</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12">
          How We Work To Achieve Success
        </h2>

        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              ←
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              →
            </button>
          )}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex-shrink-0 w-64 sm:w-72 bg-white rounded-lg p-4 text-black h-48 sm:h-56 flex flex-col justify-between"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeProcess;
