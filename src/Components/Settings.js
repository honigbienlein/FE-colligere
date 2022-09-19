import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import '../css/settings.css'

export default function Settings() {
	const { userId } = useParams()
	return (
		<div className='settings'>
			<h1>Your Settings</h1>
			<div className='changeable'>
				<div className='settingsRow'>
					<div className='username'>
						<label>Username</label>
					</div>
					<div className='pen'>
						<NavLink to='/settings/username'>
							<img src='/images/pen.svg' alt='pen' />
						</NavLink>
					</div>
				</div>
				<div className='settingsRow'>
					<div className='email'>
						<label>E-Mail</label>
					</div>
					<div className='pen'>
						<NavLink to='/settings/username'>
							<img src='/images/pen.svg' alt='pen' />
						</NavLink>
					</div>
				</div>
				<div className='settingsRow'>
					<div className='password'>
						<label>Password</label>
					</div>
					<div className='pen'>
						<NavLink to='/settings/username'>
							<img src='/images/pen.svg' alt='pen' />
						</NavLink>
					</div>
				</div>
				<div className='settingsRow'>
					<div className='deleteAccount'>
						<label>Delete account</label>
					</div>
					<div className='pen'>
						<NavLink to='/settings/username'>
							<img src='/images/pen.svg' alt='pen' />
						</NavLink>
					</div>
				</div>

				{/*          <div className="FAQ">
            <label><NavLink to="/faq">FAQ</NavLink></label>
        </div>  */}
			</div>
			<div className='goBack'>
				<NavLink to={`/users/${userId}/collections`}>
					<img src='/images/goback.svg' alt='goBack' width='16' />
				</NavLink>
			</div>
		</div>
	)
}
