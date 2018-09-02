 import { combineReducers } from 'redux';
 import WeatherReducer from 'Reducers/weather-reducer';

 const rootReducer = combineReducers({
  weather: WeatherReducer
 });

 export default rootReducer;