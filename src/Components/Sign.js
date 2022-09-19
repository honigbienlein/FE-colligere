import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import '../css/sign.css'

export default function Sign() {
	return (
		<div className='form'>
			<img src='images/colligere-logo.png' alt='logo' />
			<div className='signArea'>
				<NavLink to='/'>Sign In</NavLink>
				<NavLink to='/signup'>Sign Up</NavLink>
			</div>
			<Outlet></Outlet>
		</div>
	)
}
