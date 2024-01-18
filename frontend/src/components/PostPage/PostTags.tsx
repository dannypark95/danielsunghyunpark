import React from "react";

interface PostTagsProps {
  tagNames: string[];
}

const PostTags: React.FC<PostTagsProps> = ({ tagNames }) => (
  <div className="flex justify-left flex-wrap gap-2 my-2 py-4">
    {tagNames.map((name, index) => (
      <span key={index} className="bg-[#2D2D2D] rounded-2xl px-3 py-1 text-sm">
        {name}
      </span>
    ))}
  </div>
);

export default PostTags;
