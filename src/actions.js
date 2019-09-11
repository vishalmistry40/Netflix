import axios from "axios";

// action creators
const setAppData = payload => ({ type: "SET_APP_DATA", payload });
export const addToMyList = payload => ({ type: "ADD_TO_MYLIST", payload });
export const removeFromMyList = payload => ({
  type: "REMOVE_FROM_MYLIST",
  payload
});

export function fetchData() {
  return async function(dispatch) {
    try {
      const response = await axios.get("./data.json");
      dispatch(setAppData(response.data));
    } catch (error) {
      console.error(error);
    }
  };
}
