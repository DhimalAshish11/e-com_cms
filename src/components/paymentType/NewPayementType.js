import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const NewPayementType = () => {
  return (
    <div className="border p-4 rounded shadow-lg">
      {" "}
      <Row>
        <Col>
          <Form.Control placeholder="Type of payment" />
        </Col>
        <Col className="d-grid">
          <Button variant="dark">Add Payment Method</Button>
        </Col>
      </Row>
    </div>
  );
};

export default NewPayementType;
