import store from "../stores/store";
import {
  setNotification,
  discardNotification,
} from "../reducers/notificationReducer";

export const notificationHandler = (message) => {
  clearTimeout(notificationHandler.timeoutId);
  notificationHandler.timeoutId = setTimeout(
    () => store.dispatch(discardNotification()),
    5000
  );
  store.dispatch(setNotification(message));
};

notificationHandler.timeoutId = null;
