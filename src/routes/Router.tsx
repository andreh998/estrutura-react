import { useRoutes } from "react-router-dom";
import Layout from "../layout";
import PrivateRoute from "./PrivateRoute";
import { lazy } from "react";

export const Home = lazy(() => import("../pages/Home"));
export const Page1 = lazy(() => import("../pages/Page1"));
export const Page2 = lazy(() => import("../pages/Page2"));

export default function Router() {
  const routes = useRoutes([
    {
      element: <PrivateRoute element={Layout} />,
      children: [
        { element: <Home />, path: "/"},
        { element: <Page1 />, path: "/page1" },
        { element: <Page2 />, path: "/page2" }
      ]
    }
  ])
  
  return routes
}