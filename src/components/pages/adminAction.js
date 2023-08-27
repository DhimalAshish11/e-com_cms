import {
  postNewAdmin,
  signInAdmin,
  getAdminInfo,
  getNewRefreshJWT,
  getNewAccessJWT,
  getAdmin,
  getAdminDisplay,
  getAdminTableDisplay,
  updateAdmin,
  updatePassword,
} from "../../helper/axios";
import { toast } from "react-toastify";
import { setAdmin, setAdminDisplay } from "./signin-signup/adminSlice";

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

export const getAdminTable = () => async (dispatch) => {
  const { status, user } = await getAdminTableDisplay();

  if (status === "success") {
    dispatch(setAdminDisplay(user));
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

    const { accessJWT } = await getNewAccessJWT();

    if (accessJWT) {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfileAction());
    }
  }
};

export const updateAdminAction = (data) => async (dispatch) => {
  const respPending = updateAdmin(data);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getAdminProfileAction());
  }
};

export const updatePasswordAction = (data) => async (dispatch) => {
  const respPending = updatePassword(data);
  toast.promise(respPending, {
    pending: "please wait....",
  });

  const { status, message } = await respPending;

  toast[status](message);

  if (status === "success") {
    //call the api to fetch all the cats and mount in the state
    dispatch(getAdminProfileAction());
  }
};
