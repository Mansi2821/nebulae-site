"use client";
import React from "react";
import { ArrowUpRight, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const LearnMore = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#0f0f1a] via-[#120e28] to-[#1a1531] py-20 px-6 md:px-20 text-white relative overflow-hidden">

      {/* Background Stars */}
      <img
        src="/star.png"
        alt="star"
        className="absolute top-14 left-6 w-4 md:w-6 opacity-60"
      />
      <img
        src="/star.png"
        alt="star"
        className="absolute top-1/2 left-1/2 w-3 md:w-5 opacity-60"
      />
      <img
        src="/star4.png"
        alt="star"
        className="absolute top-10 right-10 w-30 h-20 opacity-60"
      />

      {/* Arrow Top */}
      <ArrowUpRight
        size={18}
        className="absolute top-10 left-1/2 -translate-x-1/2 text-[#a855f7]"
      />

      {/* Case Studies Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="case-study.jpg" // Replace with your actual image path
            alt="Case Study"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 relative"
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Learn More About <br />
            <span className="text-[#a855f7]">Our Case Studies</span>
          </h2>
          <p className="text-[#94a3b8] leading-relaxed">
            Hey there! So glad you stopped by to explore our case studies. Don’t miss out on this opportunity to learn about our successful projects and the amazing results that make it all happen!
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            Our portfolio showcases innovative solutions and exceptional outcomes delivered to our clients. From concept to completion, we’re dedicated to delivering results that exceed expectations and drive real business impact.
          </p>
          <div className="relative">
            <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-6 py-2 md:px-5 md:py-2 text-sm rounded-md transition duration-300">
              Explore More
            </button>
          </div>
        </motion.div>
      </div>

      {/* Arrow Bottom */}
      <Navigation
        size={28}
        className="absolute bottom-10 left-10 text-[#a855f7]"
      />

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center mt-28 relative">
        {/* Text Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 relative"
        >
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Learn More About <br />
            <span className="text-[#a855f7]">Our Projects</span>
          </h2>
          <p className="text-[#94a3b8] leading-relaxed">
            Hey there! So glad you stopped by to explore our case studies. Don’t miss out on this opportunity to learn about our successful projects and the amazing results that make it all happen!
          </p>
          <p className="text-[#94a3b8] leading-relaxed">
            Our portfolio showcases innovative solutions and exceptional outcomes delivered to our clients. From concept to completion, we’re dedicated to delivering results that exceed expectations and drive real business impact.
          </p>
          <div className="relative">
            <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold px-6 py-2 md:px-5 md:py-2 text-sm rounded-md transition duration-300">
              Explore More
            </button>
          </div>
        </motion.div>

        {/* Image Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="case-study2.jpg" // Replace with your actual image path
            alt="Projects"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LearnMore;
