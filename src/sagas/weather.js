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

    // const resp = yield call(fetchLocation);
    const response = yield call(fetchWeatherService, searchText, searchDate);

    // console.log('resp:', resp);

    yield put(weatherActions.fetchWeatherSucces(response));
    // yield put(weatherActions.fetchWeatherSucces(resp));
  } catch (error) {
    yield put(weatherActions.fetchWeatherError(error));
  }
}

export function* watchFetchWeather() {
  yield* takeEvery('FETCH_WEATHER', fetchWeather);
}

export function* getLocation() {
  console.log('fetchLoc');
  const resp = yield call(fetchLocation);

  console.log(resp);

  yield put(weatherActions.getLocSucces(resp));
}

export function* getLoc() {
  yield* takeEvery('GET_CURRENT_LOCATION_REQUESTED', getLocation);
}
