import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "./views/Home.vue")
  },
  {
    path: "/memory",
    name: "MemoryBoard.vue",
    component: () =>
      import(/* webpackChunkName: "memory" */ "./views/Memory.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
