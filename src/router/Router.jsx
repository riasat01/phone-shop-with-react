import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Favourites from "../pages/favourites/Favourites";
import Login from "../pages/login/Login";

const myRouter = createBrowserRouter([
    {
        path: `/`,
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: `/`,
                element:<Home></Home>,
                loader: () => fetch(`phones.json`)
            },
            {
                path: `/favourites`,
                element:<Favourites></Favourites>
            },
            {
                path: `/login`,
                element:<Login></Login>
            }
        ]
    }
]) 

export default myRouter;