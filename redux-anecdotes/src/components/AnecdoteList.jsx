import { useSelector, useDispatch } from "react-redux";
import { updateVotes } from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    return state.anecdotes
      .filter(
        (anecdote) =>
          anecdote.content
            .toLowerCase()
            .indexOf(state.filterTerm.toLowerCase()) !== -1
      )
      .sort((a, b) => b.votes - a.votes);
  });
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(updateVotes(id));
  };

  return (
    <>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default AnecdoteList;
