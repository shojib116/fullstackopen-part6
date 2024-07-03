import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../service/anecdote";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      return [...state, action.payload];
    },
    updateVotes(state, action) {
      const id = action.payload;
      const anecdoteToUpdate = state.find((a) => a.id === id);
      const updatedAnecdote = {
        ...anecdoteToUpdate,
        votes: anecdoteToUpdate.votes + 1,
      };

      return state.map((anecdote) =>
        anecdote.id === id ? updatedAnecdote : anecdote
      );
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { createAnecdote, updateVotes, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export default anecdoteSlice.reducer;
