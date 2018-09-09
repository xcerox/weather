import { createAction } from 'Utils/create-action';
// import { FETCH_WEATHER } from 'Constants/weather-types';
import weatherService from 'Services/weather-service';
import { LOADING_STARTED, LOADING_COMPLETED, LOADING_FAILED } from 'Constants/loading-types';


//export default createAction(FETCH_WEATHER, {'payload': city => weatherService.get(city)});

export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(startLoading());

    return weatherService
                        .get(city)
                        .then((data) => {
                          setTimeout(dispatch(completeLoading(data)), 10000);
                        })
                        .catch((err) => {
                          dispatch(failLoading());
                        })
  }
}

export const startLoading = () => {
  return {
    type: LOADING_STARTED
  }
}

export const completeLoading = (data) => {
  return {
    type: LOADING_COMPLETED,
    payload: data
  }
}

export const failLoading = () => {
    return {
      type: LOADING_FAILED
    }
}