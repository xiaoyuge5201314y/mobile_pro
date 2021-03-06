import axios from 'axios';

// 设置访问前缀
axios.defaults.baseURL = "http://localhost/"

// 请求拦截器
axios.interceptors.request.use(config => {
  //
  return config;
});

// 响应拦截器
axios.interceptors.response.use(response => {
  return response
})

// get请求
const getRequest = (url) => axios.get(url);
// post请求
const postRequest = (url, data) => axios.post(url, data);

// 登录
const login = (data) => postRequest('/login', data);

export default {
  getRequest,
  postRequest,
  login
}
