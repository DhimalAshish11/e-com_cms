import React, { useEffect, useState } from "react";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CustomInput from "../../custom-input/CustomInput";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SignInAdminAction, autoLogin } from "../adminAction";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
  email: "",
  password: "",
};
const SignIn = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
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

  return (
    <div>
      <Header />
      <main className="main pt-5">
        <Form
          onSubmit={handleOnSubmit}
          className="border p-3 shadow-lg"
          style={{ width: "450px", margin: "auto" }}
        >
          <h1 className="mb-5">
            Welcome Back
            <hr />
          </h1>

          <CustomInput
            label="Email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleOnChange}
          />
          <CustomInput
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleOnChange}
            required
          />

          <div className="d-grid mt-3">
            <Button variant="dark" type="submit">
              Sign In
            </Button>
          </div>
          <p className="mt-2 text-end">
            Forget password? <Link to="password-reset">reset </Link> now.
          </p>
        </Form>
      </main>
      <Footer />
    </div>
  );
};

export default SignIn;
