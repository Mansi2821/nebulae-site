// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] px-6">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center py-6">
//         <div className="text-white font-bold text-2xl flex items-center space-x-2">
//           <img src="/globe.svg" alt="Logo" className="w-6 h-6" />
//           <span>Nebulae</span>
//         </div>
//         <ul className="hidden md:flex items-center space-x-8 text-white text-sm font-medium">
//           <li><a href="#">Services</a></li>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Courses</a></li>
//           <li><a href="#" className="text-purple-400">Blogs</a></li>
//           <li><a href="#">Careers</a></li>
//         </ul>
//         <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:scale-105 transition">
//           Let's Talk ↗
//         </button>
//       </nav>

//       {/* Hero Section */}
//       <section className="text-center mt-20">
//         <p className="text-sm tracking-widest text-gray-400 mb-4">WE'RE THE EXPERTS</p>
//         <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
//           We Develope <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Amazing</span><br />
//           Website For Your <span className="text-white">Bussines</span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-10">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center space-x-4">
//           <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 text-white rounded-md font-semibold shadow-md hover:scale-105 transition">
//             View Work ↗
//           </button>
//           <button className="border border-white/20 px-6 py-2 text-white rounded-md font-semibold hover:bg-white/10 transition">
//             Get In Touch
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }





"use client";

import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden text-white font-sans">
      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="w-full h-full bg-[url('/stars.svg')] animate-pulse opacity-40 bg-cover bg-center"></div>
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-6">
        <div className="flex items-center space-x-2 text-xl font-bold">
          <img src="/globe.svg" alt="Logo" className="w-6 h-6" />
          <span>Nebulae</span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#" className="text-purple-400">Blogs</a></li>
          <li><a href="#">Careers</a></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-white rounded-md text-sm font-semibold shadow-md hover:scale-105 transition">
            Let's Talk ↗
          </button>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 text-sm font-medium">
          <a href="#" className="block">Services</a>
          <a href="#" className="block">About Us</a>
          <a href="#" className="block">Courses</a>
          <a href="#" className="block text-purple-400">Blogs</a>
          <a href="#" className="block">Careers</a>
          <button className="w-full mt-2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-md text-white font-semibold shadow-md">
            Let's Talk ↗
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="text-center mt-20 px-6">
        <p className="text-sm tracking-widest text-gray-300 mb-4">WE'RE THE EXPERTS</p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
          We Develope{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 animate-glow">
            Amazing
          </span><br />
          Website For Your <span className="text-white">Bussines</span>
        </h1>
        <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-md text-white font-semibold shadow-md hover:scale-105 transition">
            View Work ↗
          </button>
          <button className="border border-white/20 px-6 py-2 rounded-md text-white font-semibold hover:bg-white/10 transition">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
