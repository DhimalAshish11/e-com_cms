import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";

import { CustomModal } from "../customModal/CustomModal";
import { setModelShow } from "../../system/systemSlice";

import { getPaymentAction } from "./PaymentAction";
import { EditPaymentForm } from "./EditPaymentForm";

export const PaymentTable = () => {
  const dispatch = useDispatch();

  const [selectedPO, setSelectedPO] = useState({});

  const { payments } = useSelector((state) => state.payInfo);

  useEffect(() => {
    dispatch(getPaymentAction());
  }, [dispatch]);

  const handleOnEdit = (obj) => {
    setSelectedPO(obj);
    dispatch(setModelShow(true));
  };
  return (
    <>
      <CustomModal title="Edit Payment Option">
        <EditPaymentForm po={selectedPO} />
      </CustomModal>
      <div className="d-flex justify-content-between mt-5">
        <div>{payments?.length} Payment options Found</div>
        <div>
          <Form.Control placeholder="Serach by name ..." />
        </div>
      </div>
      <Table striped bordered hover className="mt-2 ">
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Title</th>
            <th>Descripton</th>
            <th>Added At</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {payments?.map(
            ({ _id, status, title, description, createdAt }, i) => (
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
                <td>{description}</td>
                <td>{createdAt.slice(0, 10)}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() =>
                      handleOnEdit({ _id, status, title, description })
                    }
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </>
  );
};
