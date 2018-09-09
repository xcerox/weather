import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'Components/chart';
import GoogleMap from 'Components/google-map';
import LoadingBar from 'Components/loading-bar';

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
      <div className="col s12 animated fadeInDown" key={city.name}>
        <div className="card horizontal">
          <div>
            <GoogleMap lon={lon} lat={lat}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
              <div className = "row center-text">
                <div className="col s4">
                  <div className="row">
                    <strong>Temperature:</strong>
                  </div>
                   <Chart data={data.temps}  unity={'(K)'} gradient={['#00c6ff', '#F0F', '#FF0']} />
                </div>
                <div className="col s4 center-text">
                  <div className="row">
                    <strong>Pressure:</strong>
                  </div>
                  <Chart data={data.pressures} unity={'(hPa)'} gradient={['red', 'orange', 'yellow']} />
                </div>
                <div className="col s4 center-text">
                  <div className="row">
                    <strong>Humidiy:</strong>
                  </div>
                  <Chart data={data.humidities} unity={'(%)'} gradient={['#f72047', '#ffd200', '#1feaea']} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { isLoading, data } = this.props.weather;

    return (
      <div>
        <LoadingBar isLoading= {isLoading}/>
        {
          data.map(this.renderWeather)
        }
      </div>
    )
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);