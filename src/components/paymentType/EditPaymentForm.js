import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { CustomInput } from "../custom-input/CustomInput";

import { deletePaymentAction, updatePaymentAction } from "./PaymentAction";

const initalState = {
  status: "",
  title: "",
  description: "",
};

export const EditPaymentForm = ({ po }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initalState);

  useEffect(() => {
    setForm(po);
  }, [po]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmmit = (e) => {
    e.preventDefault();
    dispatch(updatePaymentAction(form));
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you want to delte this payment option?")) {
      dispatch(deletePaymentAction(form._id));
    }
  };

  return (
    <div className="border p-4 rounded shadow-lg">
      <Row>
        <Col>
          <Form onSubmit={handleOnSubmmit}>
            <label htmlFor="">Status</label>
            <Form.Select name="status" onChange={handleOnChange} required>
              <option value="">--Select One --</option>
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
              placeholder="Pay By Credit Care"
              required
              onChange={handleOnChange}
              value={form.title}
            />
            <CustomInput
              as="textarea"
              rows={5}
              label="Description"
              name="description"
              placeholder="say how to make payment..."
              required
              onChange={handleOnChange}
              value={form.description}
            />

            <div className="d-grid mt-3">
              <Button variant="dark" type="submit">
                Update Payment Option
              </Button>
            </div>
          </Form>
          <div className="d-grid mt-3">
            <Button variant="danger" type="submit" onClick={handleOnDelete}>
              Delete Payment Option
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
