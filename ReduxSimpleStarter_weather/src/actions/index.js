import promiseMiddleware from 'redux-promise';
import axios from 'axios';

const openWeatherMap = {
    API: {
        URL: 'http://api.openweathermap.org/data/2.5/forecast?q=',
        KEY: 'bcc8fd3f8f43e1e6c55747689f03357b',
        generateUrl: (city, country) => `${openWeatherMap.API.URL}${city},${country}&appid=${openWeatherMap.API.KEY}`
    }
};

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, country = 'BE') {
    const requestUrl = openWeatherMap.API.generateUrl(city, country);
    console.info(`Built '${FETCH_WEATHER}' request URL '${requestUrl}'.`);

    const request = axios.get(requestUrl);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}