import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const add = async (event) => {
    event.preventDefault();

    const anecdote = event.target.anecdote.value;
    event.target.anecdote.value = "";

    dispatch(createAnecdote(anecdote));
    dispatch(setNotification(`you added "${anecdote}"`, 10));
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
