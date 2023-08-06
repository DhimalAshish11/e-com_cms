import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./components/pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
import adminReducer from "./components/pages/signin-signup/adminSlice";
import paymentReducer from "./components/pages/payment-option/PaymentSlice";
export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    system: systemReducer,
    adminInfo: adminReducer,
    payInfo: paymentReducer,
  },
});
