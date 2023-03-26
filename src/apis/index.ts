import axios from "axios";
// 导入 Axios 相关类型定义
import type {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import type { IRequestInterceptors, RequestConfig } from "./axios-types";

class Request {
  instance: AxiosInstance;
  // 拦截器对象
  interceptorsObj?: IRequestInterceptors;

  constructor(config: RequestConfig) {
    this.instance = axios.create(config);
    this.interceptorsObj = config.interceptors;

    this.instance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        console.log("全局请求拦截");
        return req;
      },
      (err: object) => {
        console.warn("全局请求拦截错误", err);
      }
    );
    // 使用实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    );
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    );

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log("全局响应拦截");
        return res.data;
      },
      (err: object) => {
        console.warn("全局响应拦截错误", err);
      }
    );
  }

  request(config: InternalAxiosRequestConfig) {
    return this.instance.request(config);
  }
}

export default Request;
