import { SINGIN, SINGOUT } from "../actions/types";
const initialState = { isAuthenticated: false, user: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case SINGIN:
      return {
        isAuthenticated: true,
        user: { firstName: "John", lastName: "Doe" }
      };
    case SINGOUT:
      return {
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
};
