import React from 'react';

const Product = ({ product, handleAddToCart }) => {
    const { id, category, name, picture, price } = product
    return (
        <div>
            <div className="md:w-80 p-6 rounded-md shadow-md bg-gray-900 text-gray-50 my-10 mx-auto">
                <img src={picture} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
                <div className="mt-6 mb-2">
                    <span className="block text-xs font-medium tracking-widest uppercase text-cyan-500">New</span>
                    <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
                </div>
                <p className="text-gray-100"><span className='text-gray-400'>{category}</span></p>
                <h1 className='font-bold text-pink-600 text-3xl'>${price}</h1>
                <div>
                    <button onClick={() => handleAddToCart(product)} className='font-bold mt-5 py-3 px-7 rounded-lg bg-lime-600 hover:bg-lime-700'>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;