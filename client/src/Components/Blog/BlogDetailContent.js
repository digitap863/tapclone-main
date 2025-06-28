import React from "react";
import StarPortal from "../Shared/StarPortal";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";
// Example blog image import (replace with actual image or prop)
import blog from "../../assets/home/blogimage.png";

const BlogDetailContent = () => {
  const navigate = useNavigate();
  return (
    <StarPortal>
      <div className="min-h-screen flex flex-col items-center bg-black py-20 px-2">
        <div className="w-full max-w-screen-lg mx-auto bg[#18181b]  shadow-lg borde border-[#232323] overflow-hidden">
          {/* Featured Image */}
          <img
            src={blog}
            alt="Blog Featured"
            className="w-full h-[50vh] object-cover object-center rounded-lg relative z-10 "
          />
          {/* Content */}
          <div className="p-6 md:p-10">
            {/* Back Button */}
            <button
              className="mb-6 text-gray-400 hover:text-[#D8FC00] flex items-center gap-2 transition"
              onClick={() => navigate('/blogs')}
            >
              <IoArrowBackSharp size={20} />
              <span className="text-sm">Back to Blogs</span>
            </button>
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Powerful Marketing Tips to Elevate Your Brand
            </h1>
            {/* Author & Date */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
              <span>by team tapclone</span>
              <span className="w-1 h-1 bg-gray-500 rounded-full inline-block"></span>
              <span>October 13, 2024</span>
            </div>
            {/* Blog Content */}
            <div className="text-[#F0ECEC] text-base md:text-lg leading-relaxed space-y-5">
              <p>
                Blogs serve various purposes, including sharing information, expressing personal thoughts and opinions. In today's digital world, a well-crafted blog can be a powerful tool to elevate your brand and connect with your audience.
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Identify your target audience and tailor your content to their needs.</li>
                <li>Use eye-catching visuals and engaging headlines.</li>
                <li>Optimize your posts for SEO to increase visibility.</li>
                <li>Share your blog on social media platforms to reach a wider audience.</li>
                <li>Encourage interaction through comments and feedback.</li>
              </ul>
              <p>
                By following these tips, you can create a blog that not only informs but also inspires and drives results for your brand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StarPortal>
  );
};

export default BlogDetailContent;
