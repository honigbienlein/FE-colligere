import React from 'react'
import { NavLink, Outlet, Routes, Route } from 'react-router-dom'
import '../css/sign.css'
import Signin from './Signin.js'
import Signup from './Signup.js'
import Card from './Card.js'
import Collections  from './Collections.js'

export default function Sign() {

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