import React from "react";
import mockTags from "../../data/tag.json";

interface Tag {
  id: number;
  name: string;
}

const TagList: React.FC = () => {
  return (
    <div className="tag-list">
      <h3 className="text-xl font-bold">Tags</h3>
      <ul>
        {mockTags.map((tag: Tag) => (
          <li key={tag.id} className="my-1 text-gray-400">
            {tag.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TagList;
