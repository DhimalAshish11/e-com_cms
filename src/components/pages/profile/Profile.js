import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import EditProfile from "./EditProfile";

const Profile = () => {
  return (
    <AdminLayout title="Profile">
      <EditProfile />
    </AdminLayout>
  );
};

export default Profile;
