import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { toast } from "react-toastify";

import CustomInput from "../../custom-input/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CustomModal } from "../../customModal/CustomModal";
import { setModelShow } from "../../../system/systemSlice";

const EditProfile = () => {
  const { admin } = useSelector((state) => state.adminInfo);
  const dispatch = useDispatch();

  const [form, setForm] = useState({});
  const [modal, setModal] = useState();

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
    const { confirmPassword, ...rest } = form;

    if (confirmPassword !== rest.password) {
      return toast.error("Password do not match");
    }

    /* reateNewAdminAction(rest); */
  };

  const handleOnEdit = () => {
    setModal();
    dispatch(setModelShow(true));
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
  ];
  return (
    <div>
      {" "}
      <Form onSubmit={handleOnSubmit} className="m-2 p-3 border shadow-lg">
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          <CustomModal title="Enter your password to update details">
            <form onSubmit={handleOnSubmit}>
              <label for="password">Enter Password</label>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleOnChange}
              />
              <br />

              <Button className="m-2" variant="dark" type="submit">
                Submit
              </Button>
            </form>
          </CustomModal>

          <Button variant="dark" type="submit" onClick={handleOnEdit}>
            Update Profile
          </Button>
        </div>
      </Form>
      <div>
        <Link to={"/password-reset"}>
          {" "}
          <Button variant="dark" type="submit" onClick={handleOnEdit}>
            Update Password
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EditProfile;
