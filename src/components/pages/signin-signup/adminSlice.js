import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
  adminDisplay: [],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setAdmin: (state, { payload }) => {
      state.admin = payload;
    },
    setAdminDisplay: (state, { payload }) => {
      state.adminDisplay = payload;
    },
  },
});
const { reducer, actions } = adminSlice;
export const { setAdmin, setAdminDisplay } = actions;
export default reducer;
