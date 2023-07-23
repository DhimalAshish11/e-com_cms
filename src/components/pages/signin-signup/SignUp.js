import React from "react";
import Header from "../../layout/Header";
import AdminSignup from "../../admin-signup/AdminSignup";
import AdminLayout from "../../layout/AdminLayout";

const SignUp = () => {
  return (
    <AdminLayout>
      <AdminSignup />
    </AdminLayout>
  );
};

export default SignUp;
