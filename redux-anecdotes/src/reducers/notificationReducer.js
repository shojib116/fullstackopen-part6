import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
    discardNotification(state, action) {
      return null;
    },
  },
});

export const { setNotification, discardNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;
