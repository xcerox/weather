import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'Components/chart';
import GoogleMap from 'Components/google-map';

class WeatherList extends Component {

  constructor(props) {
    super(props);

    this.renderWeather = this.renderWeather.bind(this);
  }

  renderWeather({ city, list }, index) {

    const data = {temps: [], pressures: [], humidities: []};

    list.forEach( weather => {
      data.temps.push(weather.main.temp);
      data.pressures.push(weather.main.pressure);
      data.humidities.push(weather.main.humidity);
    });

    const {lat, lon } = city.coord;

    return (
      <tr key={city.name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={data.temps} gradient={['#00c6ff', '#F0F', '#FF0']} /></td>
        <td><Chart data={data.pressures} gradient={['red', 'orange', 'yellow']} /></td>
        <td><Chart data={data.humidities} gradient={['#f72047', '#ffd200', '#1feaea']} /></td>
      </tr>
    )
  }

  render() {
    const { weather } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { weather.map(this.renderWeather) }
        </tbody>
      </table> 
    )
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);