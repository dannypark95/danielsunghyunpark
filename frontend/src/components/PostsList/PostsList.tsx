import React from "react";
import mockPosts from "../../data/post.json";
import mockTags from "../../data/tag.json";

interface Post {
  id: number;
  title: string;
  content: string;
  tags: number[];
}

interface Tag {
  id: number;
  name: string;
}

const PostsList: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <hr className="w-full w-[90vw] md:max-w-lg lg:max-w-xl xl:max-w-3xl my-2 border-t border-[#2D2D2D] px-4 " />
      {mockPosts.map((post: Post) => (
        <div
          key={post.id}
          className="w-full w-[90vw] md:max-w-lg lg:max-w-xl xl:max-w-3xl my-6 md:px-4"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            {post.title}
          </h2>
          <p className="mt-2">{post.content}</p>
          <ul className="flex flex-wrap mt-2">
            {post.tags.map((tagId: number) => {
              const tag = mockTags.find((t: Tag) => t.id === tagId);
              return (
                <li key={tagId} className="mr-2 text-blue-500">
                  {tag?.name}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
