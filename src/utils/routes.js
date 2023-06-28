import Favourites from "../pages/favourite";
import Help from "../pages/help";
import HomePage from "../pages/home/index";
import Settings from "../pages/settings/index";

export const routes = [
  {
    id: 1,
    path: "/",
    component: HomePage,
  },
  {
    id: 2,
    path: "/favourites",
    component: Favourites,
  },
  {
    id: 3,
    path: "/settings",
    component: Settings
  },
  {
    id: 4,
    path: "/help",
    component: Help
  }
];
