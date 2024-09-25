import React, { useState } from "react";

const BlogSection = () => {
  // Blog categories and sample blog cards
  const categories = ["All", "Digital Design", "Technology", "Research"];
  const blogs = [
    { id: 1, title: "Digital Design Blog", category: "Digital Design" },
    { id: 2, title: "Technology Blog", category: "Technology" },
    { id: 3, title: "Research Blog", category: "Research" },
    { id: 4, title: "Digital Design 2", category: "Digital Design" },
    { id: 5, title: "Tech Trends", category: "Technology" },
    { id: 6, title: "Research Insights", category: "Research" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="w-full h-screen text-white bg-black px-10 md:px-20">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-5">
        <div className="text-2xl font-bold">App Yard</div>
        <ul className="hidden md:flex space-x-8">
          <li className="hover:text-gray-400 cursor-pointer">Top Clients</li>
          <li className="hover:text-gray-400 cursor-pointer">How It Works</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Blogs</li>
        </ul>
        <button className="hidden md:block px-6 py-2 bg-white text-black rounded-full">
          Contact Us
        </button>
        <button className="md:hidden text-white">
          {/* Hamburger Menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Headline */}
      <div className="text-center mt-10">
        <h1 className="text-5xl font-bold">Cultivating Insights:</h1>
        <p className="text-lg mt-3">
          This Is Your Gateway To A Diverse Range Of Thought-Provoking And
          Informative Content. We Cover A Wide Spectrum Of Topics.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center space-x-4 mt-10">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "bg-white text-black"
                : "bg-gray-700 text-white"
            } px-4 py-2 rounded-full`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blogs Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#00C2FF] rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105"
          >
            <h3 className="text-2xl font-bold mb-3">{blog.title}</h3>
            <p className="text-sm">
              Category: <span className="font-semibold">{blog.category}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
