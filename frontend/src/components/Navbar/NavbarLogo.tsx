import React from "react";
import { Link } from "react-router-dom";

const NavbarLogo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center hover:text-[#7E838D] homeFont transition duration-500 text-sm md:text-base"
    >
      daniel
      <div className="half-space" />
      sunghyun
      <div className="half-space" />
      park.com
    </Link>
  );
};

export default NavbarLogo;
