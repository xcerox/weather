import { createAction } from 'Utils/create-action';
import { FETCH_WEATHER } from 'Constants/weather-types';
import weatherService from 'Services/weather-service';


export default createAction(FETCH_WEATHER, {'payload': city => weatherService.get(city)});