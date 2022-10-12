
import { BlogSideBar, LayoutWithSideBar, ProductSideBar } from "../Components"
import {ShopSideBar} from "../Components/"
import EmptyLayout from "../Components/Layout/EmptyLayout";
import { Home, Cart, Shop, BlogDetail ,ProductDetail, Checkout, AboutUs, Contactus, Auth } from "../Pages"
import Blog from "../Pages/Blog";


export const routes = [
    {
        path: "/",
        element: Home,
        layout: null,
        layoutProps: {
            offBreadcrumb: true,
        }
    },
    {
        path: "/cart",
        element: Cart,
        layout: null,
        layoutProps: {
            SideBarElement: BlogSideBar,
            offPolicyAndBrand: true
        }
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
        path: "/ourblog",
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
    },
    {
        path: "/contactus", 
        element: Contactus,
        layout: null,
        layoutProps: {
            offPolicyAndBrand: true
        }
    }, 
    {
        path: "/login", 
        element: Auth,
        layout: EmptyLayout
    },
    {
        path: "/register", 
        element: Auth,
        layout: EmptyLayout
    }
]