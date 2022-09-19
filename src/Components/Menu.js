import React, { useEffect, useRef, useState } from 'react'
import '../css/menu.css'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import Scan from './Scan'
import axios from 'axios'
import { HEROKUURL } from '../environmentVariables'

export default function Menu({ setScannedData }) {
	const [showScanner, setShowScanner] = useState(false)
	const [isActive, setIsActive] = useState(false)

	const dialogRef = useRef()
	const collectionnameRef = useRef()
	const { collectionId, userId } = useParams()

	const navigate = useNavigate()

	let mainMenu = true
	const location = useLocation()
	if (location.pathname === `/users/${userId}/collections/${collectionId}`) {
		mainMenu = false
	}

	function handleTemplate(event) {
		//add classname for highlighting clicked template
		setIsActive(current => !current)
		//get name of template for adding to collection
		const templateName = event.target.dataset.value
		return templateName
	}

	async function saveCollection() {
		await axios.post(`${HEROKUURL}/users/${userId}/collections`, {
			templateId: 1,
			collectionName: collectionnameRef.current.value,
		})
		dialogRef.current.close()
		window.location.reload(true)
	}

	function openSearch() {
		const input = window.prompt('Search for')
		console.log(input)
		navigate(`/users/${userId}/${input}`)
	}

	useEffect(() => {
		const backdrops = document.querySelectorAll('dialog::backdrop')

		backdrops.forEach(element => {
			element.addEventListener('click', event => (event.target.open = false))
		})
	}, [])

	useEffect(() => {
		if (showScanner) {
			document.getElementById('addItem').showModal()
		}
	}, [showScanner])

	return (
		<>
			{/* Overlay for adding a collection */}
			<dialog id='addCollection' ref={dialogRef}>
				<h1>Your new collection</h1>
				<div className='addCollectionName'>
					<h4>Enter a collectionname:</h4>
					<input ref={collectionnameRef} type='text'></input>
				</div>
				<div className='addTemplates'>
					<h4>Choose a template:</h4>
					<label
						onClick={handleTemplate}
						className={isActive ? 'addTemplate highlightSelectedTemplate' : 'addTemplate'}
						data-value='books'>
						Books
					</label>
				</div>
				<div className='addButton'>
					<button onClick={saveCollection}>Add</button>
				</div>
			</dialog>

			{/* Overlay for adding an item to a collection */}
			{showScanner ? (
				<>
					<dialog id='addItem' onClose={() => setShowScanner(false)}>
						<h1>Your new item</h1>
						<h4>Scan your barcode</h4>
						<Scan setScannedData={setScannedData} collectionId={collectionId} />
					</dialog>
				</>
			) : null}

			{/* Menu bar */}
			<div className='menu'>
				{mainMenu ? (
					<NavLink to={`/users/${userId}/settings`}>
						<img src='/images/settings.svg' alt='settings' />
					</NavLink>
				) : (
					<NavLink to={`/users/${userId}/collections`}>
						<img src='/images/goback.svg' alt='goback' />
					</NavLink>
				)}
				{mainMenu ? (
					<img
						onClick={() => document.getElementById('addCollection').showModal()}
						src='/images/plus.svg'
						alt='plus'
					/>
				) : (
					<img
						onClick={() => {
							setShowScanner(true)
						}}
						src='/images/plus.svg'
						alt='plus'
					/>
				)}
				<div onClick={openSearch}>
					<img src='/images/magnifyingglass.svg' alt='magnifyingglass' />
				</div>
			</div>
		</>
	)
}
