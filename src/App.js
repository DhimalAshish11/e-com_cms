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
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategoryAction } from "./components/categories/CategoryAction";
import PrivateRoute from "./components/private/PrivateRoute";
import NewProduct from "./components/pages/product/NewProduct";
import EditProduct from "./components/pages/product/EditProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryAction());
  }, [dispatch]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<SignIn />} />

        <Route path="admin-verification" element={<AdminVerification />} />

        {/*Privaate Route*/}

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />

        <Route
          path="new-product"
          element={
            <PrivateRoute>
              <NewProduct />
            </PrivateRoute>
          }
        />

        <Route
          path="product/edit/:_id"
          element={
            <PrivateRoute>
              <EditProduct />
            </PrivateRoute>
          }
        />

        <Route
          path="payment-option"
          element={
            <PrivateRoute>
              <Payment />
            </PrivateRoute>
          }
        />
        <Route
          path="order"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route
          path="admin-user"
          element={
            <PrivateRoute>
              <AdminUser />
            </PrivateRoute>
          }
        />
        <Route
          path="new-admin"
          element={
            <PrivateRoute>
              <SignUp />
            </PrivateRoute>
          }
        />
        <Route
          path="customer"
          element={
            <PrivateRoute>
              <Customer />
            </PrivateRoute>
          }
        />

        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
