import { all } from 'redux-saga/effects';
import cryptoCurrencySaga from './cryptocurrency/saga';

export default function* rootSaga() {
  yield all([cryptoCurrencySaga()]);
}