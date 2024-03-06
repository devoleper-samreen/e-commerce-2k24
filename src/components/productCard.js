import React from 'react'
import { FaPlus } from "react-icons/fa"
/*
const productProps = {
    productId, 
    photo,
    naam,
    stock,
    price,
    handler:() => {}
}*/


const ProductCard = (/*productId, 
    photo,
    naam,
    stock,
    price,
    handler*/) => {
  return (
   /* <div className='productcard'>
        <img src={`${server}/${photo}`} alt={naam}></img>
        <p>{naam}</p>
    <span>{price} hfgkkjn</span>
    <div>
        <button onClick={() => handler()}>
            <FaPlus></FaPlus>
        </button>
    </div>*/
    <div className='productcard'>
        <img></img>
        <p>macbook</p>
        <span>50000</span>
    <div>
        <button>
            <FaPlus></FaPlus>
        </button>
    </div>

    </div>
    
  )
}

export default ProductCard