import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: {},
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setadmin: (state, { payload }) => {
      if (state.admin.length === 0 && payload.length === 0) {
        return;
      }
      state.admin = payload;
    },
  },
});
const { reducer, actions } = adminSlice;
export const { setAdmin } = actions;
export default reducer;
