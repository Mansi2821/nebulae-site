"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0f0f1a] via-[#120e28] to-[#1a1531] text-white px-6 md:px-20 py-20 relative z-10 overflow-hidden">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 relative z-10">
        {/* Logo + Description */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-6 h-6" />
            <h2 className="text-xl font-bold">Nebulae</h2>
          </div>
          <p className="text-sm text-[#cbd5e1] leading-relaxed max-w-xs">
            Welcome to our trading site! We offer the best, most affordable
            products and services around. Shop now and start finding great deals!
          </p>
        </div>

         {/* Right Side: Star Image */}
        <div className="hidden lg:block">
          <img src="/star4.png" alt="star" className="w-24 h-24 object-contain" />
        </div>
      

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#cbd5e1]">
            <li>About Us</li>
            <li>Teams</li>
            <li>Services</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-[#cbd5e1]">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Support Center</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-[#cbd5e1]">
            <li>Careers</li>
            <li>Updates</li>
            <li>Job</li>
            <li>Announce</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2e2e48] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <p className="text-xs text-[#cbd5e1] text-center md:text-left">
          Copyright © 2023 designed by Thetork
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter].map((Icon, idx) => (
            <div
              key={idx}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1b29] text-white hover:bg-purple-600 transition"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;



