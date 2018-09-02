import { createReducer } from 'Utils/create-reducer';
import { FETCH_WEATHER } from 'Constants/weather-types';

const weatherHandlers = {
  [FETCH_WEATHER]: (state, action) => {
    let newState = state;

    if (action.payload.data !== undefined) {
      newState = [action.payload.data, ...state];
    } 
    
    return newState;
  }
};

export default createReducer([], weatherHandlers);