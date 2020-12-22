import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { setError, uiFinishLoading, uiStartLoading } from "./ui";

// Register with email, name and password
export const startRegisterEmailPassword = (email, password, displayName) => {
  return async (dispatch) => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      await user.updateProfile({ displayName: displayName });
      dispatch(login(user.uid, user.displayName));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// login with email and password
export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      
        dispatch(uiStartLoading());

        const {user} = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        dispatch(login(user.uid, user.displayName));
        dispatch(uiFinishLoading());

    } catch (error) {
      error.message = "Error. This user is not exists.";
      dispatch(setError(error));
      dispatch(uiFinishLoading());
    }
  };
};

// firebase auth with google
export const startLoginGoogle = () => {
  return async (dispatch) => {
    const { user } = await firebase.auth().signInWithPopup(googleAuthProvider);
    dispatch(login(user.uid, user.displayName));
  };
};

//actions
export const login = (uid, name) => ({
  type: types.login,
  payload: {
    uid,
    name,
  },
});
