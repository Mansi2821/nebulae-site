"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Lorenz Ynez",
    title: "Project Manager",
    feedback:
      "The service I received exceeded my expectations in every way. The level of customer care throughout the process was exceptional.",
  },
  {
    name: "Ryan Gigs",
    title: "Founder Lenola Studio",
    feedback:
      "The service I received exceeded my expectations in every way. The level of customer care throughout the process was exceptional.",
  },
  {
    name: "Ava Smith",
    title: "Marketing Director",
    feedback:
      "Absolutely wonderful! The attention to detail and support we received was top-notch.",
  },
  {
    name: "James Carter",
    title: "CEO of NovaTech",
    feedback:
      "They truly understood our goals and delivered a solution that went beyond expectations.",
  },
  {
    name: "Lena Park",
    title: "UX Designer",
    feedback:
      "It was an amazing experience working with them. Smooth process and a stunning result!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonialPair = () => {
    const first = testimonials[current];
    const second = testimonials[(current + 1) % testimonials.length];
    return [first, second];
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0f0f1a] via-[#120e28] to-[#1a1531] text-white py-24 px-4 md:px-20 relative overflow-hidden">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h4 className="text-purple-300 tracking-[0.2em] mb-2 text-sm uppercase">
          Testimonial
        </h4>
        <h2 className="text-4xl font-bold mb-4">This Is What Others Have To Say</h2>
        <p className="text-[#cbd5e1] max-w-xl mx-auto text-sm">
          Discover what our clients are saying about their experiences.
        </p>
      </motion.div>

      <div className="relative">
        {/* Desktop View */}
        <div className="hidden md:flex justify-center items-center gap-8 mb-10">
          <motion.button
            onClick={handlePrev}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-purple-500 hover:bg-purple-700 transition"
          >
            <ChevronLeft className="text-purple-400" />
          </motion.button>

          {/* Testimonial Cards with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="flex gap-8"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            >
              {getTestimonialPair().map((t, index) => (
                <motion.div
                  key={`${current}-${index}`}
                  className="bg-[#181326] rounded-xl shadow-lg p-6 max-w-md min-h-[250px] flex flex-col justify-between hover:scale-105 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex gap-1 text-purple-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-[#e2e8f0] text-sm leading-relaxed mb-6">
                    “ {t.feedback} ”
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                    <span className="text-white font-semibold text-sm">
                      {t.name}{" "}
                      <span className="text-[#cbd5e1] font-normal">– {t.title}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={handleNext}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full border border-purple-500 hover:bg-purple-700 transition"
          >
            <ChevronRight className="text-purple-400" />
          </motion.button>
        </div>

        {/* Mobile View */}
        <motion.div
          className="md:hidden flex overflow-x-auto gap-4 px-2 snap-x snap-mandatory scroll-px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#181326] rounded-xl shadow-lg p-6 min-w-[90%] max-w-[90%] flex-shrink-0 snap-start hover:scale-[1.02] transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex gap-1 text-purple-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-[#e2e8f0] text-sm leading-relaxed mb-6">
                “ {t.feedback} ”
              </p>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-white"></div>
                <span className="text-white font-semibold text-sm">
                  {t.name}{" "}
                  <span className="text-[#cbd5e1] font-normal">– {t.title}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;







