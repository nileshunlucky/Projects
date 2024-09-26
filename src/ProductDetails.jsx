import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment , incrementByAmount } from './counter/counter'

const ProductDetails = () => {
    const dispatch = useDispatch()
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <div className="card bg-zinc-100 text-black rounded-xl my-[30px] px-[20px] pt-[20px] pb-[50px]">
                <div className="img">
                    <img className='h-[300px] rounded-t-xl' src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K815.jpg?ver=53.41" alt="burger" />
                </div>
                <div className="title">
                    <h1 className='text-[16px] font-semibold'>Caribbean Spicy Zinger Burger</h1>
                </div>
                <div className="nonVeg">
                    <h1>🔺Non veg</h1>
                </div>
                <div className="price">
                    <h1>₹219.05</h1>
                </div>
                <div className="description">
                    <p>Relish the Caribbean spicy zinger</p>
                </div>
                <div className="cart pt-[50px]">
                    <button onClick={() => dispatch(increment())} className='bg-red-600 text-white p-2 px-6 rounded-full flex justify-between items-center gap-2'>
                        Add to cart
                        <span><img src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg" alt="cart-icon" /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
