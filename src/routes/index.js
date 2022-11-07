import Home from "../pages/Home/Home";
import Intro from "../pages/Intro/Intro";
import Store from "../pages/Store/Store";
import Product from "../pages/Product/Product";

export const publicRoutes = [
    { path: "/", component: Home },
    { path: "/intro", component: Intro },
    { path: "/store", component: Store },
    { path: "/product", component: Product, layout: null },
];
