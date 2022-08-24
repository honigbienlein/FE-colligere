import React from 'react'
import './Signin.css'

export default function Login() {
  return (
    <>
      <div class="signin">
        <input placeholder='Username' name='username' className='input'/>
        <input placeholder='Password' name='password' className='input'/>
        <button className="buttonSignIN">Sign In</button>
      </div>
        <p class="forgot"><a href="/">Forgot Password?</a></p>
    </>
  )
}