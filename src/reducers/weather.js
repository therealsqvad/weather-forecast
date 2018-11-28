const now = `${(new Date()).getFullYear()}-${(new Date()).getMonth() + 1}-${(new Date()).getDate()}`;

const initialState = {
  forecast: {
    city: '',
    country: '',
    icon: '',
    temp: '',
    dayMin: '',
    dayMax: '',
    dayCode: ''
  },
  loading: false,
  error: null,
  searchText: '',
  lat: 0,
  lon: 0,
  searchDate: now
};

function setSearchText(state, { searchText }) {
  return {
    ...state,
    searchText
  };
}

function setLocation(state, { location }) {
  return {
    ...state,
    lat: location.lat,
    lon: location.lon
  };
}

function setSearchDate(state, { searchDate }) {
  return {
    ...state,
    searchDate
  };
}

function fetchWeather(state) {
  return {
    ...state,
    error: null,
    loading: true
  };
}

function fetchWeatherSuccess(state, { forecast }) {
  return {
    ...state,
    error: null,
    loading: false,
    forecast
  };
}

function fetchWeatherError(state, { error }) {
  return {
    ...state,
    error,
    loading: false
  };
}

function fetchLocation(state, { lat, lon }) {
  return {
    ...state,
    lat,
    lon
  };
}

const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT';
const SET_SEARCH_DATE = 'SET_SEARCH_DATE';
const FETCH_WEATHER = 'FETCH_WEATHER';
const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
const FETCH_WEATHER_ERROR = 'FETCH_WEATHER_ERROR';
const GET_CURRENT_LOCATION_REQUESTED = 'GET_CURRENT_LOCATION_REQUESTED';
const GET_LOCATION_SUCCEED = 'GET_LOCATION_SUCCEED';

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TEXT:
      return setSearchText(state, action);
    case SET_SEARCH_DATE:
      return setSearchDate(state, action);
    case FETCH_WEATHER:
      return fetchWeather(state, action);
    case FETCH_WEATHER_SUCCESS:
      return fetchWeatherSuccess(state, action);
    case FETCH_WEATHER_ERROR:
      return fetchWeatherError(state, action);
    case GET_CURRENT_LOCATION_REQUESTED:
      return fetchLocation(state, action);
    case GET_LOCATION_SUCCEED:
      return setLocation(state, action);
    default:
      return state;
  }
}
