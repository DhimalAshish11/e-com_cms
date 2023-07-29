import { postNewAdmin, signInAdmin } from "../../helper/axios";
import { toast } from "react-toastify";

export const createNewAdminAction = async (obj) => {
  const pendingResp = postNewAdmin(obj);

  toast.promise(pendingResp, {
    pending: "Please Wait...",
  });
  const { status, message } = await pendingResp;
  toast[status](message);
};

export const SignInAdminAction = async (obj) => {
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
};
