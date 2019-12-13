import { Map } from 'immutable';
import actions from './actions';

const initState = new Map({
  currencyList: null,
  currencyLoading: false,
  currencyError: null
});

const reducer = (state = initState, action) => {
  switch (action.type) {
  case actions.LOAD_CURRENCY:
    return state
      .set('currencyLoading', true)
      .set('currencyError', false);
  case actions.LOAD_CURRENCY_SUCCESS:
    return state
      .set('currencyList', action.data.data)
      .set('currencyLoading', false)
      .set('currencyError', false);
  case actions.LOAD_CURRENCY_ERROR:
    return state
      .set('currencyLoading', false)
      .set('currencyError', true);
  default:
    return state;
  }
};

export default reducer;
