import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// title:string; 页面标题，通常必选。
// icon?:string; 图标，一般配合菜单使用。
// auth?:boolean; 是否需要登录权限。
// ignoreAuth?:boolean; 是否忽略权限。
// roles?:RoleEnum[]; 可以访问的角色
// keepAlive?:boolean; 是否开启页面缓存
// hideMenu?:boolean; 有些路由我们并不想在菜单中显示，比如某些编辑页面。
// order?:number; 菜单排序。
// frameUrl?:string; 嵌套外链。

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/view/login/Index.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/main",
    name: "Lain",
    component: () => import("@/view/main/Index.vue"), // 注意这里要带上 文件后缀.vue
  },
];

// 权限路由
export const asyncRoutes: Array<RouteRecordRaw> = [];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 重置路由
export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (newRouter as any).matcher;
}

export default router;
