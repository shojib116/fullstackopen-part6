import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async (anecdote) => {
  const anecdoteObject = { content: anecdote, votes: 0 };
  const response = await axios.post(baseUrl, anecdoteObject);
  return response.data;
};

const updateVotes = async (anecdoteObject) => {
  const response = await axios.put(
    `${baseUrl}/${anecdoteObject.id}`,
    anecdoteObject
  );
  return response.data;
};

export default { getAll, createNew, updateVotes };
