import { 
  SET_APP_DATA, 
  ADD_TO_MYLIST,
  REMOVE_FROM_MYLIST
  } from "./types";

const setAppData = payload => ({ 
  type: SET_APP_DATA, 
  payload 
});
export const addToMyList = payload => ({ 
  type: ADD_TO_MYLIST, 
  payload 
});
export const removeFromMyList = payload => ({
  type: REMOVE_FROM_MYLIST,
  payload
});

export function fetchData() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}data.json`);
      if (!response.ok) throw new Error(`Data request failed: ${response.status}`);
      dispatch(setAppData(await response.json()));
    } catch (error) {
      console.error(error);
    }
  };
}
