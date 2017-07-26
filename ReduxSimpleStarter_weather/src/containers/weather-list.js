import React, { Component } from 'react';
import { connect } from 'react-redux';

import WeatherChart from '../components/weather-chart';

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

            const temperatures = data.map(data => data.main.temp);
            const humidities = data.map(data => data.main.humidity);
            const pressures = data.map(data => data.main.pressure);

            return (
                <tr key={city.name}>
                    <td>{city.name}</td>
                    <td>
                        <WeatherChart data={temperatures} />
                    </td>
                    <td>
                        <WeatherChart data={humidities} />
                    </td>
                    <td>
                        <WeatherChart data={pressures} />
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
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
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

