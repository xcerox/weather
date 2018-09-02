import { OPENWEATHERMAP_API } from 'Constants/keys';
import axios from 'axios';

let me;

class WeatherService {

  constructor() {
    if (!me) {
      me = this;

      me.URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHERMAP_API}`;
      me.get = this.getByCity.bind(this);
    } 

    return me;
  }

  getByCity(city) {
    const query = `${this.URL}&q=${city}`;
    return axios.get(query);
  }
 }

 export default new WeatherService();