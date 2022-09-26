import { LayoutWithSideBar } from "../Components"
import { Home, Cart, Shop } from "../Pages"


export const routes = [
    {
        path: "/",
        element: Home,
        layout: null
    },
    {
        path: "/cart",
        element: Cart,
        layout: null
    },
    {
        path: "/shop",
        element: Shop,
        layout: LayoutWithSideBar
    }
]