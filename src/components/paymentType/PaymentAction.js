import { toast } from "react-toastify";
import { getPayment, postPayment } from "../../helper/axios";
import { setPayments } from "../pages/payment-option/PaymentSlice";

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
