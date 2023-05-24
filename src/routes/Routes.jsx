import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import Order from "../pages/Order/Order";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/menu",
                element: <OurMenu />
            },
            {
                path: "/order",
                element: <Order />
            },
            {
                path: "/order/:category",
                element: <Order />
            }
        ],
    }
]);