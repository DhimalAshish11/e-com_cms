import { setCats } from "../pages/category/categorySlice";
import {
  deleteCategory,
  getCategory,
  postCategory,
  updateCategory,
} from "../../helper/axios";
import { toast } from "react-toastify";

export const postNewCatAction = (obj) => async (dispatch) => {
  const { status, message } = await postCategory(obj);
  toast[status](message);

  if (status == "success") {
    dispatch(getCategoryAction());
  }
};

export const getCategoryAction = () => async (dispatch) => {
  const { status, message, result } = await getCategory();
  /*   toast[status](message); */

  if (status == "success") {
    dispatch(setCats(result));
  }
};

export const updateCatAction = (obj) => async (dispatch) => {
  const respPending = updateCategory(obj);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getCategoryAction());
  }
};
export const deleteCatAction = (_id) => async (dispatch) => {
  const respPending = deleteCategory(_id);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getCategoryAction());
  }
};
