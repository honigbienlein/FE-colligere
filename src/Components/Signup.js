import axios from 'axios'
import React, { useRef } from 'react'
import { useNavigate } from 'react-router'
import '../css/signUp.css'
import { HEROKUURL } from '../environmentVariables'

export default function SignUp() {
	const usernameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

	const navigate = useNavigate()

	async function signUp(event) {
		event.preventDefault()
		const user = await axios.post(`${HEROKUURL}/users`, {
			username: usernameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value,
		})
		console.log(user)
		navigate(`/users/${user.data.id_user}/collections`)
	}
	return (
		<form onSubmit={signUp}>
			<div className='signUp'>
				<input
					ref={usernameRef}
					placeholder='Username'
					name='username'
					type='text'
					className='input'
					required
				/>
				<input
					ref={emailRef}
					placeholder='E-Mail'
					name='email'
					type='email'
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
				<button type='submit' className='buttonSignUp'>
					Sign Up
				</button>
			</div>
		</form>
	)
}
