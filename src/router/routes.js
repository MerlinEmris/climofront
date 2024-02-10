const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "relax", component: () => import("pages/RelaxPage.vue") },
      { path: "aboutus", component: () => import("pages/AboutUsPage.vue") },
      { path: "news", component: () => import("pages/news/NewsListPage.vue") },
      {
        path: "new/:id",
        component: () => import("pages/news/NewsDetailPage.vue"),
      },
      { path: "blogs", component: () => import("pages/blog/BlogListPage.vue") },
      {
        path: "blog/:id",
        component: () => import("pages/blog/BlogDetailPage.vue"),
      },
      {
        path: "blog/:id/crud",
        component: () => import("pages/blog/BlogCrudPage.vue"),
      },
      {
        path: "meteomap",
        component: () => import("pages/MeteoAppPage.vue"),
      },
      {
        path: "simulate",
        component: () => import("pages/SimulateAppPage.vue"),
      },
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
