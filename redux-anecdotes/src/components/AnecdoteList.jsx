import { useSelector, useDispatch } from "react-redux";
import { updateVotes } from "../reducers/anecdoteReducer";
import { notificationHandler } from "../utils/notification_helper";

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
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(updateVotes(anecdote));
    notificationHandler(`you voted '${anecdote.content}'`);
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
