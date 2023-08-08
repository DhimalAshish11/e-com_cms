import { toast } from "react-toastify";
import { getPayment, postPayment } from "../../helper/axios";
import { setPayments } from "../pages/payment-option/PaymentSlice";
import {
  deletePaymentById,
  updatePaymentById,
} from "../../../src/model/payment/PaymentModel";
import { setModelShow } from "../../system/systemSlice";

export const postNewPaymentAction = (obj) => async (dispatch) => {
  const { status, message } = await postPayment(obj);
  toast[status](message);

  if (status === "success") {
    dispatch(getPaymentAction());
  }
};

export const getPaymentAction = () => async (dispatch) => {
  const { status, result } = await getPayment();
  /*   toast[status](message); */

  if (status === "success") {
    dispatch(setPayments(result));
  }
};

export const updatePaymentAction = (data) => async (dispatch) => {
  const pending = updatePaymentById(data);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  status === "success" && dispatch(getPaymentAction());
};

export const deletePaymentAction = (_id) => async (dispatch) => {
  const pending = deletePaymentById(_id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  status === "success" && dispatch(getPaymentAction());
  dispatch(setModelShow(false));
};
