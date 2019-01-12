import { combineReducers } from 'redux';

// action types
const GETTING_STORED_VALUE = "GETTING_STORED_VALUE";
const GOT_STORED_VALUE = "GOT_STORED_VALUE";
const SCHOOL_SELECTED = "SCHOOL_SELECTED";

const GOT_CERT_VALUE = "GOT_CERT_VALUE";

// reducer with initial state
const initialState = {
  storedValue: -1,
<<<<<<< HEAD
  certInfo: {
    personalInfo: {
      name: 'My Name',
      photo: 'photo',
      id: '321021198111220901',
      age: 21
    },
    certNo: 'No. 120123',
    issuer: '1',
    owner: 'Li Fu Ming',
    hash: 'M3DDSODHA3304XDMEO',
    state: 1
  }
=======
  schoolSelected: 0
>>>>>>> dd233d86cdd2cb0892e1ec8954aead096a144d3c
};

function dappReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_STORED_VALUE:
      return { ...state, gotStoredValue: false };
    case GOT_STORED_VALUE:
      return { ...state, gotStoredValue: true, storedValue: action.storedValue };
<<<<<<< HEAD
    case GOT_CERT_VALUE:
      return { ...state, certInfo: action.certInfo }
=======
    case SCHOOL_SELECTED:
      return { ...state, schoolSelected: action.school};
>>>>>>> dd233d86cdd2cb0892e1ec8954aead096a144d3c
    default:
      return state;
  }
}

export default combineReducers({
  dappReducer
});
