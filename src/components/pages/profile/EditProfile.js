import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { toast } from "react-toastify";

import CustomInput from "../../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { updateAdminAction } from "../adminAction";
import PasswordChange from "./PasswordChange";

const EditProfile = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const dispatch = useDispatch();

  const [form, setForm] = useState({});

  useEffect(() => {
    setForm(admin);
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const { _id, ...rest } = form;
    console.log(form);

    dispatch(updateAdminAction(form));
  };

  const inputs = [
    {
      label: "First Name",
      name: "fName",
      required: true,
      placeholder: "Ben",
      type: "text",
      value: form.fName,
    },
    {
      label: "Last Name",
      name: "lName",
      required: true,
      placeholder: "smith",
      type: "text",
      value: form.lName,
    },
    {
      label: "Phone ",
      name: "phone",
      required: true,

      type: "number",
      value: form.phone,
    },
    {
      label: "Address",
      name: "address",

      placeholder: "9 Marion Street",
      type: "text",
      value: form.address,
    },
    {
      label: "Email",
      name: "email",
      required: true,
      placeholder: "Ben@smit.com",
      type: "email",
      value: form.email,
    },

    {
      label: "Password",
      name: "password",
      required: true,
      placeholder: "Please enter your password",
      type: "password",
    },
  ];
  return (
    <div>
      {" "}
      <Form onSubmit={handleOnSubmit} className="m-2 p-3 border shadow-lg">
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <Button variant="dark" type="submit">
          Update Profile
        </Button>
      </Form>
      <PasswordChange />
    </div>
  );
};

export default EditProfile;
