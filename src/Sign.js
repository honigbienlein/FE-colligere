import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import './Sign.css'
import Signin from './Signin.js'

export default function Login() {

  return (
    <div className="form">
      <img src='images/colligere-logo.png' alt="logo"/>
      <div className="sign-area">
        <NavLink to="/">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  )
}