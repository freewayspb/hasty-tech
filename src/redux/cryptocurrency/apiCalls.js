import axios from '../axios';
import apiEndpoints from '../apiEndpoints';

const onLoadCurrency = async params => axios
  .get(`${apiEndpoints.currency}`, params)
  .then(response => response);

export {
  onLoadCurrency
};
