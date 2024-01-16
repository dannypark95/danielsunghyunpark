import React from "react";
import { IconType } from "react-icons";

type SocialIconProps = {
  Icon: IconType;
  url: string;
  ariaLabel: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, url, ariaLabel }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-white transition duration-700"
      aria-label={ariaLabel}
    >
      <Icon size={30} />
    </a>
  );
};

export default SocialIcon;
