import React, { useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import "../styles/shipping.css"


{/*const navigate = useNavigate()*/}

const Shipping = () => {

    const [shippingInfo, setshippingInfo] = useState(
        {
            address: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
        }
    );

    const changeHandler = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setshippingInfo( (prev) => (
             {
                ...prev, [e.target.name]:e.target.value
             }
        )

        )
    }
  return (
    <div className='shipping'>
        <button className='back-btn'>
            {/*onClick={ () => navigate("/cart)*/}
            <BiArrowBack></BiArrowBack>
        </button>

        <form>
            <h1>Shipping Address</h1>

            <input type='text' placeholder='Address' name='address' value={shippingInfo.address}
             onChange={changeHandler} required>
             </input>

             <input type='text' placeholder='City' name='city' value={shippingInfo.city}
             onChange={changeHandler} required>
             </input>

             <input type='text' placeholder='State' name='state' value={shippingInfo.state}
             onChange={changeHandler} required>
             </input>

             <select name='country' value={shippingInfo.country} onChange={changeHandler} required>
                <option>Choose Country</option>
                <option value="india">India</option>
             </select>

             <input type='number' placeholder='Pin Code' name='pincode' value={shippingInfo.pincode}
             onChange={changeHandler} required>
             </input>

             <button type='submit'>Pay Now</button>
        </form>
    </div>
  )
}

export default Shipping