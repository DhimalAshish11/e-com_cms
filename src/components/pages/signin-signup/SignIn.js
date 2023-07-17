import React from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";

const SignIn = () => {
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
      minLength: "6",
    },
  ];

  return (
    <div>
      <Header />
      <section className="main">
        <Form className="m-5 p-5 border shadow-lg">
          <h1>Welcome Admins Login Now</h1>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} />
          ))}

          <div className="d-grid">
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
