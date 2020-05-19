const headerMenuConfig = [];

const asideMenuConfig = [
  {
    name: "数据页面",
    path: "/",
    icon: "chart-pie",
    children: [
      {
        name: "home",
        path: "/home"
      },
      {
        name: "dashboard",
        path: "/dashboard"
      },
      {
        name: "about",
        path: "/about"
      }
    ]
  }
];

export { headerMenuConfig, asideMenuConfig };
