const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export default {
  setSearchText: searchText => ({ type: SET_SEARCH_TEXT, searchText }),
  fetchWeather: () => ({ type: FETCH_WEATHER }),
  fetchWeatherSucces: weatherList => ({ type: FETCH_WEATHER_SUCCESS, weatherList }),
  fetchWeatherError: error => ({ type: FETCH_WEATHER_ERROR, error })
};
