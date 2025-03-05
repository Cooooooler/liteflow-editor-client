// request_controller.ts
import { extend } from 'umi-request';

// 创建一个 umi-request 实例
const requestController = extend({
  // prefix: 'api', // 统一的请求前缀
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.DUMI_APP_A!,
  },
  errorHandler: (error) => {
    // 统一的错误处理
    const { response } = error;

    if (response && response.status) {
    } else if (!response) {
    }

    return Promise.reject(error);
  },
});

// 添加请求拦截器
requestController.interceptors.request.use((url, options) => {
  // 可以在这里添加统一的请求头，例如 token
  const token = localStorage.getItem('Authorization');

  const headers = new Headers(options.headers);

  if (token) {
    headers.set('Authorization', token);
  }

  return { url, options };
});

// 添加响应拦截器
requestController.interceptors.response.use((response, _) => {
  // 可以在这里处理统一的响应，例如错误提示
  return response;
});

export default requestController;
