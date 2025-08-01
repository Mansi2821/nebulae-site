"use client";
import {
  FaTrophy,
  FaMapMarkerAlt,
  FaComments,
  FaClock,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaTrophy size={28} className="text-[#a855f7]" />,
    title: "Expertise In Figma-To-Webflow",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    icon: <FaMapMarkerAlt size={28} className="text-[#a855f7]" />,
    title: "On-Page SEO Excellence",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    icon: <FaComments size={28} className="text-[#a855f7]" />,
    title: "Dedicated Project Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    icon: <FaClock size={28} className="text-[#a855f7]" />,
    title: "Timely Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    icon: <FaGlobe size={28} className="text-[#a855f7]" />,
    title: "Interactive Magic",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    icon: <FaStar size={28} className="text-[#a855f7]" />,
    title: "Comprehensive Testing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
];

const ServiceSection = () => {
  return (
    <section className="relative w-full bg-[#0f0c2f] text-white py-20 px-6 md:px-12">
      {/* Background Stars */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: i * 0.7 }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 8 + 8}px`,
            }}
          >
            ✯
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <p className="uppercase tracking-widest text-sm text-blue-400">
          What We Do
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mt-2">
          We Provide The Best Service For You
        </h2>
        <p className="text-sm md:text-base text-slate-300 mt-4 max-w-xl mx-auto">
          we helping clients to create with our talented expert.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="relative bg-[#1c173b]/50 backdrop-blur-md p-6 rounded-lg border border-white/10 shadow-md"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 rounded-md bg-[#472b8c] flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="mt-8 mb-2 text-lg font-medium">{service.title}</h3>
              <p className="text-sm text-slate-400 mb-6">{service.desc}</p>
              <a
                href="#"
                className="text-sm font-semibold text-[#a855f7] hover:underline flex items-center gap-1"
              >
                Read More <span className="text-sm">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;

