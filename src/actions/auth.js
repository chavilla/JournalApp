import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(login(email, password));
    }, 3000);
  };
};

// firebase auth
export const startLoginGoogle = () => {
  return async (dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(login(user.uid, user.displayName));
  };
};

export const login = (uid, name) => ({
  type: types.login,
  payload: {
    uid,
    name,
  },
});
