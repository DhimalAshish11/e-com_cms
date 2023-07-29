import React, { useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";
import { Link } from "react-router-dom";
import { SignInAdminAction } from "../adminAction";

const SignIn = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    SignInAdminAction(form);
  };

  const inputs = [
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Sam@smit.com",
      type: "email",
    },
    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "******",
      type: "password",
    },
  ];

  return (
    <div>
      <Header />
      <section className="main">
        <Form onSubmit={handleOnSubmit} className="m-5 p-5 border shadow-lg">
          <h1>Welcome Back</h1>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="dark" type="submit">
              Sign In
            </Button>
          </div>
          <p className="mt-2 text-end">
            Forgot Password? <Link to="ottp">Reset</Link> now
          </p>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
