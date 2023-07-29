import React, { useRef } from "react";
import AdminLayout from "../../layout/AdminLayout";
import NewCatForm from "../../categories/NewCatForm";
import CatTable from "../../categories/CatTable";

export const Category = () => {
  return (
    <div>
      <AdminLayout title="Category">
        <NewCatForm />
        <CatTable />
      </AdminLayout>
    </div>
  );
};

export default Category;
