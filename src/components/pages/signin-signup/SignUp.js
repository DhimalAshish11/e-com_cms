import React from "react";
import AdminSignup from "../../admin-signup/AdminSignup";
import AdminLayout from "../../layout/AdminLayout";

const SignUp = () => {
  return (
    <AdminLayout title="Add New Admin">
      <AdminSignup />
    </AdminLayout>
  );
};

export default SignUp;
