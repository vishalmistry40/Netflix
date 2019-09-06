import axios from "axios";

const FAKE_SERVER_DELAY = 1000;
var customData = require('./data.json');

export function fetchData(){
    return function(dispatch){
        axios.get('./data.json')
            .then((response) => {
                dispatch({type:'FETCH_ITEMS_FULFILLED', payload:response.data});
            })
            .catch((err) => {
                dispatch({type:'FETCH_ITEMS_REJECTED', payload:err});
            })
    }
}

const setAppData = payload => ({ type: "SET_APP_DATA", payload });
export const addToMyList = payload => ({ type: "ADD_TO_MYLIST", payload })
export const removeFromMyList = payload => ({ type: "REMOVE_FROM_MYLIST", payload })

export const fetchAppData = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(setAppData(customData))
    }, FAKE_SERVER_DELAY);
  }
}

