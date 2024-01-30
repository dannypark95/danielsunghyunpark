import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../utils/api";

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  project_id: string;
  slug: string;
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await api.get("/posts");
      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId: string) => {
    try {
      await api.delete(`/posts/${postId}`);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post", error);
      // Handle error appropriately
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-4">
        Admin Dashboard
      </h1>
      <div className="flex justify-center mb-4">
        <Link
          to="/admin/post"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create New Post
        </Link>
      </div>
      <ul className="list-disc list-inside">
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <span className="font-bold">{post.title}</span>
            <div className="flex space-x-2 mt-1">
              <Link
                to={`/admin/post/${post.slug}`}
                className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
              >
                Edit
              </Link>
              {/* TODO:
                - 'Archive' will archive production post */}
              <button
                onClick={() => handleDelete(post.id)}
                className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
              >
                Archive
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
