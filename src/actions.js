import data from './data.json';

const FAKE_SERVER_DELAY = 1000;

const setAppData = payload => ({ type: "SET_APP_DATA", payload });
export const addToMyList = payload => ({ type: "ADD_TO_MYLIST", payload })
export const removeFromMyList = payload => ({ type: "REMOVE_FROM_MYLIST", payload })

export const fetchAppData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(setAppData(data))
    }, FAKE_SERVER_DELAY);
  }
}