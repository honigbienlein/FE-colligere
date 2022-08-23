import React from 'react'
import './Sign.css'

export default function Login() {
  return (
    <>
        <div className="form">
            <img src='images/colligere-logo.png' alt="logo"/>
            <div className="top">
                <div className="sign-area">
                    <a className="signIN active"  href="#signin">Sign In</a>
                    <a className="signUP" href="#signup">Sign Up</a>
                </div>
                <div className="input-area">
                        <input placeholder='Username' name='username' className='Username'/>
                        <input placeholder='Password' name='password' className='Password'/>
                        <button className="buttonSignIN">Sign In</button>
                </div>
            </div>
            <p class="forgot"><a href="/">Forgot Password?</a></p>
        </div>
    </>
  )
}