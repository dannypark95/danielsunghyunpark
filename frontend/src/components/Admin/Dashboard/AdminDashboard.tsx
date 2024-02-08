import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api"; // Ensure the path is correct for your setup

interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  author_id: string;
  project_id: string;
  slug: string;
  status: string; // Assuming you have a status field in your Post model
}

const AdminDashboard: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const fetchedPosts = await api.fetchPosts(); // Ensure this API call fetches the status as well
      setPosts(fetchedPosts);
    };

    loadPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const handleDelete = async (postId: string) => {
    try {
      await api.deletePost(postId); // This might actually archive the post
      // Optionally, refresh the list or remove the post from UI
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="max-w-6xl container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">
        Admin Dashboard
      </h1>
      <div className="mb-6 text-right">
        <Link
          to="/admin/post"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150"
        >
          Create New Post
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-200">
            <tr className="text-[#191919]">
              <th className="px-4 py-2 text-center">Title</th>
              <th className="px-4 py-2 text-center">Created At</th>
              <th className="px-4 py-2 text-center">Status</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {posts.map((post) => (
              <tr key={post.id} className="border-b">
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{formatDate(post.created_at)}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      post.status === "live"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex justify-center space-x-2">
                  <Link
                    to={`/admin/post/${post.slug}`}
                    className="text-sm bg-green-500 hover:bg-green-700 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                  >
                    Archive
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
