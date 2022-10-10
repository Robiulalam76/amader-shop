import React, { useContext, useState } from 'react';
import Product from '../Product/Product';
import { CartContext, ProductContext } from '../Root/Main';
import { addToDB } from '../Utilities/FakeDb';

const Shop = () => {
    const products = useContext(ProductContext)
    const [cart, setCart] = useContext(CartContext)
    // console.log(cart)

    const handleAddToCart = product => {
        let newCart = []
        const exists = cart.find(
            existingProduct => existingProduct.id === product.id
        )
        if (!exists) {
            product.quantity = 1
            newCart = [...cart, product]
        } else {
            const rest = cart.filter(
                existingProduct => existingProduct.id !== product.id
            )
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDB(product.id)
    }

    return (
        <div className='bg-lime-50'>
            <div className=' w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Shop;