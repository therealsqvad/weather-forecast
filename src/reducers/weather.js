const initialState = {
  weatherList: [],
  loading: false,
  error: null,
  searchText: ''
};

function setSearchText(state, { searchText }) {
  return {
    ...state,
    searchText
  };
}

function fetchWeather(state) {
  return {
    ...state,
    weatherList: [],
    error: null,
    loading: true
  };
}

function fetchWeatherSuccess(state, { weatherList }) {
  return {
    ...state,
    error: null,
    loading: false,
    weatherList
  };
}

function fetchWeatherError(state, { error }) {
  return {
    ...state,
    error,
    loading: false
  };
}

const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return setSearchText(state, action);
    case FETCH_WEATHER:
      return fetchWeather(state, action);
    case FETCH_WEATHER_SUCCESS:
      return fetchWeatherSuccess(state, action);
    case FETCH_WEATHER_ERROR:
      return fetchWeatherError(state, action);
    case 'GET_CURRENT_LOCATION_REQUESTED':
      console.log('reducer getLoc');
      return state;
    default:
      return state;
  }
}
