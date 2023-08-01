import {
  postNewAdmin,
  signInAdmin,
  getAdminInfo,
  getNewRefreshJWT,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setAdmin } from "./signin-signup/adminSlice";

export const createNewAdminAction = async (obj) => {
  const pendingResp = postNewAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please Wait...",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const SignInAdminAction = (obj) => async (dispatch) => {
  const pendingResp = signInAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please Wait...",
  });
  const { status, message, token } = await pendingResp;
  console.log(token);
  toast[status](message);

  if (status === "success") {
    sessionStorage.setItem("accessJWT", token.accessJWT);
    localStorage.setItem("refreshJWT", token.refreshJWT);
  }
  ////get the user data an dmount b the state
  dispatch(getAdminProfileAction());
};

export const getAdminProfileAction = () => async (dispatch) => {
  const { status, user } = await getAdminInfo();

  if (status === "success") {
    dispatch(setAdmin(user));
  }
};

export const autoLogin = () => async (dispatch) => {
  const accessJWT = sessionStorage.getItem("accessJWT");
  if (accessJWT) {
    return dispatch(getAdminProfileAction());
  }

  const refreshJWT = localStorage.getItem("refreshJWT");

  if (refreshJWT) {
    // request new accessJWT from server and all getAdminProfile

    const { accessJWT } = await getNewRefreshJWT();

    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfileAction());
    }
  }
};
