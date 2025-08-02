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
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-white text-xl font-bold">Nebulae</h1>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-12 text-white text-lg font-medium">
          {navLinks.map((link, index) => (
            <li
              key={index}
              className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Let’s Talk Button (Desktop) */}
        <div className="hidden md:block">
          <Link href="/lets-talk">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#a259ff] via-[#b75cff] to-[#57c1eb] text-white px-6 py-2 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:opacity-90"
              style={{
                backgroundImage: "linear-gradient(to right, #943bc7ff, #3682e0ff)",
                fontSize: '1.1rem',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Let’s Talk ↗
            </motion.button>
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
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

      {/* Mobile Menu */}
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
                className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
              >
                {link}
              </li>
            ))}
            <li>
              <Link href="/lets-talk">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-full bg-gradient-to-r from-[#a259ff] via-[#b75cff] to-[#57c1eb] text-white px-5 py-2 rounded-lg font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:opacity-90"
                  style={{
            backgroundImage: "linear-gradient(to right, #943bc7ff, #3682e0ff)",
            fontSize: '1rem',
                    fontFamily: 'Poppins, sans-serif',
          }}
  
                >
                  Let’s Talk ↗
                </motion.button>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
