import React, { useState,useContext } from 'react'
import hamburger from '../assets/images/icon-menu.svg'
import logo from '../assets/images/logo.svg'
import cartImage from '../assets/images/icon-cart.svg'
import close from '../assets/images/icon-close.svg'
import avatar from '../assets/images/image-avatar.png'
import Cart from './Cart'
import { CartContext } from '../contexts/CartContext'

function Header() {
  const [isCart, setIsCart] = useState (false)
  const [isDropDown, setIsDropDown] = useState(false);
  const {cart} = useContext(CartContext)
  const handleClick = () => {
    setIsCart(!isCart)
  }
  const handleMenu = () => {
    setIsDropDown(!isDropDown)
  }
  const totalItemsInCart = cart.reduce((total, item) => total + item.amount, 0);
  return (
    <header className='flex flex-row justify-between items-center  mx-[5rem] border-b-[1px] border-solid border-LightGrayishBlue md:mx-[1.5rem]'>
      {isDropDown && <div className="overlay absolute z-20 top-0 left-0 w-screen h-[200%] bg-black opacity-80 overflow-hidden"></div>}
      <nav className='flex flex-row items-center relative gap-[2rem] '>
        <img src={hamburger} alt="hamburger" className='hidden py-[2rem]  md:inline cursor-pointer' onClick={handleMenu} />
      <img src={logo} alt="logo" />
      <ul className='menu-desktop flex flex-row gap-[2rem] text-GrayishBlue py-[2rem] md:hidden'>
        <li><a className='py-[2rem] m-0 border-b-[2px] border-solid  border-White hover:border-Orange' href="#">Collections</a></li>
        <li><a className='py-[2rem] m-0 border-b-[2px] border-solid  border-White hover:border-Orange' href="#">Men</a></li>
        <li><a className='py-[2rem] m-0 border-b-[2px] border-solid  border-White hover:border-Orange' href="#">Women</a></li>
        <li><a className='py-[2rem] m-0 border-b-[2px] border-solid  border-White hover:border-Orange' href="#">About</a></li>
        <li><a className='py-[2rem] m-0 border-b-[2px] border-solid  border-White hover:border-Orange' href="#">Contact</a></li>
      </ul>
      { isDropDown &&
      <ul className='menu-mobile hidden absolute z-30 top-0  left-[-1.5rem] bg-White flex-col items-start gap-[1.5rem] text-VeryDarkBlue font-[700] py-[2rem] px-[1rem] w-[15rem] h-screen md:flex'>
        <img src={close} alt="close" className='cursor-pointer' onClick={handleMenu}/>
        <li><a  href="#">Collections</a></li>
        <li><a  href="#">Men</a></li>
        <li><a  href="#">Women</a></li>
        <li><a  href="#">About</a></li>
        <li><a  href="#">Contact</a></li>
      </ul>
      
}
      </nav>
      <div className='flex flex-row items-center gap-[2rem] '
      >
        <div className='relative'>
        <img className="w-[1.25rem] h-[1.25rem] cursor-pointer contrast-[300]" src={cartImage} alt="cart" onClick={handleClick} />
        {totalItemsInCart > 0 && (
            <span className="absolute top-[-.25rem] right-[-.75rem] bg-Orange text-white text-[.5rem] rounded-[42.5%] px-[.45rem]">
              {totalItemsInCart}
            </span>
          )}
        </div>

        <img className="w-[2.5rem] cursor-pointer border-solid rounded-[50%] hover:outline hover:outline-2 hover:outline-Orange " src={avatar} alt="avatar" />
      

      </div>
      {isCart && <Cart />}
    </header>
  )
}

export default Header