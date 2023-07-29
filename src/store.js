import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./components/pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
export default configureStore({
  reducer: {
    categoryInfo: categoryReducer,
    system: systemReducer,
  },
});
