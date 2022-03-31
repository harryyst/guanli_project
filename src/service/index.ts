import STRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
const stRequest = new STRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      return config;
    },
    requestInterceptorCatch: (err) => {
      return err;
    },
    responseInterceptor: (res) => {
      return res;
    }
  }
});
export default stRequest;
