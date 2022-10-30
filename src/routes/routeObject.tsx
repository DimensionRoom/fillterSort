import { Outlet, Navigate } from "react-router-dom";
import { IRoutes } from "./route.interface";

//page
import {Home} from "../pages/home";
import { Register } from "../pages/register";
import { Login } from "../pages/login";
import {DashBoard} from "../pages/dashboard";

export const routes: IRoutes[] = [
    {
        key: "OUTLET",
        name: "Menu",
        path: "",
        element: <Outlet />,
        children: [
            {
                key: "HOME",
                name: "START PAGE",
                path: "",
                element: <Home/>
            },
            {
                key: "REGISTER",
                name: "REGISTER",
                path: "/signup",
                element: <Register/>
            },
            {
                key: "LOGIN",
                name: "LOGIN",
                path: "/login",
                element: <Login/>
            },
            {
                key: "DASHBOARD",
                name: "DASHBOARD",
                path: "/dashboard",
                element: <DashBoard/>
            }
        ]
    }
];
