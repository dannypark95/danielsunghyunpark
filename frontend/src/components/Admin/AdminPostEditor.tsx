import React from "react";
import { useAuthProtected } from "../../contexts/useAuthProtected";

const AdminPostEditor: React.FC = () => {
  useAuthProtected();
  return <div>This is AdminPostEditor page. Admin only!</div>;
};

export default AdminPostEditor;
