import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import CustomInput from "../custom-input/CustomInput";
import { toast } from "react-toastify";
import { createNewAdminAction } from "../pages/adminAction";

const AdminSignup = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { confirmPassword, ...rest } = form;

    console.log(form);
    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match");
    }
    console.log(form);
    createNewAdminAction(rest);
  };
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Ben",
      type: "text",
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "smith",
      type: "text",
    },
    {
      label: "Phone ",
      name: "phone",
      required: true,

      type: "number",
    },
    {
      label: "Address",
      name: "address",

      placeholder: "9 Marion Street",
      type: "text",
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Ben@smit.com",
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
    {
      label: "Confirm Password",
      name: "confirmPassword",
      required: true,
      placeholder: "******",
      type: "password",
      minLength: "6",
    },
  ];
  return (
    <section className="main">
      <Form onSubmit={handleOnSubmit} className="m-5 p-5 border shadow-lg">
        <h1 className="text-center pb-3">Add New Admin</h1>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <Button variant="dark" type="submit">
            Create New Account
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default AdminSignup;
