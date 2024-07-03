import { useDispatch } from "react-redux";
import anecdoteService from "../service/anecdote";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { notificationHandler } from "../utils/notification_helper";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";

    const newAnecdote = await anecdoteService.createNew(anecdote);

    dispatch(createAnecdote(newAnecdote));
    notificationHandler(`you added "${anecdote}"`);
  };

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input type="text" name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  );
};

export default AnecdoteForm;
