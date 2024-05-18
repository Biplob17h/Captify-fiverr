/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Faq from "../Pages/Faq/Faq";

export const routes = createBrowserRouter([
    {
        path : "/",
        element : <LandingPage></LandingPage>
    },
    {
        path : "/login",
        element : <Login></Login>
    },
    {
        path : "/home",
        element : <Home></Home>
    }
])