import _axios from 'axios';
import qs from 'query-string';
import apiEndpoints from './apiEndpoints';
import config from '../config';

const axios = _axios.create({
  baseURL: apiEndpoints.base,
  timeout: 10000,
  paramsSerializer: params => qs.stringify(params),
  headers: {
    'Accept': 'application/json',
    'X-CMC_PRO_API_KEY': config.API_KEY,
    "Access-Control-Allow-Origin": "*"
  }
});

export default axios;
