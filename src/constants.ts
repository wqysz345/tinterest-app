import {lazy} from "react";

export const API_URL = "https://api.github.com/search/repositories?q=created:>2021-08-01&sort=stars&order=desc";

export const ROUTES = [
    {
        path: "/",
        name: 'Главная',
        component: lazy(() => import("./pages/Home/Home.tsx")),
        show_in_nav: true
    },
    {
        path: "/login",
        name: 'Войти',
        component: lazy(() => import("./pages/Login/Login.tsx")),
        show_in_nav: false
    },
    {
        name: "Регистрация", // "Register
        path: "/register",
        component: lazy(() => import("./pages/Register/Register.tsx")),
        show_in_nav: false
    },
    {
        name: "Люди", // "Peoples"
        path: "/peoples",
        component: lazy(() => import("./pages/Peoples/Peoples.tsx")),
        show_in_nav: true
    },
]