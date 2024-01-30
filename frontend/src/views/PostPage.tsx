import React from "react";
import { useParams } from "react-router-dom";
import mockPosts from "../data/post.json";
import mockTags from "../data/tag.json";
import Profile from "../components/Profile/Profile";
import PostHeader from "../components/PostPage/PostHeader";
import PostTags from "../components/PostPage/PostTags";
import PostContent from "../components/PostPage/PostContent";
import CommentsSection from "../components/PostPage/CommentsSection";

const PostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = mockPosts.find((p) => p.slug.toString() === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  const tagNames = post.tags.map(
    (id) => mockTags.find((tag) => tag.id === id)?.name || ""
  );

  return (
    <div className="flex justify-center min-h-screen pt-10">
      <div className="flex flex-col items-center lg:flex-grow max-w-7xl mx-auto">
        <article className="prose lg:prose-xl mx-auto max-w-lg md:max-w-3xl">
          <PostHeader title={post.title} date={post.created_at} />
          <PostTags tagNames={tagNames} />
          <hr className="py-3 border-t border-[#2D2D2D]" />
          <PostContent content={post.content} />
          <Profile />
          <hr className="my-2 border-t border-[#2D2D2D]" />
          <CommentsSection />
        </article>
      </div>
    </div>
  );
};

export default PostPage;
