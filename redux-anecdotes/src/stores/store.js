import { configureStore } from "@reduxjs/toolkit";

import anecdoteReducer from "../reducers/anecdoteReducer";
import filterReducer from "../reducers/filterReducer";

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filterTerm: filterReducer,
  },
});

export default store;
