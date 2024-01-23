import React from "react";
import { useAuthProtected } from "../../contexts/useAuthProtected";

const AdminDashboard: React.FC = () => {
  useAuthProtected(); // Protect this component

  return <div>This is AdminDashboard page. Admin only!</div>;
};

export default AdminDashboard;
