// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-900 text-white px-6 py-3 flex items-center justify-between">
//       {/* Logo */}
//       <div className="flex items-center space-x-2">
//         <span className="font-bold text-lg">SmartQuant</span>
//       </div>

//       {/* Navigation Links */}
//       <div className="hidden md:flex space-x-6">
//         <a href="#" className="hover:text-gray-300">
//           Home
//         </a>
//         <a href="#" className="hover:text-gray-300">
//           Features
//         </a>
//         <a href="#" className="hover:text-gray-300">
//           Pricing
//         </a>
//         <a href="#" className="hover:text-gray-300">
//           Testimonials
//         </a>
//         <a href="#" className="hover:text-gray-300">
//           Blog
//         </a>
//       </div>

//       {/* Buttons */}
//       <div className="flex items-center space-x-3">
//         <Link to="/signin">
//           <button className="border border-white text-white text-sm sm:text-base rounded-full px-5 py-2 hover:bg-white hover:text-blue-900 transition duration-300">
//             Sign In
//           </button>
//         </Link>

//         <Link to="/signup">
//           <button className="bg-white text-blue-900 text-sm sm:text-base rounded-full px-5 py-2 font-semibold hover:bg-gray-100 transition duration-300">
//             Get Started
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/ThemeSlice";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <nav className="bg-blue-900 dark:bg-gray-900 text-white px-6 py-3 flex items-center justify-between transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="font-bold text-lg">SmartQuant</span>
      </div>

      {/* Search (visible on md and up) */}
      <div className="hidden md:flex flex-1 justify-center px-6">
        <input
          type="text"
          placeholder="Search stocks, ETFs..."
          className="w-full max-w-md px-4 py-2 rounded-full text-black dark:text-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="text-white dark:text-white px-3 py-2 rounded hover:bg-white hover:text-blue-900 dark:hover:bg-gray-700 dark:hover:text-white transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link to="/signin">
          <button className="border border-white text-white text-sm sm:text-base rounded-full px-5 py-2 hover:bg-white hover:text-blue-900 dark:hover:bg-gray-700 transition">
            Sign In
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-white dark:bg-blue-600 text-blue-900 dark:text-white text-sm sm:text-base rounded-full px-5 py-2 font-semibold hover:bg-gray-100 dark:hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
