import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            return (
                <tr key={weatherData.city.name}>
                    <td>{weatherData.city.name}</td>
                    <td><img src="http://placehold.it/140x100" /></td>
                    <td><img src="http://placehold.it/140x100" /></td>
                    <td><img src="http://placehold.it/140x100" /></td>
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

