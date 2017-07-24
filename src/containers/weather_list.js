import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const city_name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => ((temp * 9/5) - 459.67));
    const pressures = _.map(cityData.list.map(weather => weather.main.pressure), (pressure) => (pressure * 0.02952998751));
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={ city_name }>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='F' /></td>
        <td><Chart data={pressures} color='blue' units='inHg' /></td>
        <td><Chart data={humidities} color='green' units='%' /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (inHg)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
