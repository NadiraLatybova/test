import {createBrowserRouter} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Products from "../pages/Products/Products";
import Cart from "../pages/Cart/Cart";
import Buy from "../pages/Buy/Buy";
import OneProduct from "../pages/OneProduct/OneProduct";
import Favorite from "../pages/Favorite/Favorite";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../pages/Main/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Root/>,
        children:[
            {
                path:'',
                element:<Main/>
            },
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'products',
                element:<Products/>
            },
            {
                path:'cart',
                element:<Cart/>
            },
            {
                path:'buy',
                element:<Buy/>
            },
            {
                path:'Product/:id',
                element:<OneProduct/>
            },
            {
                path:'favorite',
                element:<Favorite/>
            },
            {
                path:'*',
                element:<NotFound/>
            }



        ]
    }

])
export default router