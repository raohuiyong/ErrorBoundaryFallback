import { lazy } from "ice";
import BasicLayout from "@/layouts/BasicLayout";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
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
