# photo项目

## 前端

### 页面

#### 1）登录页

功能：登录后跳转页面，拿到 token 值存在本地的

注意：要等待异步数据获取，拿到 token 后再存放到本地 localStorage

#### 2）详情页

按需加载

### vue配置-vue.config.js

跨域做代理，proxy

### api请求接口-api/index.js

图片数据格式的提交需转换为二进制数据

```js
const formData = new FormData();
formData.append('img', file);
```

### axios配置-http.js

#### 1）请求地址前都加上 '/api'；

#### 2）请求拦截，从 vuex 中获取 token，添加到请求头；

#### 3）响应拦截，出错的直接返回登录页面

### router中导航守卫减轻网络请求

#### 1）路由配置中 meta 字段的使用

#### 2）router.beforeEach((to, from, next))，在路由跳转前就做判断，是否需要 token 授权，不需要的页面可以直接展示，或者当 token 在本地缓存中存在，也不需要重新登录

## 后端

### 响应请求

#### 1）login

拿到登录账号和密码后，查询数据库，存在则生成 token 值

不存在返回登录失败

#### 2）upload多张照片数据是怎么处理的

拼接存图路径 uploadPath ——> savePath；

读取 img 数据，readStream.pipe(writeStream) ，传输数据；

将关键数据存入数据库

#### 3）getPhotos

[uId, offset, limit]

#### 4）getPhoto



后端

```
1.将 .sql 文件数据导入数据库
2.安装后端文件依赖包 npm i
3.npm run dev
```

前端

```
1.安装依赖包 npm i
2.npm run serve
```

