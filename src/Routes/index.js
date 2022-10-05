
import { BlogSideBar, LayoutWithSideBar, ProductSideBar } from "../Components"
import {ShopSideBar} from "../Components/"
import { Home, Cart, Shop, BlogDetail ,ProductDetail, Checkout, AboutUs } from "../Pages"
import Blog from "../Pages/Blog";


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
            SideBarElement: ShopSideBar
        }
    },
    {
        path: "/shop/:id",
        element: Shop,
        layout: LayoutWithSideBar,
        layoutProps: {
            SideBarElement: ShopSideBar,
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
    },
    {
        path: "/blog",
        element: Blog,
        layout: LayoutWithSideBar,
        layoutProps: {
            SideBarElement: BlogSideBar,
            offPolicyAndBrand: true
        }
    },
    {
        path: "/blog/:id",
        element: BlogDetail,
        layout: LayoutWithSideBar ,
        layoutProps: {
            SideBarElement: BlogSideBar,
            offPolicyAndBrand: true
        } 
    },
    {
        path: "/checkout",
        element: Checkout,
        layout: null,
        layoutProps: {
            offPolicyAndBrand: true
        }
    },
    {
        path: "/aboutus", 
        element: AboutUs,
        layout: null,
        layoutProps: {
            offPolicyAndBrand: true
        }
    }
]