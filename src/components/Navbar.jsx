"use client";
import Link from 'next/link';
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/error" },
  { name: "About Us", href: "#" },
  { name: "Courses", href: "#" },
  { name: "Blogs", href: "/blog" },
  { name: "Careers", href: "/error" }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-4 right-4 z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md bg-[#3A384F]/80 rounded-2xl px-6 py-3 max-w-[1300px] mx-auto shadow-lg flex justify-between items-center"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          <h1 className="text-white text-xl font-bold">Nebulae</h1>
        </div>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-12 text-white text-lg font-medium">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <span className="hover:text-purple-400 transition-colors duration-300 cursor-pointer">
                  {link.name}
                </span>
              </Link>
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

      {/* Mobile Menu - Left Panel */}
      {isOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 h-full w-64 bg-[#3A384F] z-50 rounded-tr-3xl rounded-br-3xl p-6 flex flex-col gap-6 shadow-2xl md:hidden"
        >
          {/* Close button */}
          <div className="flex justify-between items-center mb-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Logo" className="w-8 h-8" />
              <h1 className="text-white text-xl font-bold">Nebulae</h1>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X color="white" size={28} />
            </button>
          </div>

          {/* Nav Links (Mobile) */}
          <ul className="flex flex-col gap-4 text-white text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <span
                    onClick={() => setIsOpen(false)}
                    className="hover:text-purple-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Let's Talk Button */}
          <div className="mt-auto">
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
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
