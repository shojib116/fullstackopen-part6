import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    newNotification(state, action) {
      return action.payload;
    },
    clearNotification(state, action) {
      return null;
    },
  },
});

export const { newNotification, clearNotification } = notificationSlice.actions;

export const setNotification = (message, time) => {
  clearTimeout(setNotification.timout);
  return async (dispatch) => {
    dispatch(newNotification(message));
    setNotification.timout = setTimeout(() => {
      dispatch(clearNotification());
    }, time * 1000);
  };
};

setNotification.timout = null;

export default notificationSlice.reducer;
