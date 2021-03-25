// api 入口文件
import http from "../http";

// api -> 开发规范
export function apiLogin({ username, password }) {
  // axios
  // /api
  return http.post("/login", {
    username,
    password
  });
}

export function apiGetPhotos() {
  return http.get("/getPhotos");
}

export function apiUpload(file) {
  const formData = new FormData();
  formData.append("img", file);
  return http.post("/upload", formData).then(res => {
    console.log(res);
  });
}
