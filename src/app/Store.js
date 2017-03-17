import { combineReducers, createStore } from 'redux';
import { closeResult, openResult } from './Animate.js';

const initialState = {
  firebaseDbResult: '',
  departure: '',
  landing: '',
  loading: false
};


const application = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING_DATA':
      return {
        firebaseDbResult: '',
        departure: '',
        landing: '',
        loading: action.value
      };
    case 'LOADING_END':
      openResult();
      return action.value;
    case 'CLOSE_RESULT_BOX':
      closeResult();
      return state;
    default:
      return state;
  }
}

const applicationApp = combineReducers({
  application
});

export { applicationApp };
