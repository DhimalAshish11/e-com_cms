import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./components/pages/category/categorySlice";

export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
  },
});
