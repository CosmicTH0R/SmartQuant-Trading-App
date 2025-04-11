// import React from 'react'

// const HomeMainSection = () => {
//   return (
//     <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-200 px-4 text-center">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
//           Welcome to SmartQuant
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 max-w-xl">
//           Your AI-powered stock prediction platform.
//         </p>
//         <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
//           Get Started
//         </button>
//       </div>
//   )
// }

// export default HomeMainSection





import React from 'react';

const HomeMainSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 px-4 text-center transition-colors duration-300">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to SmartQuant
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
        Your AI-powered stock prediction platform.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 text-sm sm:text-base">
        Get Started
      </button>
    </div>
  );
};

export default HomeMainSection;
