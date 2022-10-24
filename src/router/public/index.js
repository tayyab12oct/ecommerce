import Auth from "pages/authentication";
import Forgot from "pages/authentication/forgot";
import Login from "pages/authentication/login";
import ResetPassword from "pages/authentication/reset-password";
import SignUp from "pages/authentication/signup";
import { Navigate } from "react-router-dom";

export const PublicRoutes = [
    {
        path: "/auth",
        component: <Auth />,
        children: [
            {
                path: "login",
                component: <Login />
            },
            {
                path: "signup",
                component: <SignUp />
            },
            {
                path: "forgot-password",
                component: <Forgot />
            },
            {
                path: "reset-password",
                component: <ResetPassword />
            },
        ]
    },
    {
        path: "*",
        component: <Navigate to="/auth/login" />,
    }
];