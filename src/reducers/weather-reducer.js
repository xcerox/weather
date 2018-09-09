import { createReducer } from 'Utils/create-reducer';
// import { FETCH_WEATHER } from 'Constants/weather-types';
import { LOADING_STARTED, LOADING_COMPLETED, LOADING_FAILED } from 'Constants/loading-types';

const weatherHandlers = {
  [LOADING_COMPLETED]: (state, action) => {
    let newState = state.data;

    if (action.payload.data !== undefined) {
      newState = [action.payload.data, ...newState];
    } 
    
    return {
      data: newState,
      isLoading: false,
      isError: false, 
    };
  },
  [LOADING_STARTED]: (state, action) => {
    return {
      data: state.data,
      isLoading: true,
      isError: false, 
    }
  },
  [LOADING_FAILED]: (state, action) => {
    return {
      data: state.data,
      isLoading: false,
      isError: true,
    }
  }
};

const initState = {
  isLoading: false,
  isError: false, 
  data: []
}

export default createReducer(initState, weatherHandlers);