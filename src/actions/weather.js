const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const SET_SEARCH_DATE = 'SET_SEARCH_DATE';
const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
const GET_CURRENT_LOCATION_REQUESTED = 'GET_CURRENT_LOCATION_REQUESTED';
const GET_LOCATION_SUCCEED = 'GET_LOCATION_SUCCEED';


export default {
  getCurrentLoc: () => ({ type: GET_CURRENT_LOCATION_REQUESTED }),
  getLocSucces: location => ({ type: GET_LOCATION_SUCCEED, location }),
  setSearchText: searchText => ({ type: SET_SEARCH_TEXT, searchText }),
  setSearchDate: searchDate => ({ type: SET_SEARCH_DATE, searchDate }),
  fetchWeather: () => ({ type: FETCH_WEATHER }),
  fetchWeatherSucces: forecast => ({ type: FETCH_WEATHER_SUCCESS, forecast }),
  fetchWeatherError: error => ({ type: FETCH_WEATHER_ERROR, error })
};
