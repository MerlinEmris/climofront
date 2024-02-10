const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "relax", component: () => import("pages/RelaxPage.vue") },
    ],
  },
  {
    path: "/auth/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("pages/auth/AuthLoginPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
