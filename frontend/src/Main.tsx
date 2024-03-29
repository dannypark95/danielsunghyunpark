import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import About from "./views/About";
import PostPage from "./views/PostPage";
import AdminLogin from "./components/Admin/Login/AdminLogin";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import AdminPost from "./components/Admin/Post/AdminPost";
import NotFound from "./views/NotFound";
import ProtectedRoute from "./routes/ProtectedRoute";

const Main: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/post"
          element={
            <ProtectedRoute>
              <AdminPost />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Main;
