import { createActionThunk } from 'Utils/create-action';
import { startLoading, completeLoading, failLoading } from 'Actions/loading-actions';
import weatherService from 'Services/weather-service';

const fetchWeather = createActionThunk((city, dispatch) => {
  dispatch(startLoading());
  weatherService
                .get(city)
                .then((data) => {
                          setTimeout(dispatch(completeLoading(data)), 10000);
                }).catch((err) => {
                  dispatch(failLoading());
                });
});

export { fetchWeather };

