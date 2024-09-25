import React, { useState } from "react";

const CompaniesCarousel = () => {
  // Sample company logos array (replace with actual logos)
  const companyLogos = [
    { id: 1, name: "Company 1" },
    { id: 2, name: "Company 2" },
    { id: 3, name: "Company 3" },
    { id: 4, name: "Company 4" },
    { id: 5, name: "Company 5" },
    { id: 6, name: "Company 6" },
    { id: 7, name: "Company 7" },
    { id: 8, name: "Company 8" },
    { id: 9, name: "Company 9" },
    { id: 10, name: "Company 10" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Function to handle previous button
  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? companyLogos.length - 5 : prevIndex - 1
    );
  };

  // Function to handle next button
  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex >= companyLogos.length - 5 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-screen flex flex-col  pt-1 mt-20 text-[#F5F7F8] px-10 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Companies We've Worked With</h2>
        <p className="text-lg">
          We’re Proud To Have Partnered With A Diverse Range Of Companies,
          Delivering Impactful Solutions And Driving Innovation Together.
        </p>
      </div>

      <div className="flex items-center justify-between w-full">
        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="bg-blue-400 text-black p-3 rounded-full focus:outline-none"
        >
          &#8592;
        </button>

        {/* Company Logos Carousel */}
        <div className="flex items-center space-x-6 overflow-hidden">
          {companyLogos.slice(startIndex, startIndex + 5).map((logo) => (
            <div
              key={logo.id}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-400 flex items-center justify-center text-black"
            >
              {/* Replace with actual logo */}
              <span className="text-xl">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="bg-blue-400 text-black p-3 rounded-full focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default CompaniesCarousel;
