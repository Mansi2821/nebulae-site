"use client";
import React from "react";
import Navbar from "@/components/Navbar";

const blogs = [
  {
    title: "Mastering Web Design in 2025",
    summary: "Stay ahead with trends, tools, and layouts that define modern design.",
    image: "/blog1.png",
    date: "Aug 1, 2025",
  },
  {
    title: "Boost Your Productivity with AI",
    summary: "Discover how developers are using AI to supercharge their workflow.",
    image: "/blog2.png",
    date: "Jul 28, 2025",
  },
  {
    title: "Dark Mode: Just A Trend?",
    summary: "We explore the real impact and UX benefits of going dark.",
    image: "/blog3.png",
    date: "Jul 21, 2025",
  },
  {
    title: "Ultimate Guide to React Hooks",
    summary: "Learn how to use hooks effectively in your next project.",
    image: "/blog4.png",
    date: "Jul 15, 2025",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 pb-16 font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mt-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Our <span className="text-[#38bdf8]">Blogs</span>
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Discover insights, ideas, and updates from the tech world curated for
          creatives and developers like you.
        </p>
      </div>

      {/* Featured Blog */}
      <div className="max-w-6xl mx-auto mt-20">
        <div className="grid lg:grid-cols-2 gap-10 bg-[#273549] p-6 rounded-2xl shadow-xl hover:shadow-[#38bdf8]/40 transition">
          <img
            src="/blog-featured.png"
            alt="Featured Blog"
            className="w-full h-auto object-cover rounded-xl"
          />
          <div className="flex flex-col justify-center space-y-4">
            <p className="text-[#f472b6] text-sm font-semibold uppercase">Featured</p>
            <h2 className="text-3xl font-bold leading-tight">
              The Future of Web Development: 2025 and Beyond
            </h2>
            <p className="text-white/80">
              Explore how futuristic technologies and AI-powered tools are shaping the
              landscape of frontend and backend development. A must-read for aspiring developers!
            </p>
            <span className="text-sm text-white/60">August 2, 2025</span>
            <a
              href="#"
              className="inline-block w-fit px-5 py-2 mt-2 bg-gradient-to-r from-[#9333ea] to-[#3b82f6] rounded-md font-medium text-white hover:opacity-90"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto mt-24">
        <h3 className="text-2xl font-semibold mb-8">Recent Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-[#38bdf8]/30 transition"
            >
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-5 space-y-2">
                <p className="text-sm text-[#94a3b8]">{blog.date}</p>
                <h4 className="text-xl font-semibold">{blog.title}</h4>
                <p className="text-white/80 text-sm">{blog.summary}</p>
                <a
                  href="#"
                  className="text-[#38bdf8] hover:underline text-sm font-medium inline-block mt-2"
                >
                  Continue Reading →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
