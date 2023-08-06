import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentAction } from "./PaymentAction";

export const PaymentTable = () => {
  const dispatch = useDispatch();
  const { payment } = useSelector((state) => state.payInfo);

  useEffect(() => {
    dispatch(getPaymentAction());
  }, [dispatch]);

  return (
    <Table striped bordered hover className="mt-2 ">
      <thead>
        <tr>
          <th>#</th>
          <th>Status</th>
          <th>Title</th>
          <th>Slug</th>
          <th>Added At</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {payment?.map(({ _id, status, title, slug, createdAt }, i) => (
          <tr key={_id}>
            <td>{i + 1}</td>
            <td>
              <span
                className={
                  status === "active"
                    ? "bg-success p-2 rounded"
                    : "bg-danger p-2 rounded"
                }
              >
                {status}
              </span>
            </td>
            <td> {title}</td>
            <td>{slug}</td>
            <td>{createdAt.slice(0, 10)}</td>
            <td>
              <Button variant="danger">Edit</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PaymentTable;
