import React from "react";
import Header from "../../layout/Header";
import AdminSignup from "../../admin-signup/AdminSignup";

const SignUp = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <AdminSignup />
      </main>
    </div>
  );
};

export default SignUp;
