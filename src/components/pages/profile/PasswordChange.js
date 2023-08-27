import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomModal } from "../../customModal/CustomModal";

import { Button, Form } from "react-bootstrap";
import { setModelShow } from "../../../system/systemSlice";
import { updatePasswordAction } from "../adminAction";
export const PasswordChange = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [modal, setModal] = useState();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const { confirmpassword, ...rest } = form;

    dispatch(updatePasswordAction(rest));
  };

  const handleOnEdit = () => {
    setModal("change");
    dispatch(setModelShow(true));
  };

  return (
    <div>
      <Button variant="dark" type="submit" onClick={handleOnEdit}>
        Update Password
      </Button>

      {modal === "change" && (
        <CustomModal title="Enter your password to update details">
          <Form onSubmit={handleOnSubmit}>
            <label for="password">Enter your current password</label>
            <br />
            <input type="password" name="password" onChange={handleOnChange} />
            <br />

            <label for="newPasssword">Enter your new password</label>
            <br />
            <input
              type="password"
              name="newPassword"
              onChange={handleOnChange}
            />
            <br />

            <label for="confirmPassword">Confirm new password</label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              onChange={handleOnChange}
            />
            <br />

            <Button className="m-2" variant="dark" type="submit">
              Submit
            </Button>
          </Form>
        </CustomModal>
      )}
    </div>
  );
};

export default PasswordChange;
