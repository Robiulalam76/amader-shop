import Main from "../Components/Root/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Error from "../Components/Error/Error";
import Shop from "../Components/Shop/Shop";
import Cart from "../Components/Cart/Cart";
import About from "../Components/About/About";
import { cartandProductData } from "../Loader/CartandProductData";
import CartItem from "../Components/CartItem/CartItem";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        loader: cartandProductData,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/home', element: <Home></Home> },
            { path: '/shop', element: <Shop></Shop> },
            { path: '/cart', element: <Cart></Cart> },
            { path: '/about', element: <About></About> },
            { path: '/cartItem', element: <CartItem></CartItem> },
        ]
    }
])

export default router;