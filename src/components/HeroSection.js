"use client";

import Navbar from "../components/Navbar";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
      <Navbar/>
      {/* Optional: background stars using radial grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
        <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.05]" />
        {/* You can add <img src="/stars.svg" /> here for stars */}
      </div>

      {/* Top tagline */}
      <p className="text-sm uppercase tracking-widest text-purple-300 mb-6 font-medium">
        We're the Experts
      </p>

      {/* Main headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
        We Develop{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Amazing
        </span>
        <br />
        Website For Your <span className="text-white">Bussines</span>
      </h1>

      {/* Sub text */}
      <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-400 to-blue-500 text-white px-6 py-3 rounded-full font-medium text-sm shadow-md hover:scale-105 transition"
        >
          View Work ↗
        </a>
        <a
          href="#"
          className="bg-[#151426] border border-white/10 px-6 py-3 rounded-full font-medium text-white text-sm hover:bg-white/5 transition"
        >
          Get In Touch
        </a>
      </div>

      {/* Optional decorative glowing stars */}
      <img src="/star.png" className="absolute left-10 top-1/4 w-5 animate-pulse" alt="star" />
      <img src="/star2.png" className="absolute right-10 top-1/3 w-6 animate-pulse" alt="star" />
      <img src="/star3.png" className="absolute left-1/3 bottom-20 w-8 animate-pulse" alt="star" />
    </section>
  );
};

export default HeroSection;



