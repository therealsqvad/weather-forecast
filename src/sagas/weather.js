import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import fetchWeatherService from '../services/fetchWeather';
import weatherActions from '../actions/weather';
import weatherSelector from '../selectors/weather';

export function* fetchWeather() {
  try {
    const searchText = yield select(weatherSelector.getSearchText);
    const response = yield call(fetchWeatherService, searchText);

    yield put(weatherActions.fetchWeatherSucces(response));
  } catch (error) {
    yield put(weatherActions.fetchWeatherError(error));
  }
}

export function* watchFetchWeather() {
  yield* takeEvery('FETCH_WEATHER', fetchWeather);
}
