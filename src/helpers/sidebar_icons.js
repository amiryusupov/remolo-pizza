import HomeIcon from "../assets/images/icons/HomeIcon"
import SettingsIcon from "../assets/images/icons/Settings"
import HeartIcon from "../assets/images/icons/Heart"
import HelpIcon from "../assets/images/icons/Help"
import ProductIcon from "../assets/images/icons/ProductsIcon"
import CategoryIcon from "../assets/images/icons/CategoryIcon"

export const sidebar__icons = [
    {
        id: 1,
        image: HomeIcon(),
        text: "Inicio",
        link: "/"
    },
    {
        id: 2,
        image: HeartIcon(),
        text: "Favoritos",
        link: "/favourites"
    },
    {
        id: 3,
        image: SettingsIcon(),
        text: "Preferencias",
        link: "/settings"
    },
    {
        id: 4,
        image: HelpIcon(),
        text: "Resportar",
        link: "/help"
    },
]

export const sidebarAdminData = [
    {
        id: 1,
        image: ProductIcon(),
        text: "Products",
        link: "/products",
    },
    {
        id: 2,
        image: CategoryIcon(),
        text: "Category",
        link: "/categories",
    }
]