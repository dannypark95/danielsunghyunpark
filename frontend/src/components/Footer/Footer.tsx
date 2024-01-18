import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#191919] ">
      <hr className="border-t border-[#2D2D2D]" />
      <div className="text-center py-5">
        <span className="homeFont">danielsunghyunpark.com</span> ©{" "}
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
