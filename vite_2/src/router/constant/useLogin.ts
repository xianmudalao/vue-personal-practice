import { RouteRecordRaw } from "vue-router";

const UserLogin: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/view/login/Index.vue"),
    meta: {},
  },
];

export default UserLogin;
