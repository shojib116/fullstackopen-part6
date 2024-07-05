export const notificationHandler = (dispatch, message) => {
  clearTimeout(notificationHandler.timeout);
  dispatch({ type: "SET", payload: message });
  notificationHandler.timeout = setTimeout(() => {
    dispatch({ type: "CLEAR" });
  }, 5000);
};

notificationHandler.timeout = null;
