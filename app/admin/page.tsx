import AdminDashboard from "@/components/AdminDashboard";
import AuthProvider from "@/context/AuthProvider";
import React from "react";

const page = () => {
  const handleEdit = (id: string) => {};
  return (
    <AuthProvider>
      <AdminDashboard />
    </AuthProvider>
  );
};

export default page;
