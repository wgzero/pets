export const listRouter = [{
  id: 1,
  path: "/collocation",
  name: "collocation",
  component: () => import("../views/collocation/index.vue")
}, {
  id: 2,
  path: "/food",
  name: "food",
  component: () => import("../views/food/index.vue")
},{
  id: 3,
  path: "/recommended",
  name: "recommended",
  component: () => import("../views/recommended/index.vue")
},{
  id: 4,
  path: "/habits",
  name: "habits",
  component: () => import("../views/habits/index.vue")
},{
  id: 5,
  path: "/type",
  name: "type",
  component: () => import("../views/habits/index.vue")
},{
  id: 6,
  path: "/toy",
  name: "toy",
  component: () => import("../views/toy/index.vue")
},{
  id: 7,
  path: "/petStore",
  name: "petStore",
  component: () => import("../views/petStore/index.vue")
},{
  id: 8,
  path: "/sign",
  name: "sign",
  component: () => import("../views/sign/index.vue")
},{
  id: 9,
  path: "/welfare",
  name: "welfare",
  component: () => import("../views/welfare/index.vue")
},{
  id: 10,
  path: "/community",
  name: "community",
  component: () => import("../views/community/index.vue")
},]