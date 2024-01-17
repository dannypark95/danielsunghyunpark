import React from "react";
import profile from "../../assets/profile.jpeg";
import SocialIcon from "../Icons/SocialIcon";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Profile: React.FC = () => {
  return (
    <div className="text-center p-6">
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full relative">
        <img
          src={profile}
          alt="Daniel Park"
          className="absolute h-full w-full object-cover transform scale-150" // Zoom and scale effect applied here
        />
      </div>
      <h1 className="text-xl font-semibold mt-2 py-2">박성현 | Danny</h1>
      <p className="text-gray-400 mt-1">
        꾸준한 지식과 성장을 기록하는 공간입니다.
      </p>
      <div className="text-gray-400 flex justify-center mt-3 space-x-4">
        <SocialIcon
          Icon={FaGithub}
          url="https://github.com/dannypark95"
          ariaLabel="GitHub"
        />
        <SocialIcon
          Icon={FaLinkedin}
          url="https://www.linkedin.com/in/daniel-sh-park/"
          ariaLabel="LinkedIn"
        />
        <SocialIcon
          Icon={IoMdMail}
          url="mailto:dannypark95@gmail.com"
          ariaLabel="Email"
        />
      </div>
    </div>
  );
};

export default Profile;
