import React from 'react'
import '../css/signup.css'

export default function Signup() {
  return (
    <div className="signup">
      <input placeholder='Username' name='username' className='input'/>
      <input placeholder='E-Mail' name='email' className='input'/>
      <input placeholder='Password' name='password' className='input'/>
      <button className="buttonSignUP">Sign Up</button>
    </div>
  )
}