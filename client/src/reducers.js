import { combineReducers } from 'redux';

// action types
const GETTING_STORED_VALUE = "GETTING_STORED_VALUE";
const GOT_STORED_VALUE = "GOT_STORED_VALUE";
const SCHOOL_SELECTED = "SCHOOL_SELECTED";

const GOT_CERT_VALUE = "GOT_CERT_VALUE";

const SUBMIT_INFO = "SUBMIT_INFO";

// reducer with initial state
const initialState = {
  storedValue: -1,
  certInfo: {
    name: '考生姓名',
    userId: 'ID',
    userType: '学历',
    major: '专业',
    certHash: '2311231231231313'
  },
  submitInfo: {

  },
  schoolSelected: 0,
  schoolSelectedName: "清华大学"
};

function dappReducer(state = initialState, action) {
  switch (action.type) {
    case GETTING_STORED_VALUE:
      return { ...state, gotStoredValue: false };
    case GOT_STORED_VALUE:
      return { ...state, gotStoredValue: true, storedValue: action.storedValue };
    case GOT_CERT_VALUE:
      return { ...state, certInfo: action.certInfo }
    case SUBMIT_INFO:
      return { ...state, submitInfo: action.info }
    case SCHOOL_SELECTED:
      return { ...state, schoolSelected: action.school, schoolSelectedName: action.schoolName};
    default:
      return state;
  }
}

export default combineReducers({
  dappReducer
});
