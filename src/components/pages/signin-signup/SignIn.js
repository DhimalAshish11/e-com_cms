import React, { useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";

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
    console.log(form);
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
      minLength: "6",
    },
  ];

  return (
    <div>
      <Header />
      <section className="main">
        <Form onSubmit={handleOnSubmit} className="m-5 p-5 border shadow-lg">
          <h1>Welcome Admins Login Now</h1>
          <hr />

          {inputs.map((item, i) => (
            <CustomInput key={i} {...item} onChange={handleOnChange} />
          ))}

          <div className="d-grid">
            <Button variant="dark" type="submit">
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
