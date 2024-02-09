import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

// Fetch all tags
export const fetchTags = async () => {
  try {
    const response = await axiosInstance.get("/tags");
    return response.data;
  } catch (error) {
    console.error("Error fetching tags:", error);
    throw error;
  }
};

// Fetch all projects
export const fetchProjects = async () => {
  try {
    const response = await axiosInstance.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Create new tag
export const createTag = async (tagName) => {
  try {
    const response = await axiosInstance.post("/tags/", { name: tagName });
    return response.data;
  } catch (error) {
    console.error(`Error creating tag with name ${tagName}:`, error);
    throw error;
  }
};

// Delete a post by ID
export const deletePost = async (postId) => {
  try {
    await axiosInstance.delete(`/posts/${postId}`);
  } catch (error) {
    console.error(`Error deleting post with ID ${postId}:`, error);
    throw error;
  }
};

export const generateSlugFromTitle = async (title) => {
  try {
    const response = await axiosInstance.post("/slugify/", { title });
    return response.data.slug; // Assuming the response structure includes the slug directly
  } catch (error) {
    console.error("Error generating slug:", error);
    throw error; // Rethrow or handle as needed
  }
};

export const postBlogPost = async ({
  title,
  content,
  tags,
  project,
  status,
  slug,
}) => {
  const payload = {
    title,
    content,
    tags,
    project,
    status,
    slug,
  };

  try {
    const response = await axiosInstance.post(`/posts/`, payload);
    return response.data;
  } catch (error) {
    console.error(
      "Error posting blog post:",
      error.response ? error.response.data : error
    );
    throw error;
  }
};

export const archivePost = async (postId) => {
  // try {
  // }
};

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post("/login/", {
      username,
      password,
    });
    const token = response.data.token;
    localStorage.setItem("authToken", token);
    axiosInstance.defaults.headers.common["Authorization"] = `Token ${token}`;
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; // Re-throw the error to be handled by the calling component
  }
};

const api = {
  fetchPosts,
  fetchTags,
  fetchProjects,
  deletePost,
  generateSlugFromTitle,
  login,
  createTag,
  postBlogPost,
};

export default api;
