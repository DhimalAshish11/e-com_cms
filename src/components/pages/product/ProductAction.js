import { toast } from "react-toastify";
import {
  deleteProduct,
  getNewProduct,
  postNewProduct,
} from "../../../helper/axios.js";
import { setproducts } from "./ProductSlice.js";

export const postNewProductAction = (data) => async (dispatch) => {
  const pending = postNewProduct(data);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  status === "success" && dispatch(getNewProductAction());
};

export const getNewProductAction = (data) => async (dispatch) => {
  const { status, products } = await getNewProduct();

  status === "success" && dispatch(setproducts(products));
};

export const deleteProductAction = (_id) => async (dispatch) => {
  const pending = deleteProduct(_id);

  toast.promise(pending, {
    pending: "please wait ....",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    dispatch(getNewProductAction());
  }
};
