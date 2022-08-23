import React from 'react'
import './Signin.css'

export default function Login() {
  return (
    <>
      <div class="signin">
        <input placeholder='Username' name='username' className='Username'/>
        <input placeholder='Password' name='password' className='Password'/>
        <button className="buttonSignIN">Sign In</button>
      </div>
      <div class="forgot">
        <p class="forgot"><a href="/">Forgot Password?</a></p>
      </div>
    </>
  )
}