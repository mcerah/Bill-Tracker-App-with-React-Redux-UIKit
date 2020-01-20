import { ADD_BILL, GET_BILLS } from "../actions/types";
import update from "immutability-helper";
const initialState = { bills: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BILLS:
      return {
        ...state,
        bills: action.payload
      };
    case ADD_BILL:
      return {
        ...state,
        bills: update(state.bills, { $push: [action.payload] })
      };
    default:
      return state;
  }
};
