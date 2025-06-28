import React from "react";
import StarPortal from "../Shared/StarPortal";
import astro from "../../assets/home/astro2.svg";
import blog from "../../assets/home/blogimage.png";
import { useNavigate } from "react-router-dom";

const BlogListContent = () => {
  return (
    <StarPortal>
      <div className="w-full relative min-h-screen ">
        <img src={astro} alt="astro" className="absolute top-20 right-0 " />
        <div className="container mx-auto px-20">
          <div className="flex flex-col items-center justify-center min-h-[40vh] relative">
            <h2 className="text-[#D8FC00] text-9xl font-poppins font-extrabold  leading-[1.1] animate-[textStroke_0.5s_ease-out_2.5s_forwards] inline-block mb-8">
              Blogs
            </h2>
            <p className="text-white text-xl font-poppins font-thin max-w-2xl text-center">
              From Strategy to Success – Expert Digital Marketing Insights
            </p>
          </div>
          <div className="mt-10">
            <p className="text-white text-3xl font-poppins font-thin max-w-2xl text-left">
              Latest Blogs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-5">
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </StarPortal>
  );
};

export default BlogListContent;
const BlogCard = () => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col bg-[#18181b]/80 border border-[#2e2e38] shadow-lg rounded-xl overflow-hidden my-4 backdrop-blur-md transform transition duration-300 hover:scale-95 hover:shadow-2xl hover:border-[#D8FC00] relative z-20" onClick={() => navigate('/blogs/dfsa')}>
      {/* Image Section */}
      <div className="w-full h-64 md:h-auto overflow-hidden">
        <img
          src={blog}
          alt="blog1"
          className="w-full h-full object-cover transition duration-300 hover:scale-110 "
        />
      </div>
      {/* Text Section */}
      <div className="w-full flex flex-col justify-center p-6 transition duration-300">
        <h2 className="text-2xl font-medium mb-2 text-white hover:text-[#D8FC00] transition duration-300">
          Powerful Marketing Tips to Elevate Your Brand
        </h2>
        <p className="text-gray-300 mb-4 line-clamp-4 hover:text-white transition duration-300">
          Blogs serve various purposes, including sharing information,
          expressing personal thoughts and opinions.
        </p>
        <div className="text-gray-500 text-sm mt-auto group-hover:text-gray-400 transition duration-300">
          October 13, 2024
        </div>
      </div>
    </div>
  );
};
