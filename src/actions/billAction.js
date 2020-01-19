import axios from "axios";
import { ADD_BILL, GET_BILLS } from "./types";

export const getBills = () => dispatch => {
  axios
    .get("./data.json")
    .then(res => {
      dispatch({
        type: GET_BILLS,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
};
