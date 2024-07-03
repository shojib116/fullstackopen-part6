import { createSlice } from "@reduxjs/toolkit";

// const filterReducer = (state = "", action) => {
//   switch (action.type) {
//     case "NEW_FILTER":
//       return action.payload;
//     default:
//       return state;
//   }
// };

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterTermChange(state, action) {
      return action.payload;
    },
  },
});

export const { filterTermChange } = filterSlice.actions;

export default filterSlice.reducer;
