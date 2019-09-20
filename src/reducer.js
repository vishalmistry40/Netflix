import { 
  SET_APP_DATA, 
  ADD_TO_MYLIST,
  REMOVE_FROM_MYLIST
  } from "./types";

function app(state, action) {
  switch (action.type) {
    case SET_APP_DATA:
      return { 
        ...state, 
        ...action.payload 
      };
    case ADD_TO_MYLIST:
      return {
        ...state,
        mylist: [...state.mylist, action.payload],
        recommendations: state.recommendations.filter(
          r => r.id !== action.payload.id
        )
      };
    case REMOVE_FROM_MYLIST:
      return {
        ...state,
        mylist: state.mylist.filter(m => m.id !== action.payload.id),
        recommendations: [...state.recommendations, action.payload]
      };
    default:
      return state;
  }
}

export default app;
