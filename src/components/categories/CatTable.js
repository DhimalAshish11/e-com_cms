import React, { useEffect, useState } from "react";
import { EditCatForm } from "./EditCatForm";
import { Button, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CustomModal } from "../customModal/CustomModal";
import { setModelShow } from "../../system/systemSlice";
import { getCategoryAction } from "./CategoryAction";

const CatTable = () => {
  const dispatch = useDispatch();
  const [selectedCat, setSelectedCat] = useState({});
  const { cats } = useSelector((state) => state.categoryInfo);
  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);

  const handleOnEdit = (obj) => {
    setSelectedCat(obj);
    dispatch(setModelShow(true));
  };

  return (
    <>
      <CustomModal title="Edit Category">
        {" "}
        <EditCatForm cat={selectedCat} />
      </CustomModal>

      <div className="d-flex justify-content-between mt-5">
        <div>10 Categories Found</div>
        <div>
          <Form.Control placeholder="Search by name ..." />
        </div>
      </div>
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
          {cats.map(({ _id, status, title, slug, createdAt }, i) => (
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
                <Button
                  variant="danger"
                  onClick={() =>
                    handleOnEdit({ _id, status, title, slug, createdAt })
                  }
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default CatTable;
