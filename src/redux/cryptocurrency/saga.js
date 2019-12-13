import {
  all, takeLatest, put, call
} from 'redux-saga/effects';
import actions from './actions';
import { onLoadCurrency } from './apiCalls';

export function* loadCurrency(params) {
  try {
    const response = yield call(onLoadCurrency, params);
    if (response.data) {
      yield put(actions.getCurrencySuccess(response.data));
    } else {
      yield put(actions.getCurrencyError());
    }
  } catch (error) {
    yield put(actions.getCurrencyError());
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LOAD_CURRENCY, loadCurrency)
  ]);
}
