import { createBrowserRouter } from "react-router-dom";
import Add from "../pages/add";
import Home from "../pages/home";
import Wishlist from "../pages/wishlist";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>

    },
    {
        path:"/add",
        element:<Add/>

    },
    {
        path:"/wishlist",
        element:<Wishlist/>
    }
])
export default router