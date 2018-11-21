import { fork, all } from 'redux-saga/effects';
import * as weatherSagas from './weather';

export default function* root() {
  yield all([
    fork(weatherSagas.getLoc),
    fork(weatherSagas.watchFetchWeather)
  ]);
}
