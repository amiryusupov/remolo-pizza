import HomePage from "../pages/home/index";
import Settings from "../pages/settings/index";

export const routes = [
  {
    id: 1,
    path: "/",
    component: HomePage(),
  },
  {
    id: 2,
    path: "/settings",
    component: Settings()
  }
];
