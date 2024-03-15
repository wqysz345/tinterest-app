import {lazy} from "react";

export const API_URL = "https://api.github.com/search/repositories?q=created:>2021-08-01&sort=stars&order=desc";

export const ROUTES = [
    {
        path: "/",
        component: lazy(() => import("./pages/Home/Home.tsx")),
    },
    {
        path: "/login",
        component: lazy(() => import("./pages/Login/Login.tsx")),
    },
    {
        path: "/register",
        component: lazy(() => import("./pages/Register/Register.tsx")),
    },
]