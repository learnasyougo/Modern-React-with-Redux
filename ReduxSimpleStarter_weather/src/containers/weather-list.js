import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherChart from '../components/weather-chart';
import CityMap from '../components/city-map';

function mapStateToProps({ weather }) {
    return { weather };
}

export default connect(mapStateToProps)(
    class WeatherList extends Component {
        renderCities() {
            return this
                .props
                .weather
                .map(w => this.renderCity(w));
        }
        renderCity(weatherData) {
            const { city, list: data } = weatherData;
            const { lon, lat } = city.coord;

            const temperaturesKelvin = data.map(data => data.main.temp);
            const temperaturesCelsius = temperaturesKelvin.map(kelvin => kelvin - 273.15);
            const humidities = data.map(data => data.main.humidity);
            const pressures = data.map(data => data.main.pressure);

            return (
                <tr key={city.name}>
                    <td>
                        <strong>{city.name}</strong>
                        <CityMap lon={lon} lat={lat} />
                    </td>
                    <td>
                        <WeatherChart data={temperaturesCelsius} color="orange" units="°C" />
                    </td>
                    <td>
                        <WeatherChart data={humidities} color="green" units="hPa" />
                    </td>
                    <td>
                        <WeatherChart data={pressures} color="blue" units="%" />
                    </td>
                </tr>
            );
        }

        render() {
            return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (°C)</th>
                            <th>Pressure (hPa)</th>
                            <th>Humidity (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCities()}
                    </tbody>
                </table>
            );
        }
    }
);

