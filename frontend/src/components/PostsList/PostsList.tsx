import React from "react";
import { Link } from "react-router-dom";
import mockPosts from "../../data/post.json";
import mockTags from "../../data/tag.json";

// Added Tag interface for proper typing
interface Tag {
  id: number;
  name: string;
}

const PostsList: React.FC = () => {
  // Function to get tag names from tag IDs
  const getTagNames = (tagIds: number[]): string[] => {
    return tagIds.map(
      (id) => mockTags.find((tag: Tag) => tag.id === id)?.name || ""
    );
  };

  return (
    <div className="flex flex-col items-center">
      <hr className="w-full w-[90vw] md:max-w-lg lg:max-w-xl xl:max-w-3xl my-2 border-t border-[#2D2D2D] px-4" />
      {mockPosts.map((post: any) => (
        <div
          key={post.slug}
          className="w-full w-[90vw] md:max-w-lg lg:max-w-xl xl:max-w-3xl my-6 md:px-4"
        >
          <Link
            to={`/post/${post.slug}`}
            className="text-lg sm:text-xl md:text-2xl font-bold"
          >
            {post.title}
          </Link>
          <p className="mt-2">{post.content}</p>
          <ul className="flex flex-wrap mt-2">
            {getTagNames(post.tags).map((name, index) => (
              <li key={index} className="mr-2 text-blue-500">
                {name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
