import type { AxiosRequestConfig, AxiosResponse } from "axios";

// 通过axios的type自定义类型
export interface IRequestInterceptors {
  // 请求拦截类型
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截类型
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse;
  responseInterceptorsCatch?: (err: any) => any;
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors;
}
