import axios, { AxiosResponse } from 'axios';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import type { STRequestInterceptors, STRequestConfig } from './type';
import { configProviderContextKey, ElLoading } from 'element-plus';
class STRequest {
  instance: AxiosInstance;
  interceptors?: STRequestInterceptors;
  loading?: any;
  showloading: boolean;
  constructor(config: STRequestConfig) {
    this.instance = axios.create(config);
    this.interceptors = config.interceptors;
    this.showloading = config.showloading ?? false;
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );
    this.instance.interceptors.request.use(
      (config) => {
        console.log('lanjie');
        if (this.showloading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(0,0,0)'
          });
        }
        return config;
      },
      (error) => {
        return error;
      }
    );
    this.instance.interceptors.response.use(
      (config) => {
        if (this.showloading) {
          this.loading.close();
        }
        return config;
      },
      (error) => {
        return error;
      }
    );
  }
  request<T>(config: STRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res);
          }
          resolve(res);
          console.log(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get<T>(config: STRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }
}

export default STRequest;
