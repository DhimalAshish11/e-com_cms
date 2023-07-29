import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useHref } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postNewCatAction } from "./CategoryAction";

export const NewCatForm = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();

  const handleOnAddCat = () => {
    const { value } = nameRef.current;
    const obj = {
      title: value,
    };
    dispatch(postNewCatAction(obj));
  };

  return (
    <div className="border p-4 rounded shadow-lg">
      {" "}
      <Row>
        <Col>
          <Form.Control placeholder="FirstName" ref={nameRef} />
        </Col>
        <Col className="d-grid">
          <Button variant="dark" onClick={handleOnAddCat}>
            Add New Category
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default NewCatForm;
