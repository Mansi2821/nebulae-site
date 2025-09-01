"use client";
import React from "react";
import Link from "next/link";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaBehance,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0f0f1a] via-[#120e28] to-[#1a1531] text-white px-6 sm:px-10 lg:px-20 py-16 sm:py-20 relative z-10 overflow-hidden">

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 relative z-10">
        
        {/* Logo + Description */}
        <div className="lg:col-span-1 col-span-1 lg:ml-8">
  <Link href="/" className="flex items-center gap-2 mb-4 hover:opacity-80 transition">
    <img src="/logo.png" alt="logo" className="w-6 h-6" />
    <h2 className="text-xl font-bold">Nebulae</h2>
  </Link>
  <p className="text-sm text-[#cbd5e1] leading-relaxed max-w-xs">
    Welcome to our trading site! We offer the best, most affordable
    products and services around. Shop now and start finding great deals!
  </p>
</div>

        {/* Star Image */}
        <div className="hidden lg:block">
           <img src="/star3.png" alt="star" className="w-10 h-14 object-contain" />
         </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[#cbd5e1]">
            <li>About Us</li>
            <li>Teams</li>
            <li>Services</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Support</h4>
          <ul className="space-y-2 text-sm text-[#cbd5e1]">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQs</li>
            <li>Support Center</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Company</h4>
          <ul className="space-y-2 text-sm text-[#cbd5e1]">
            <li>Careers</li>
            <li>Updates</li>
            <li>Job</li>
            <li>Announce</li>
          </ul>
        </div>
      </div>

      {/* Divider Section */}
      <div className="border-t border-[#2e2e48] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-20">
        
        {/* Copyright */}
        <p className="text-xs text-[#cbd5e1] text-center md:text-left">
          © 2023 Nebulae. Designed by Nebulae
        </p>

        {/* Social Icons */}
<div className="flex gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide md:overflow-visible md:flex-wrap md:whitespace-normal">
  {[
    { Icon: FaFacebookF, link: "https://www.facebook.com/nebulaesoft/" },
    { Icon: FaXTwitter, link: "https://x.com/NebulaeItsoft" },
    { Icon: FaPinterestP, link: "https://www.pinterest.com/nebulaeitsoft/" },
    { Icon: FaInstagram, link: "https://www.instagram.com/uxui_research_nebulae/" },
    { Icon: FaLinkedinIn, link: "#" },
    { Icon: FaBehance, link: "https://www.behance.net/nebulaeuxuisolution" },
  ].map(({ Icon, link }, idx) => (
    <a
      key={idx}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1b29] text-white hover:bg-purple-600 transition"
    >
      <Icon size={16} />
    </a>
  ))}
</div>

      </div>
    </footer>
  );
};

export default Footer;
