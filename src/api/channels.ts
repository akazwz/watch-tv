import {AxiosRequestConfig} from 'axios'

const axios = require('axios').default;
const baseUrl = 'https://iptv-org.github.io/iptv/channels.json';

export async function getChannels() {
  return await axios.get(baseUrl);
}

export interface AxiosResponse {
  data: any; // 服务端返回的数据
  status: number; // HTTP 状态码
  statusText: string; // 状态消息
  headers: any; // 响应头
  config: AxiosRequestConfig; // 请求配置对象
  request: any; // 请求的 XMLHttpRequest 对象实例
}
