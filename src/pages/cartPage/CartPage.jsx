import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import "./cartPage.css"
import Cart from '../../component/cart/Cart'
const CartPage = () => {
  return (
    <div className='cart'>
      <Navbar />
      <div className='cartContainer'>
        <h1>Shopping Cart </h1>
       <Cart/>
       <Cart/>
       <Cart/>
      </div>
      <button className="buyBtn">Buy Now</button>
    </div>
  )
}

export default CartPage;