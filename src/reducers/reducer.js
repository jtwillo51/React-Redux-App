


import {
  FETCHING_PICS_START,
  FETCHING_PICS_SUCCESS,
  FETCHING_PICS_FAILURE
} from "../actions/actions";

const initialState = {
  pics: "",
  isFetching: false,  
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PICS_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCHING_PICS_SUCCESS:
      return {
        ...state,
        pics: action.payload,
        isFetching: false
      };
    case FETCHING_PICS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
      
    default:
      return state;
  }
};

export default reducer