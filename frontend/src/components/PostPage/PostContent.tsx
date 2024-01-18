import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface PostContentProps {
  content: string;
}

const PostContent: React.FC<PostContentProps> = ({ content }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} className="mt-6 my-12">
    {content}
  </ReactMarkdown>
);

export default PostContent;
