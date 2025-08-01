"use client";
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = ["Services", "About Us", "Courses", "Blogs", "Careers"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-4 right-4 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[#1e1e1e] rounded-2xl px-6 py-3 max-w-[1300px] mx-auto shadow-lg flex justify-between items-center"
      >
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-white text-xl font-bold">nebulae</h1>
        </div>

        {/* Center Nav Links (hidden on mobile) */}
        <ul className="hidden md:flex gap-8 text-white text-lg font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-purple-400 transition-colors duration-300"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Right: Button (desktop) */}
        <div className="hidden md:block">
          <Link href="/lets-talk">
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Let’s Talk
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X color="white" size={28} />
            ) : (
              <Menu color="white" size={28} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1e1e1e] rounded-2xl mt-2 px-6 py-4 max-w-[1300px] mx-auto"
        >
          <ul className="flex flex-col gap-4 text-white text-lg font-medium">
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-purple-400 transition-colors duration-300"
              >
                {link}
              </li>
            ))}
            <li>
              <button className="px-5 py-2 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-[#ff5edf] via-[#fb5294] to-[#57c1eb] shadow-md transition duration-300 hover:opacity-90">
                Let’s Talk
              </button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
