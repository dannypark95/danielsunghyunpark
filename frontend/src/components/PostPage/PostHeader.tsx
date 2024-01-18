import React from "react";

interface PostHeaderProps {
  title: string;
  date: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, date }) => (
  <div>
    <h1 className="text-4xl lg:text-5xl font-bold my-4 text-left">{title}</h1>
    <p className="text-gray-600 text-left">Published on {date}</p>
  </div>
);

export default PostHeader;
