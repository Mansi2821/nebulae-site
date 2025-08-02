"use client";
import Navbar from "./Navbar";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
      <Navbar />

      <div className="absolute inset-0 -z-6 bg-[radial-gradient(circle_at_center,_#302b63,_#0f0c29,_#000000)]" />


      {/* Tagline */}
      <p className="text-base uppercase tracking-widest text-purple-300 mb-6 font-normal">
        We're the Experts
      </p>

      {/* Main Headline */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-6 font-normal">
        We Develope{" "}
        <span
          className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-400 to-blue-400"
          style={{
            backgroundImage: "linear-gradient(to right, #943bc7ff, #3682e0ff)",
          }}
        >
          Amazing
        </span>{" "}
        <br />
        Website For Your <span className="text-white">Business</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg mb-10 font-normal">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam...
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <a
          href="#"
          className="bg-gradient-to-r from-pink-400 to-blue-400 text-white px-6 py-3 rounded-md font-normal text-base hover:scale-105 transition"
          style={{
            backgroundImage: "linear-gradient(to right, #943bc7ff, #3682e0ff)",
          }}
        >
          View Work ↗
        </a>
        <a
          href="#"
          className="bg-[#151426] border border-white/10 px-6 py-3 rounded-md font-normal text-purple-400 text-base hover:bg-white/5 hover:scale-105 transition"
        >
          Get In Touch
        </a>
      </div>

      {/* Decorative stars */}
      <img src="/star.png" className="absolute left-10 top-1/4 w-5 animate-pulse" alt="star" />
      <img src="/star2.png" className="absolute right-10 top-1/3 w-6 animate-pulse" alt="star" />
      <img src="/star3.png" className="absolute left-1/3 bottom-20 w-8 animate-pulse" alt="star" />
      <img src="/star2.png" className="absolute right-[20%] bottom-1/4 w-4 animate-pulse" alt="star" />
      <img src="/star.png" className="absolute left-[15%] top-[15%] w-3 animate-pulse" alt="star" />

      {/* Brightness pulse animation */}
      <style jsx>{`
        @keyframes pulse-bright {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.4);
          }
        }
        .animate-pulse-bright {
          animation: pulse-bright 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
