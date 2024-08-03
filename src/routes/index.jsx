import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import App from "../App";
import Register from "../pages/auth/Register";
import UserDashboard from "../pages/dashboard/user-dashboard/UserDashboard";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/dashboard",
            element: <UserDashboard />
        },
    ]
)