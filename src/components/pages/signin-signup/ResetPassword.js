import React, { useState } from "react";

import { toast } from "react-toastify";
import { Alert, Container } from "react-bootstrap";
import PasswordOTP from "../../admin-signup/PasswordOTP";
import PasswordReset from "../../admin-signup/PasswordReset";
import { requestPassOTP } from "../../../helper/axios";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";

const ResetPassword = () => {
  const [form, setForm] = useState("otp");

  const [resp, setResp] = useState({});

  const handleOnOtpRequest = async (email) => {
    if (!email.includes("@") && !email.includes(".")) {
      return toast.error("Invalid email");
    }
    const pending = requestPassOTP(email);
    toast.promise(pending, {
      pending: "please wait....",
    });

    const result = await pending;
    setResp(result);
    setForm("reset");
  };

  const forms = {
    otp: <PasswordOTP handleOnOtpRequest={handleOnOtpRequest} />,
    reset: <PasswordReset setForm={setForm} />,
  };

  return (
    <>
      <Header />
      <main className="main pt-5">
        {resp.message && (
          <Container>
            <Alert variant={resp.status === "success" ? "success" : "danger"}>
              {resp.message}
            </Alert>
          </Container>
        )}
        <div className="d-flex reset-pass">
          {/* requeset opt form */}
          {forms[form]}

          {/* rest password form  */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ResetPassword;
