const filterReducer = (state = "", action) => {
  switch (action.type) {
    case "NEW_FILTER":
      return action.payload;
    default:
      return state;
  }
};

export const filterTermChange = (filterTerm) => {
  return {
    type: "NEW_FILTER",
    payload: filterTerm,
  };
};

export default filterReducer;
