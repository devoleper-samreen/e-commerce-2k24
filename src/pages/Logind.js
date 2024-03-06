import React, { useState } from 'react'
import "../styles/login.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
//import { FcGoogle } from "react-icons/fc"

const Logind = () => {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = async () => {
        try {
            const res = await axios.post('http://localhost:4000/api/v1/user/login', { email, password} )
            console.log(res.data)
            setemail('')
            setPassword('')
            toast.success('Login Successfully !')
            navigate('/')
            
        } catch (error) {
            console.log("error during login", error)
            toast.error('Login Failed. Please try again')
        }
    }

  return (
    <div className='login'>
        <main>
            <h1 className='heading'>Login</h1>

            <div className='gen-slec'>
                <label>E-mail</label>
                <input required type='text'  placeholder='Enter your Email' value={email} onChange={(e) => setemail(e.target.value)}></input>
            </div>

            <div className='date-input'>
                <label>Password</label>
                <input required placeholder='Enter password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>

            <div className='btn-div'>
                <button onClick={handleLogin}>
                    LOGIN
                </button>
            </div>

          {/*  <div>
                <p>Already Signed In Once</p>
                <button>
                    <FcGoogle/> <span>Sign in with Google</span>
                </button>
  </div>*/}
        </main>
    </div>
  )
}

export default Logind

