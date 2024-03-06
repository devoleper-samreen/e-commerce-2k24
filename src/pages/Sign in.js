import React from 'react'
import "../styles/signin.css"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import toast from 'react-hot-toast'

const Signin = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      gender: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
      const { name, value } = e.target;

      setFormData({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData.name, formData.email,formData.password
        ,formData.gender)

      try {
        const response = await axios.post('http://localhost:4000/api/v1/user/register', formData);

        console.log(response.data)
      } catch (error) {
        console.log("error during registration", error)
        toast.error('Registration Failed. Please try again')
      }

      setFormData({
        name: '',
        email: '',
        password: '',
        gender: ''
      })

      navigate('/login')
      toast.success('Registration Successfully !')
    }

  return (
    <div className='signin'>
        <main>
          <form onSubmit={handleSubmit}>
            <h1 className='heading'>sign in </h1>
          <div>

         <input required placeholder='Enter your name' type='text' name='name' value={formData.name} onChange={handleChange}/>

         <input required placeholder='Enter your Email' type='email' name='email' value={formData.email} onChange={handleChange}/>

         <input required placeholder='Enter your password' type='password' name='password' value={formData.password} onChange={handleChange}/>

         </div>
           <div className='gen-slec'>

      <select value={formData.gender}  name='gender'
                onChange={handleChange}>
            <option value="">Select Gender</option>   
            <option value="male">Male</option> 
            <option value="female">Female</option>                    
     </select>
        </div>

            <div>
                <button type='submit'>
                   <span>Sign in</span>
                </button>
            </div>
                </form>
        </main>
    </div>
  )
}

export default Signin