import React, { Component } from 'react';

import SearchBar from 'Containers/search-bar';
import WeatherList from 'Containers/weather-list';
import 'Styles/app.css';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
