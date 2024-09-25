import React, { useState, useRef } from "react";
import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import { FaBars, FaTimes } from "react-icons/fa"; 

import LogoImage from "/src/assets/Logo.svg"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const logoRef = useRef();
  const navLinksRef = useRef([]);

  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: "Top Clients", link: "#topclients" },
    { name: "How It Works", link: "#howitworks" },
    { name: "Services", link: "#services" }, 
    { name: "Blogs", link: "#blogs" }, 
   
    {
      name: "Contact Us",
      link: "mailto:vinaynain2601@gmail.com?subject=Contact%20from%20Portfolio",
    },
  ];

  return (
    <div
      ref={navRef}
      className="w-full backdrop-blur-sm fixed z-[10] flex justify-between items-center px-10 md:px-20 py-6 font-neue-montreal text-[#FBFFFE]   "
    >
      <div
        className="logo font-founders-grotesk md:text-[1.9vw] text-[7vw] leading-[0.75] flex justify-between items-center tracking-none "
        ref={logoRef}
      >
        <div className="logoImg">
          <img src={LogoImage} alt="" />
        </div>
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={handleMenuToggle}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <div
        ref={navLinksRef}
        className={`navItems h-screen md:h-fit flex-col md:flex-row md:flex md:justify-center md:items-center gap-5 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0e100f] md:bg-transparent text-[16vw] md:text-[15px] uppercase md:capitalize font-founders-grotesk md:font-neue-montreal px-10 md:px-0 pt-3 md:pt-0  ${
          menuOpen ? "flex" : "hidden"
        }`}
      >
        {navItems.map((item, index) =>
          item.download ? (
            <a
              key={index}
              href={item.link}
              className={`navLink font-regular leading-none hover:text-[#fffce1] hover:underline ${
                index === 4 ? "md:ml-[203px]  " : ""
              }`}
              download="resumeVinayNainFrontendDev.pdf"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ) : (
            <a
              key={index}
              href={item.link}
              className={`navLink font-regular leading-none hover:text-[#fffce1] hover:underline ${
                index === 4 ? "md:ml-[203px]  " : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
