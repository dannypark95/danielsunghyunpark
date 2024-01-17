import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { FaSearch, FaTag } from "react-icons/fa";

const NavbarIcons: React.FC = () => {
  return (
    <div className="flex items-center gap-4">
      <MdDarkMode
        className="hover:text-[#7E838D] transition duration-700"
        size={24}
      />
      <MdLightMode
        className="hover:text-[#7E838D] transition duration-700"
        size={24}
      />
      <FaSearch
        className="hover:text-[#7E838D] transition duration-700"
        size={20}
      />
      <FaTag
        className="hover:text-[#7E838D] transition duration-700"
        size={20}
      />
    </div>
  );
};

export default NavbarIcons;
