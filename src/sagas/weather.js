import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import fetchWeatherService from '../services/fetchWeather';
import fetchLocation from '../services/fetchLocation';
import weatherActions from '../actions/weather';
import weatherSelector from '../selectors/weather';

export function* fetchWeather() {
  try {
    const searchText = yield select(weatherSelector.getSearchText);
    const searchDate = yield select(weatherSelector.getSearchDate);

    const response = yield call(fetchWeatherService, searchText, searchDate);

    yield put(weatherActions.fetchWeatherSucces(response));
  } catch (error) {
    yield put(weatherActions.fetchWeatherError(error));
  }
}

export function* watchFetchWeather() {
  yield* takeEvery('FETCH_WEATHER', fetchWeather);
}

export function* getLocation() {
  const resp = yield call(fetchLocation);
  const city = `(${resp.lat},${resp.lon})`;

  yield put(weatherActions.getLocSucces(resp));
  yield put(weatherActions.setSearchText(city));
  yield put(weatherActions.fetchWeather());
}

export function* getLoc() {
  yield* takeEvery('GET_CURRENT_LOCATION_REQUESTED', getLocation);
}
