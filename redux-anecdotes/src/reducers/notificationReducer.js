import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "Loaded all the anecdotes",
});

export default notificationSlice.reducer;
