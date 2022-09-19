import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import '../css/signin.css'
import { HEROKUURL } from '../environmentVariables'

export default function Signin() {
	const usernameRef = useRef()
	const passwordRef = useRef()

	const navigate = useNavigate()

	function login(event) {
		event.preventDefault()
		axios.get(`${HEROKUURL}/users/${usernameRef.current.value}`).then(async data => {
			if (usernameRef.current.value === data.data.username) {
				navigate(`/users/${data.data.id_user}/collections`)
			} else {
				;<dialog>
					<p>Your password is wrong</p>
				</dialog>
			}
		})
	}
	return (
		<>
			<form onSubmit={login}>
				<div className='signIn'>
					<input
						ref={usernameRef}
						placeholder='Username'
						name='username'
						type='text'
						className='input'
						required
					/>
					<input
						ref={passwordRef}
						placeholder='Password'
						name='password'
						type='password'
						className='input'
						required
					/>
					<button type='submit' className='buttonSignIn'>
						Sign In
					</button>
				</div>
				{/* <p className="forgot"><a href="/">Forgot Password?</a></p> */}
			</form>
		</>
	)
}
