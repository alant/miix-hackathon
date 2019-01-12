import { combineReducers } from 'redux';

// action types
const GETTING_STORED_VALUE = "GETTING_STORED_VALUE";
const GOT_STORED_VALUE = "GOT_STORED_VALUE";

// reducer with initial state
const initialState = {
  storedValue: -1
};

function dappReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_STORED_VALUE:
      return { ...state, gotStoredValue: false };
    case GOT_STORED_VALUE:
      return { ...state, gotStoredValue: true, storedValue: action.storedValue };
    default:
      return state;
  }
}

export default combineReducers({
  dappReducer
});
