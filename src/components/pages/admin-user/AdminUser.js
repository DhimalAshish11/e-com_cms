import React, { useEffect } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAdminTable } from "../adminAction";

export const AdminUser = () => {
  const dispatch = useDispatch();
  const { adminDisplay } = useSelector((state) => state.AdminDisplayInfo);

  useEffect(() => {
    dispatch(getAdminTable());
  }, [dispatch]);

  return (
    <AdminLayout title="Admin user">
      <div className="text-end">
        <Link to="/new-admin" className="nav-link">
          <Button variant="warning">Add New Admin</Button>
        </Link>
      </div>
      <div className="admin-table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>

              <th>status</th>
              <th>fName</th>
              <th>lName</th>
              <th>Address</th>
              <th>Email</th>
              <th>Created DATE</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {adminDisplay.map(
              ({ _id, status, fName, lName, email, address, createdAt }, i) => (
                <tr key={_id}>
                  <td>{i + 1}</td>

                  <td>{status}</td>
                  <td>
                    {" "}
                    <h3> {fName}</h3>
                  </td>
                  <td>{lName}</td>
                  <td>{address}</td>
                  <td>{email}</td>
                  <td>{createdAt}</td>
                  <td>
                    <Button variant="warning">Edit</Button>

                    <Button
                      variant="danger"
                      /*  onClick={() => dispatch(deleteProductAction(item._id))} */
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </AdminLayout>
  );
};

export default AdminUser;
