import { LayoutWithSideBar, ProductSideBar } from "../Components"
import {ShopSideBar} from "../Components/"
import { Home, Cart, Shop } from "../Pages"
import ProductDetail from './../Pages/ProductDetail';


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
        layout: LayoutWithSideBar,
        layoutProps: {
            positionSideBar:'left', 
            SideBarElement: ShopSideBar
        }
    },
    {
        path: "/product/:id",
        element: ProductDetail,
        layout: LayoutWithSideBar,
        layoutProps: {
            positionSideBar:'right', 
            SideBarElement: ProductSideBar
        }
    }
]