import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignInAdminAction, autoLogin } from "../adminAction";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  const { admin } = useSelector((state) => state.adminInfo);

  const pathTo = location.state?.from?.location?.pathname || "/dashboard";

  useEffect(() => {
    admin?._id && navigate(pathTo);
    dispatch(autoLogin());
  }, [admin, navigate, dispatch, pathTo]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(SignInAdminAction(form));
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
