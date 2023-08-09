import React, { useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomInput from "../custom-input/CustomInput";
import { postNewPaymentAction } from "./PaymentAction";

const initialState = {
  status: "",
  title: "",
  description: "",
};

export const NewPaymentType = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    dispatch(postNewPaymentAction(form));
    setForm(initialState);
  };

  /* const handleOnAddCat = () => {
    const { value } = nameRef.current;
    value && dispatch(postNewCatAction({ title: value }));
  }; */

  return (
    <div className="border p-4 rounded shadow-lg">
      {" "}
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmit}>
            <label htmlFor="">Status</label>

            <Form.Select name="status" onChange={handleOnChange} required>
              <option value="">---Select One---</option>
              <option value="active" selected={form.status === "active"}>
                Active
              </option>
              <option value="inactive" selected={form.status === "inactive"}>
                Inactive
              </option>
            </Form.Select>
            <CustomInput
              label="Title"
              name="title"
              placeholder="Pay by Card"
              required
              onChange={handleOnChange}
              value={form.title}
            />

            <CustomInput
              as="textarea"
              rows={5}
              label="Description"
              name="description"
              placeholder="say how to make payment...."
              required
              onChange={handleOnChange}
              value={form.description}
            />

            <div className="d-grid mt-3">
              <Button variant="dark" type="submit">
                Add New Payment
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default NewPaymentType;
