import STRequest from './request';
import { BASE_URL, TIME_OUT } from './request/config';
import localCache from '@/utils/cache';
const stRequest = new STRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache('token');
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
