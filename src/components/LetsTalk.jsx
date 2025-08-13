"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import {
  FaFacebookF,
  FaPinterestP,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaXTwitter,
} from "react-icons/fa6";

const LetsTalk = () => {
  return (
    <div className="min-h-screen text-white px-6 py-10 font-sans relative overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#302b63,_#0f0c29,_#000000)]" />

      {/* Decorative Stars */}
      <img
        src="/star.png"
        alt="star"
        className="absolute top-16 right-12 w-5 opacity-90"
      />

      {/* Main Content Container (aligned with Navbar width) */}
      <div className="max-w-7xl mx-auto mt-16 grid lg:grid-cols-2 gap-16 items-start px-4">
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Let’s <span className="text-[#7c3aed]">Get In Touch</span>
            <br />
            With Us
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/nebulaesoft/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                <FaFacebookF />
              </div>
            </a>
            <a
              href="https://x.com/NebulaeItsoft"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                <FaXTwitter />
              </div>
            </a>
            <a
              href="https://www.pinterest.com/nebulaeitsoft/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                <FaPinterestP />
              </div>
            </a>
            <a
              href="https://www.instagram.com/uxui_research_nebulae/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                <FaInstagram />
              </div>
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://www.behance.net/nebulaeuxuisolution"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="w-10 h-10 rounded-full border border-white/40 hover:border-[#3b82f6] transition-colors flex items-center justify-center text-lg group-hover:text-[#3b82f6]">
                <FaBehance />
              </div>
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-white/80 text-base">
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-xl mt-1" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-sm">
                  Our customer care is open from Mon–Fri, 10:00 am to 5:00 pm
                </p>
                <p>+8801712581668</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-xl mt-1" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-sm">
                  Our support team will get back to you during standard
                  business hours.
                </p>
                <p>sales@nebulaesoft.com</p>
                <p>support@nebulaesoft.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-xl mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p>
                  Bailey Road - HQ, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full flex flex-col lg:flex-row gap-6 items-start">
          <form className="space-y-6 w-full lg:w-4/5">
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
                backgroundImage:
                  "linear-gradient(to right, #943bc7ff, #3682e0ff)",
                fontSize: "1rem",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contact Us Now
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Stars */}
      <div className="relative mt-20 mb-4 max-w-7xl mx-auto px-4">
        <img
          src="/star3.png"
          alt="star"
          className="absolute -top-6 left-40px w-10 opacity-60"
        />
        <img
          src="/star.png"
          alt="star"
          className="absolute -top-6 right-10 w-8 h-6 opacity-90"
        />
      </div>

{/* Our Global Office Section */}
<div className="mt-28 max-w-7xl mx-auto px-4">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#302b63,_#0f0c29,_#000000)]" />
  <h2 className="text-3xl md:text-4xl font-semibold text-left mb-12">
    Our <span className="text-[#6366f1]">Global Office</span>
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      {
        country: "Bangladesh",
        address: "Bailey Road - HQ, Dhaka, Bangladesh",
        icon: "/location-1.png",
      },
      {
        country: "Bangladesh",
        address: "Hathazari Road, Chittagong, Bangladesh",
        icon: "/location-2.png",
      },
      {
        country: "India",
        address: "Dehri On Sone, Bihar, India",
        icon: "/location-3.png",
      },
    ].map((office, idx) => (
      <div
        key={idx}
        className="bg-[#1e1e2f] rounded-xl p-6 shadow-md text-white/90 border border-white/5"
      >
        <div className="mb-4">
          <img src={office.icon} alt="icon" className="w-40 h-30" />
        </div>
        {/* Country in bold */}
        <h3 className="text-xl font-semibold mb-1">{office.country}</h3>
        {/* Address in normal text */}
        <p className="text-sm mb-3 leading-relaxed">{office.address}</p>
        <p className="text-sm text-[#93c5fd] mb-1">sales@nebulaesoft.com</p>
        <p className="text-sm text-[#93c5fd] mb-1">support@nebulaesoft.com</p>
        <p className="text-sm text-[#93c5fd]">+8801712581668</p>
      </div>
    ))}
  </div>
</div>


    </div>
  );
};

export default LetsTalk;


