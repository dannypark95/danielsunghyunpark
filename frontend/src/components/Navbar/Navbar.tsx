import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSearch, FaTag } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-gray">
      <div className="container mx-auto w-full lg:px-16 p-4 flex justify-between items-center">
        <div className="flex gap-4">
          <Link
            to="/"
            className="flex items-center hover:text-gray-300 homeFont"
          >
            daniel
            <div className="half-space" />
            sunghyun
            <div className="half-space" />
            park.com
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <MdDarkMode className="hover:text-gray-300" size={24} />
          <MdLightMode className="hover:text-gray-300" size={24} />
          <FaSearch className="hover:text-gray-300" size={20} />
          <FaTag className="hover:text-gray-300" size={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
