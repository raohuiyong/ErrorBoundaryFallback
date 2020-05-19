import { lazy } from "ice";
import BasicLayout from "@/layouts/BasicLayout";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"), false);
const Notfound = lazy(() => import("@/pages/NotFound"));

export default [
  {
    path: "/",
    component: BasicLayout,
    children: [
      {
        path: "/dashboard",
        exact: true,
        component: Dashboard
      },
      {
        path: "/about",
        exact: true,
        component: About
      },
      {
        path: "/home",
        exact: true,
        component: Home
      },
      {
        path: "/",
        exact: true,
        redirect: "/dashboard"
      },
      {
        path: "*",
        component: Notfound
      }
    ]
  }
];
