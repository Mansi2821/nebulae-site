"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const LetsTalk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-10 font-sans relative overflow-hidden">
      <Navbar />

      {/* Decorative Stars */}
      <img src="/star3.png" alt="star" className="absolute top-10 left-10 w-12 h-12 opacity-90" />
      <img src="/star.png" alt="star" className="absolute top-16 right-12 w-5 opacity-80" />
      <img src="/star2.png" alt="star" className="absolute bottom-10 left-1/2 w-10 opacity-50" />
      <img src="/star.png" alt="star" className="absolute bottom-10 right-10 w-8 h-6 opacity-70" />

      <div className="max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Let’s <span className="text-[#7c3aed]">Get In Touch</span><br />With Us
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter].map((Icon, idx) => (
              <a href="#" key={idx} className="group">
                <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                  <Icon />
                </div>
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-white/80 text-base">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-xl mt-1" />
              <div>
                <p>0983888611</p>
                <p>0917749254</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-xl mt-1" />
              <div>
                <p>Manhhackt08@Gmail.Com</p>
                <p>Ckctm12@Gmail.Com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <div>
                <p>88 Sheridan Street</p>
                <p>534 Victoria Trail</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form with Image beside */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
          <form className="space-y-6 w-full lg:w-2/3">
            <div>
              <label className="block text-lg mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-lg mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message"
                className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-[#9333ea] to-[#3b82f6] hover:opacity-90 transition"
              style={{
            backgroundImage: "linear-gradient(to right, #943bc7ff, #3682e0ff)",
            fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
          }}
            >
              Contact Us Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LetsTalk;

