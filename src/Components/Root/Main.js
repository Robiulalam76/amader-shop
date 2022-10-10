import React, { createContext, useState } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
export const ProductContext = createContext([])
export const CartContext = createContext([])

const Main = () => {
    const { products, initialCart } = useLoaderData()
    console.log(initialCart)
    const [cart, setCart] = useState(initialCart)
    return (
        <ProductContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </CartContext.Provider>
        </ProductContext.Provider>
    );
};

export default Main;