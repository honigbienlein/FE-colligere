import React from 'react'
import '../css/signin.css'

export default function Signin() {
  return (
    <>
      <div className="signin">
        <input placeholder='Username' name='username' className='input'/>
        <input placeholder='Password' name='password' className='input'/>
        <button className="buttonSignIN">Sign In</button>
      </div>
        <p className="forgot"><a href="/">Forgot Password?</a></p>
    </>
  )
}