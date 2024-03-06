
import React from 'react'
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa"

  type cartItemprops={
    cartItem:Any;
  }

const CartItems = ({cartItem}: cartItemprops) => {
    
const { 
     productId,photo, name, price,quantity} = cartItem;

  return (
    <div className='cart-item'>
        <img src={photo} alt={name}></img>
        <article>
            <Link to={`/product/${productId}`}>{name}</Link>
            <span>${price}</span>
        </article>

        <div>
            <button>-</button>
            <p>{quantity}</p>
            <button>+</button>
        </div>

        <button>
            <FaTrash></FaTrash>
        </button>
    </div>
  )
}

export default CartItems