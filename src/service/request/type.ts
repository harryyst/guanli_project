import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface STRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: any) => any;
  responseInterceptorCatch?: (error: any) => any;
}

export interface STRequestConfig extends AxiosRequestConfig {
  interceptors?: STRequestInterceptors;
  showloading?: boolean;
}
