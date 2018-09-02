import React, { Component } from 'react';

export default class GoogleMap extends Component {

  componentDidMount() {
    const {lat, lon} = this.props;

    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: lat,
        lng: lon
      }
    });
  }

  render() {
    return <div ref="map" />;
  }
}