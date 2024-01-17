import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarIcons from "./NavbarIcons";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-custom-gray">
      <div className="container mx-auto w-full lg:px-16 p-4 flex justify-between items-center">
        <NavbarLogo />
        <NavbarIcons />
      </div>
    </nav>
  );
};

export default Navbar;
