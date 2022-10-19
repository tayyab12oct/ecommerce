import Home from "pages/app/home";
import Products from "pages/app/products";

export const ProtectedRoutes = [
    {
        path: "/",
        children: [
            {
                path: "",
                component: <Home />
            },
            {
                path: "products",
                component: <Products />
            }
        ]
    }
]