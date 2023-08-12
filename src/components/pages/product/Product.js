import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import ProductTable from "../../product/ProductTable";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div>
      <AdminLayout title={Product}>
        <div className="text-end">
          <Link to="/new-product">
            <Button variant="primary">+ Add New Product</Button>
          </Link>
          <ProductTable />
        </div>
      </AdminLayout>
    </div>
  );
};

export default Product;
