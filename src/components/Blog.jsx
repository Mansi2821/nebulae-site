'use client';
import React from "react";
import Navbar from "@/components/Navbar";

const blogs = [
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog2.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog3.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog4.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog2.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog3.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog4.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
  {
    title: "Mobile-First Design Principles",
    summary: "Understanding the importance of mobile-first design and how to implement it effectively in your projects.",
    image: "/blog2.png",
    date: "Dec 3, 2024",
    author: "Alex Garcia",
    tag: "Design",
    time: "4 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 pb-20 font-sans">
      <Navbar />

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto pt-24 pb-6">
        <h1 className="text-4xl font-extrabold">Blogs</h1>
        <div className="mt-3 text-sm text-[#9ca3af]">
          <span className="text-[#a78bfa]">Home</span> / <span className="text-white">Blogs</span>
        </div>
      </div>

      {/* Featured Blog */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="col-span-2 bg-[#0f172a] rounded-2xl overflow-hidden shadow hover:shadow-[#38bdf8]/40 transition">
          <div className="relative">
            <img
              src="/blog-featured.png"
              alt="Featured Blog"
              className="w-full h-72 object-cover"
            />
            <span className="absolute top-4 left-4 bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
              Web Development
            </span>
          </div>
          <div className="p-6 space-y-3">
            <h2 className="text-xl font-bold">The Future of Web Development: Trends to Watch in 2025</h2>
            <p className="text-sm text-white/80">
              Explore the latest trends and technologies that are shaping the future of web development, from AI integration to new frameworks.
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-400 pt-2">
              <span>👤 Sarah Johnson</span>
              <span>📅 Dec 15, 2024</span>
            </div>
          </div>
        </div>

        {/* Side Featured Card */}
        <div className="grid gap-8">
          {blogs.slice(0, 1).map((blog, idx) => (
            <div key={idx} className="bg-[#0f172a] rounded-2xl overflow-hidden shadow hover:shadow-[#38bdf8]/40 transition">
              <div className="relative">
                <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
                <span className="absolute top-4 left-4 bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-base font-bold">{blog.title}</h4>
                <p className="text-sm text-white/80">{blog.summary}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-2">
                  <span>👤 {blog.author}</span>
                  <span>📅 {blog.date}</span>
                  <span>⏱ {blog.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* More Blog Cards */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.slice(1).map((blog, idx) => (
          <div
            key={idx}
            className="bg-[#0f172a] rounded-2xl overflow-hidden shadow hover:shadow-[#38bdf8]/40 transition"
          >
            <div className="relative">
              <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
              <span className="absolute top-4 left-4 bg-purple-600 text-xs font-semibold px-3 py-1 rounded-full">
                {blog.tag}
              </span>
            </div>
            <div className="p-6 space-y-3">
              <h4 className="text-base font-bold">{blog.title}</h4>
              <p className="text-sm text-white/80">{blog.summary}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-2">
                <span>👤 {blog.author}</span>
                <span>📅 {blog.date}</span>
                <span>⏱ {blog.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Articles Button */}
      <div className="mt-16 text-center">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium px-6 py-3 rounded-full hover:opacity-90 transition">
          View All Articles
        </button>
      </div>
    </div>
  );
};

export default Blog;
