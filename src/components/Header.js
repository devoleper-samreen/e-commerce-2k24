import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaSearch, FaShoppingBag, FaSignInAlt, FaSignOutAlt, FaUser} from "react-icons/fa";

const user = {
                id:"",
                role: ""
            }

const Header = () => {
    const [isOpen, setisOpen] = useState(false)

    const  logOutHandler = () => {
        setisOpen(false);
    }

    const orderHandler = () => {
        setisOpen(false);
    }

    const adminHandler = () => {
        setisOpen(false)
    }

  return (
    <nav className='header'>
        <Link to={"/"} onClick={() => setisOpen(false)}>Home</Link>
        <Link to={"/search"} onClick={() => setisOpen(false)} ><FaSearch/></Link>
        <Link to={"/cart"} onClick={() => setisOpen(false)} ><FaShoppingBag/></Link>
        
        <Link to={'/register'} onClick={() => setisOpen(false)} >sign in</Link>
           

 {
    user.role === "admin" ? (
        <>
         <button onClick={() => setisOpen((prev) => !prev)}>
            <FaUser></FaUser>
        </button>
    
          <dialog open={isOpen}>
             <div>
                {user.role === "admin" && (
                    <Link to={"/admin/dashboard"} onClick={adminHandler}>Admin</Link>
                )}

                 <Link to={"/orders"} onClick={orderHandler}>orders</Link>

             <button onClick={logOutHandler}>
                 <FaSignOutAlt></FaSignOutAlt>
             </button>
             </div>
        </dialog>

     </>
            ):(<Link to={"/login"}><FaSignInAlt/></Link>)
                }
    </nav>
  )
}

export default Header