import CategoriesPage from "../pages/categories";
import Favourites from "../pages/favourite";
import Help from "../pages/help";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/login";
import ProductsPage from "../pages/products";
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
    component: Settings,
  },
  {
    id: 4,
    path: "/help",
    component: Help,
  },
  {
    id: 5,
    path: "/login",
    component: LoginPage,
  }
];

export const adminRoutes = [
  {
    id: 1,
    path: "/products",
    component: ProductsPage
  },
  {
    id: 2,
    path: "/categories",
    component: CategoriesPage
  },

]