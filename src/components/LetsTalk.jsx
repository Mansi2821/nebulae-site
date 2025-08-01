import React from "react";
import Navbar from "@/components/Navbar"

const LetsTalk = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-6 py-10 font-sans">
      <Navbar/>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold leading-snug mb-6">
            Let’s <span className="text-[#7c3aed]">Get In Touch</span><br />With Us
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-6">
            <a href="#"><div className="w-10 h-10 bg-[#7c3aed] text-white rounded-full flex items-center justify-center text-xl">f</div></a>
            <a href="#"><div className="w-10 h-10 border rounded-full flex items-center justify-center text-xl">in</div></a>
            <a href="#"><div className="w-10 h-10 border rounded-full flex items-center justify-center text-xl">yt</div></a>
            <a href="#"><div className="w-10 h-10 border rounded-full flex items-center justify-center text-xl">tw</div></a>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 text-base text-white/80">
            <div className="flex items-start space-x-3">
              <span className="text-xl">📞</span>
              <div>
                <p>0983888611</p>
                <p>0917749254</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-xl">📧</span>
              <div>
                <p>Manhhackt08@Gmail.Com</p>
                <p>Ckctm12@Gmail.Com</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <span className="text-xl">📍</span>
              <div>
                <p>88 Sheridan Street</p>
                <p>534 Victoria Trail</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <form className="space-y-6">
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
              className="w-full px-4 py-3 rounded-md bg-white text-black focus:outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-md bg-gradient-to-r from-[#a855f7] to-[#38bdf8] hover:opacity-90 transition duration-300 font-semibold"
          >
            Contact Us Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default LetsTalk;
