const actions = {
  LOAD_CURRENCY: 'LOAD_CURRENCY',
  LOAD_CURRENCY_SUCCESS: 'LOAD_CURRENCY_SUCCESS',
  LOAD_CURRENCY_ERROR: 'LOAD_CURRENCY_ERROR',
  getCurrency: (params) => ({
    type: actions.LOAD_CURRENCY,
    params
  }),
  getCurrencySuccess: data => ({
    type: actions.LOAD_CURRENCY_SUCCESS,
    data
  }),
  getCurrencyError: () => ({
    type: actions.LOAD_CURRENCY_ERROR
  })
};

export default actions;
