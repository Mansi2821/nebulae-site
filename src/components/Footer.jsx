// "use client";
// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-gradient-to-br from-[#0f0f1a] via-[#120e28] to-[#1a1531] text-white px-6 md:px-20 py-20 relative z-10">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
//         {/* Logo + Description */}
//         <div className="col-span-1">
//           <div className="flex items-center gap-2 mb-4">
//             <img src="/logo.png" alt="logo" className="w-6 h-6" />
//             <h2 className="text-xl font-bold">Nebulae</h2>
//           </div>
//           <p className="text-sm text-[#cbd5e1] leading-relaxed max-w-xs">
//             Welcome to our trading site! We offer the best, most affordable
//             products and services around. Shop now and start finding great deals!
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-[#cbd5e1]">
//             <li>About Us</li>
//             <li>Teams</li>
//             <li>Services</li>
//             <li>Features</li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h4 className="font-semibold mb-4">Support</h4>
//           <ul className="space-y-2 text-sm text-[#cbd5e1]">
//             <li>Terms & Conditions</li>
//             <li>Privacy Policy</li>
//             <li>FAQs</li>
//             <li>Support Center</li>
//           </ul>
//         </div>

//         {/* Company */}
//         <div>
//           <h4 className="font-semibold mb-4">Company</h4>
//           <ul className="space-y-2 text-sm text-[#cbd5e1]">
//             <li>Careers</li>
//             <li>Updates</li>
//             <li>Job</li>
//             <li>Announce</li>
//           </ul>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border-t border-[#2e2e48] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//         {/* Copyright */}
//         <p className="text-xs text-[#cbd5e1]">
//           Copyright © 2023 designed by Thetork
//         </p>

//         {/* Social Icons */}
//         <div className="flex gap-4">
//           {[
//             { icon: <FaFacebookF />, color: "bg-[#1c1b29]" },
//             { icon: <FaInstagram />, color: "bg-purple-600" },
//             { icon: <FaLinkedinIn />, color: "bg-[#1c1b29]" },
//             { icon: <FaYoutube />, color: "bg-[#1c1b29]" },
//             { icon: <FaTwitter />, color: "bg-[#1c1b29]" },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className={`w-9 h-9 flex items-center justify-center rounded-full ${item.color} text-white hover:scale-105 transition`}
//             >
//               {item.icon}
//             </div>
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#0f0f1a] via-[#120e28] to-[#1a1531] text-white px-6 md:px-20 py-20 relative z-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Logo + Description */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="logo" className="w-6 h-6" />
            <h2 className="text-xl font-bold">Nebulae</h2>
          </div>
          <p className="text-sm text-[#cbd5e1] leading-relaxed max-w-xs">
            Welcome to our trading site! We offer the best, most affordable
            products and services around. Shop now and start finding great deals!
          </p>
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
      <div className="border-t border-[#2e2e48] mt-12 pt-6 flex flex-col sm:flex-col md:flex-row justify-between items-center gap-6 sm:gap-4">
        {/* Copyright */}
        <p className="text-xs text-[#cbd5e1] text-center">
          Copyright © 2023 designed by Thetork
        </p>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            <FaFacebookF />,
            <FaInstagram />,
            <FaLinkedinIn />,
            <FaYoutube />,
            <FaTwitter />,
          ].map((icon, idx) => (
            <div
              key={idx}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1c1b29] text-white hover:bg-purple-600 transition"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
