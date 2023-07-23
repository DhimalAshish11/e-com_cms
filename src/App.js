import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/pages/signin-signup/SignIn";
import SignUp from "./components/pages/signin-signup/SignUp";
import { ToastContainer } from "react-toastify";
import AdminVerification from "./components/pages/signin-signup/AdminVerification";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Category from "./components/pages/category/Category";
import Product from "./components/pages/product/Product";
import Payment from "./components/pages/payment-option/Payment";
import Order from "./components/pages/order/Order";
import Customer from "./components/pages/customer/Customer";
import AdminUser from "./components/pages/admin-user/AdminUser";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/new-admin" element={<SignUp />} />
        <Route path="admin-verification" element={<AdminVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/*Privaate Route*/}
        <Route path="new-admin" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="product" element={<Product />} />
        <Route path="payment-option" element={<Payment />} />
        <Route path="order" element={<Order />} />
        <Route path="customer" element={<Customer />} />
        <Route path="admin-user" element={<AdminUser />} />
        <Route path="profile" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
