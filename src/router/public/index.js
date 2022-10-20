import Auth from "pages/authentication";
import Login from "pages/authentication/login";
import { Navigate } from "react-router-dom";

export const PublicRoutes = [
    {
        path: "/auth",
        component: <Auth />,
        children: [
            {
                path: "login",
                component: <Login />
            }
        ]
    },
    {
        path: "*",
        component: <Navigate to="/auth/login" />,
    }
];