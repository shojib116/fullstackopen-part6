import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../service/anecdote";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    updateAnecdote(state, action) {
      return state.map((anecdote) =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      );
    },
    appendAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { updateAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (anecdote) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(anecdote);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const updateVotes = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };

    await anecdoteService.updateVotes(updatedAnecdote);
    dispatch(updateAnecdote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
