import React, { useContext } from 'react'
import bin from '../assets/images/icon-delete.svg'
import { CartContext } from '../contexts/CartContext'

function Cart() {
    const {cart, removeFromCart} = useContext(CartContext)
  return (
    <div className='absolute z-10 flex flex-col w-[25rem]  rounded-[20px] bg-white top-[4rem] right-[5rem] shadow-2xl sm:top-[20%] sm:right-[.75rem] sm:w-[22rem] md:right-[.25rem] md:w-[23.5rem] '>
        <h1 className='pl-[1.5rem] py-[1rem] font-bold'>Cart</h1>
        <hr />
        {cart.length > 0 ?
        cart.map((item) => (
        <div key={item.id} className='flex flex-row justify-between items-center py-[1rem] px-[1.5rem]'>
        <img src={item.image} alt="imageProduct" className='w-[4rem] h-[4rem] rounded-[10px]' />
        <p className='text-DarkGrayishBlue'>{item.name}<br /><span className='text-DarkGrayishBlue'>${item.price.toFixed(2)}</span><span className='text-DarkGrayishBlue'> x {item.amount}</span><span className='text-VeryDarkBlue font-[500]'> ${(item.price * item.amount).toFixed(2)}</span></p>
        <img src={bin} alt="delete" onClick={() => removeFromCart(item.id)} className='cursor-pointer' />
        </div>
        )) :
        <p className='text-center text-DarkGrayishBlue py-[1rem]'>Your cart is empty.</p>
    }

        <button className='bg-Orange font-[600] py-[.8rem] mx-[1.5rem] rounded-[10px] mb-[1.5rem]'>Checkout</button>
        


    </div>
  )
}

export default Cart