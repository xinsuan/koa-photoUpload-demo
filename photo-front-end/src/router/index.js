import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Login from "../views/Login.vue";
import Photo from "../views/Photo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      isAuth: false
    }
  },
  {
    path: "/photo",
    name: "Photo",
    component: Photo,
    meta: {
      isAuth: true
    }
  },
  {
    path: "/detail/:id",
    name: "Detail",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

// 鉴权处理
// 检测有没有 token

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  // photo -> token
  // login -> 不需要 token
  // 怎么把两个页面区分开呢？
  console.log(to);
  // 前端鉴权处理
  if (to.meta.isAuth) {
    // 说明需要 token
    if (store.state.token) {
      next();
    } else {
      next({
        name: "Login"
      });
    }
  } else {
    next();
  }
});

export default router;
