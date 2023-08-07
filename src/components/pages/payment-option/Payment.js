import React from "react";
import AdminLayout from "../../layout/AdminLayout";
import NewPayementType from "../../paymentType/NewPayementType";
import { PaymentTable } from "../../../components/paymentType/PaymentTable";

export const Payment = () => {
  return (
    <div>
      <AdminLayout title={Payment}>
        <NewPayementType />

        <PaymentTable />
      </AdminLayout>
    </div>
  );
};

export default Payment;
