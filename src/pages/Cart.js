import React, { useEffect, useState } from 'react'
import { VscError } from "react-icons/vsc"
import CartItems from '../components/CartItems';
import "../styles/cart.css"
import { Link } from 'react-router-dom';

const cartItems = [
  {
    productId: "abcdefg",
    photo: "12345",
    name: "macbook",
    price: 3000,
    quantity: 4,
    stock: 10
  }
];
const subtotal = 4000;
const tax = Math.round(subtotal * .18);
const shippingcharges = 200;
const total = subtotal + tax + shippingcharges;
const discount = 400;

const Cart = () => {

  const[coupenCode, setcoupenCode] = useState("");
  const [isValidCoupenCode, setisValidCoupenCode] = useState(false);

  useEffect(
    () => {
      const timeoutid= setTimeout(
        () => {
          if(Math.random()>.5) setisValidCoupenCode(true);
          else setisValidCoupenCode(false)
        },
      1000);
      return () => {
        clearTimeout(timeoutid);
        setisValidCoupenCode(false)
      }
    },
    [coupenCode]
  )
  return (
    <div className='cart'>
      <main>
        { cartItems.length > 0 ? (
           cartItems.map((i, idx) => <CartItems key={idx} cartItem={i}></CartItems>)
        ):(
          <h1>No Items Added</h1>
        )} 

        { cartItems.length > 0 ? (
           cartItems.map((i, idx) => <CartItems key={idx} cartItem={i}></CartItems>)
        ):(
          <h1>No Items Added</h1>
        )} 

        { cartItems.length > 0 ? (
           cartItems.map((i, idx) => <CartItems key={idx} cartItem={i}></CartItems>)
        ):(
          <h1>No Items Added</h1>
        )}    
      </main>
      <aside>
        <p>Subtotal:  ${subtotal}</p>
        <p>Shipping Charges: ${shippingcharges}</p>
        <p>Tax: ${tax}</p>
        <p>
          Discount - <em>${discount} </em>
        </p>
        <p>
          <b>Total: ${total}</b>
        </p>

        <input type='tax' placeholder='Enter coupen code' value={coupenCode} onChange={(e) => {setcoupenCode(e.target.value)}}></input>

{
  coupenCode && 
  (isValidCoupenCode? (
    <span className='acc-coupen'>
      ${discount} off using the 
      <code>{coupenCode}</code>
    </span>
  ):(
    <span className='invalid-error'>
      Invalid Coupen <VscError></VscError>
    </span>
  )
  )}
{
  cartItems.length> 0 && 
  <Link to={"/shipping"}>Checkout</Link>   
} 

      </aside>
    </div>
  )
}

export default Cart