import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <h2 className="text-lg font-semibold text-blue-600">
          ContactHub
        </h2>

        {/* Center */}
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} ContactHub. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-4 text-gray-600 text-sm">
          <span className="hover:text-blue-600 cursor-pointer transition">
            Privacy
          </span>
          <span className="hover:text-blue-600 cursor-pointer transition">
            Terms
          </span>
          <span className="hover:text-blue-600 cursor-pointer transition">
            Contact
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;