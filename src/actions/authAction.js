import axios from "axios";
import { SINGIN, SINGOUT, SINGIN_ERROR } from "./types";

export const signIn = (username, password) => dispatch => {
  if (username == "" && password == "") {
    dispatch({
      type: SINGIN
    });
  } else {
    dispatch({
      type: SINGIN_ERROR
    });
  }
};

export const signOut = () => dispatch => {
  dispatch({
    type: SINGOUT
  });
};
