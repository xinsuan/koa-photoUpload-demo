import axios from "axios";
import router from "./router";
import store from "./store";

// baseUrl
const myAxios = axios.create({
  baseURL: "/api"
});

// 请求拦截
// 携带上 token
myAxios.interceptors.request.use(config => {
  // token
  const token = store.state.token;
  console.log(token);
  if (token) {
    // authorization
    config.headers.authorization = "Bearer " + token;
  }

  return config;
});

// 跳转到 login 页面
myAxios.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err.response);
    if (err.response.status === 401) {
      router.replace({
        name: "Login"
      });
    }
    // 401 .....
  }
);

export default myAxios;
