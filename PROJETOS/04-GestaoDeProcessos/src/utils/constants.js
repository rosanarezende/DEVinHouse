import Home from "../pages/Home";
import SearchProcess from "../pages/SearchProcess";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/search",
    component: SearchProcess,
    exact: true,
  },
];
