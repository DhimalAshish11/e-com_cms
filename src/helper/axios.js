import axios from "axios";

const rootAPI = process.env.REACT_APP_ROOTAPI;
const adminAPI = rootAPI + "/admin";
const catAPI = rootAPI + "/category";

const getAccessJWT = () => {
  return sessionStorage.getItem("accessJWT");
};

const axiosProcesor = async ({ method, url, obj, isPrivate }) => {
  const header = {
    Authorization: isPrivate ? getAccessJWT() : null,
  };
  console.log(header);

  try {
    const { data } = await axios({
      method,
      url,
      data: obj,
      header,
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

//adminapi
export const postNewAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

export const signInAdmin = (data) => {
  const obj = {
    method: "post",
    url: adminAPI + "/sign-in",
    obj: data,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

/////getadmin
export const getAdminInfo = () => {
  const obj = {
    method: "get",
    url: adminAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const postNewAdminVerificationInfo = (data) => {
  const obj = {
    method: "post",
    url: adminAPI + "/admin-verification",
    obj: data,
  };
  return axiosProcesor(obj);
};

export const postCategory = (data) => {
  const obj = {
    method: "post",
    url: catAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

export const getCategory = () => {
  const obj = {
    method: "get",
    url: catAPI,
    isPrivate: true,
  };
  return axiosProcesor(obj);
};

export const updateCategory = (data) => {
  const obj = {
    method: "put",
    url: catAPI,
    obj: data,
  };
  return axiosProcesor(obj);
};

export const deleteCategory = (_id) => {
  const obj = {
    method: "delete",
    url: catAPI + "/" + _id,
  };
  return axiosProcesor(obj);
};
