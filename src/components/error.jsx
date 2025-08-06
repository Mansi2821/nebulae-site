'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Error = () => {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-blue-900 opacity-80" /> */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#302b63,_#0f0c29,_#000000)]" />
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-[130px] md:text-[140px] font-extrabold tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          404
        </h1>
        <p className="text-3xl md:text-3xl mt-2 font-semibold">Page not Found</p>
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-md">
          Oops! The page you're looking for doesn't<br/>
           exist. Let's get you back on track!
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
