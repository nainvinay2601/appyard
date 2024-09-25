import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";

import Hero from "./components/Hero";
import Roi from "./components/Roi";
import Snapshot from "./components/Snapshot";
import WhatWeDo from "./components/WhatWeDo";
// import CollaborativeProcess from "./components/CollaborativeProcess";
// import CompaniesCarousel from "./components/CompaniesCarousel";
import ReadyForProject from "./components/ReadyForProject";
import FAQSection from "./components/FAQSection";
import CaseStudies from "./components/CaseStudies";
import Footer from "./components/Footer";
// import BlogSection from "./components/BlogSection";
import Blog from "./components/Blog";
import Services from "./components/Services";
import Company from "./components/Company";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Roi />
              <Snapshot />
              <WhatWeDo />
             
              <CaseStudies />
              <Blog />
              <Company />
              <ReadyForProject />
              <FAQSection />
              <Footer />
            </>
          }
        />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
