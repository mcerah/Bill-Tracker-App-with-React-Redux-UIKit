import { SINGIN_ERROR } from "../actions/types";
const initialState = { signinError: "" };

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGIN_ERROR:
      return {
        signinError: "Wrong password or username"
      };
    default:
      return state;
  }
};
