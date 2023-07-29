import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setModelShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});
const { reducer, actions } = systemSlice;
export const { setModelShow } = actions;
export default reducer;
