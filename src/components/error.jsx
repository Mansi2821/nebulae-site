// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';

// const Error = () => {
//   return (
//     <div className="min-h-screen flex flex-col text-white bg-gradient-to-b from-black via-[#14142a] to-[#2b2d55]">
//       <Navbar />
//       <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
//         <h1 className="text-[120px] font-extrabold tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
//           404
//         </h1>
//         <p className="text-3xl mt-2 font-semibold">Page not Found</p>
//         <p className="mt-2 text-base text-gray-300 max-w-md">
//           Oops! The page you're looking for doesn't exist. Let's get you back on track!
//         </p>
//         <Link
//           href="/"
//           className="mt-6 inline-block px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition"
//         >
//           Back Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Error;






// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import Navbar from '@/components/Navbar';

// const Error = () => {
//   return (
//     <div
//       className="min-h-screen flex flex-col text-white"
//       style={{
//         background: 'radial-gradient(ellipse at center, #5c5c9aff 0%, #0b0b0b 100%)',
//       }}
//     >
//       <Navbar />
//       <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
//         <h1 className="text-[120px] font-extrabold tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
//           404
//         </h1>
//         <p className="text-3xl mt-2 font-semibold">Page not Found</p>
//         <p className="mt-2 text-base text-gray-300 max-w-md">
//           Oops! The page you're looking for doesn't exist. Let's get you back on track!
//         </p>
//         <Link
//           href="/"
//           className="mt-6 inline-block px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition"
//         >
//           Back Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Error;






'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const Error = () => {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, rgba(0,0,0,0.95) 60%, #000 100%)',
      }}
    >
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-6 py-12">
        <h1 className="text-[100px] md:text-[140px] font-extrabold tracking-wide text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
          404
        </h1>
        <p className="text-2xl md:text-3xl mt-2 font-semibold">Page not Found</p>
        <p className="mt-2 text-sm md:text-base text-gray-300 max-w-md">
          Oops! The page you're looking for doesn't exist. Let's get you back on track!
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
