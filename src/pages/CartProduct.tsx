import React from 'react'
import Product from '../models/Product'

type CartProductProps = {
    product : Product;
}

const CartProduct:React.FC<CartProductProps> = ({product}) => {
    return (
        <div className="w-3/4 mx-auto bg-white border-2 border-slate-200 overflow-hidden md:max-w-2xl rounded-md p-2 flex">
            <div className="flex-shrink-0">
                <img
                    className="h-24 w-32 object-contain rounded-lg"
                    src={product.image}
                    alt="Product Look"
                />
            </div>
            <div className="ml-4 flex flex-col justify-around">
               
                    <h1 className="text-xl font-bold line-clamp-1">{product.title}</h1>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-700">Price: <span className='text-green-600'>₹{product.price.toFixed(2)}</span></span>
                    </div>
                
            </div>
        </div>
    )
}

export default CartProduct