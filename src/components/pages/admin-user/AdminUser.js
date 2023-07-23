import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const AdminUser = () => {
  return (
    <div>
      <AdminLayout title="AdminUser">
        <div className="text-end">
          <Link to="/new-admin">
            <Button variant="warning">Add New Admin</Button>
          </Link>
        </div>
      </AdminLayout>
    </div>
  );
};

export default AdminUser;
