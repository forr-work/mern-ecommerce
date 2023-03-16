import React from 'react'
import "./cart.css"
const Cart = () => {
    return (

        <div className="cartItems">
            <div className="pImg">
                <img src="https://m.media-amazon.com/images/I/61JYu4FWsJL._AC_AA180_.jpg" alt="" />
            </div>
            <div className="pInfo">
                <div className="pTitle">ASIAN Men's Delta-21 Running Shoes for Men I Sport Shoes…</div>
                <div className="pColor">color:Grey</div>
                <div className="pSize">size: 10 UK</div>
            </div>
            <div className="pQuantity">
                <span className="dec">-</span>
                <span className="cartValue">5</span>
                <span className="inc">-</span>
            </div>
            <div className="pPrice">$689.00</div>

        </div>
    )
}

export default Cart