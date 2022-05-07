import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "site",
    component: () => import('@/pages/HomeSite.vue'),
    children: [
      {
        path: "",
        name: "Home Background",
        component: () => import('@/pages/HomeSite.vue'),

      }
    ]
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
